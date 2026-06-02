import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export interface ParsedStatTarget {
  element: HTMLElement
  end: number
  suffix: string
  isK: boolean
}

const DEFAULT_DURATION_MS = 2200

export function useCountUp(
  containerRef: Ref<HTMLElement | null>,
  valueSelector: string,
  options: { duration?: number; threshold?: number } = {},
) {
  const { duration = DEFAULT_DURATION_MS, threshold = 0.3 } = options
  const hasRun = ref(false)

  let rafId: number | null = null
  let observer: IntersectionObserver | null = null

  function parseTarget(el: HTMLElement, raw: string): ParsedStatTarget | null {
    const normalised = raw.replace(/,/g, '').trim()
    const match = normalised.match(/^([\d.]+)\s*(K?)(\+?)$/i)
    if (!match) return null

    const [, numericPart, kPart, plusPart] = match
    const isK = kPart.toUpperCase() === 'K'
    const baseNumber = parseFloat(numericPart)
    if (Number.isNaN(baseNumber)) return null

    return { element: el, end: isK ? baseNumber * 1000 : baseNumber, suffix: plusPart, isK }
  }

  function formatValue(current: number, target: ParsedStatTarget): string {
    if (target.isK) {
      const kValue = current / 1000
      const kDisplay = kValue >= 1 ? `${Math.round(kValue)}` : kValue.toFixed(1)
      return `${kDisplay}K${target.suffix}`
    }
    return `${Math.round(current).toLocaleString('en-US')}${target.suffix}`
  }

  function buildZero(target: ParsedStatTarget): string {
    return target.isK ? `0K${target.suffix}` : `0${target.suffix}`
  }

  function collectTargets(): ParsedStatTarget[] {
    if (!containerRef.value) return []
    const nodes = containerRef.value.querySelectorAll<HTMLElement>(valueSelector)
    const parsed: ParsedStatTarget[] = []
    nodes.forEach((node) => {
      const raw = node.dataset.statTarget ?? node.textContent ?? ''
      const target = parseTarget(node, raw)
      if (target) parsed.push(target)
    })
    return parsed
  }

  function prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }

  function runCountUp(targets: ParsedStatTarget[]): void {
    if (targets.length === 0) return

    if (prefersReducedMotion()) {
      targets.forEach((t) => {
        t.element.textContent = formatValue(t.end, t)
      })
      return
    }

    const startTimestamp = performance.now()

    const step = (now: number): void => {
      const elapsed = now - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)

      targets.forEach((t) => {
        t.element.textContent = formatValue(eased * t.end, t)
      })

      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        rafId = null
      }
    }

    rafId = requestAnimationFrame(step)
  }

  function init(): void {
    const targets = collectTargets()
    if (targets.length === 0) return

    targets.forEach((t) => {
      t.element.textContent = buildZero(t)
    })

    if (!containerRef.value || typeof IntersectionObserver === 'undefined') {
      runCountUp(targets)
      hasRun.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.value) {
            hasRun.value = true
            runCountUp(targets)
            obs.disconnect()
            observer = null
          }
        })
      },
      { threshold },
    )

    observer.observe(containerRef.value)
  }

  onMounted(init)

  onBeforeUnmount(() => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    if (observer !== null) {
      observer.disconnect()
      observer = null
    }
  })

  return { hasRun }
}
