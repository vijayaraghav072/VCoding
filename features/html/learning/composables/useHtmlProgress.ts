/**
 * Composable for tracking HTML curriculum progress.
 * Uses localStorage with a Set-based data structure for O(1) lookups.
 * Follows the Observer pattern — reactive state auto-updates all consumers.
 */
import { computed, ref } from 'vue'
import { TOTAL_TOPICS } from '../html-curriculum'

const STORAGE_KEY = 'vcoding:html:completed'

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? new Set<string>(arr) : new Set()
  } catch {
    return new Set()
  }
}

function persistCompleted(ids: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch { /* quota exceeded — degrade gracefully */ }
}

const completedIds = ref<Set<string>>(loadCompleted())

export function useHtmlProgress() {
  const completedCount = computed(() => completedIds.value.size)

  const progressPercent = computed(() => {
    if (!TOTAL_TOPICS) return 0
    return Math.round((completedIds.value.size / TOTAL_TOPICS) * 100)
  })

  function isCompleted(topicId: string): boolean {
    return completedIds.value.has(topicId)
  }

  function markComplete(topicId: string): void {
    if (completedIds.value.has(topicId)) return
    const next = new Set(completedIds.value)
    next.add(topicId)
    completedIds.value = next
    persistCompleted(next)
  }

  function markIncomplete(topicId: string): void {
    if (!completedIds.value.has(topicId)) return
    const next = new Set(completedIds.value)
    next.delete(topicId)
    completedIds.value = next
    persistCompleted(next)
  }

  function categoryCompletedCount(topicIds: string[]): number {
    let n = 0
    for (const id of topicIds) {
      if (completedIds.value.has(id)) n++
    }
    return n
  }

  return {
    completedIds,
    completedCount,
    progressPercent,
    isCompleted,
    markComplete,
    markIncomplete,
    categoryCompletedCount,
  }
}
