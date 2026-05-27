<template>
  <section ref="statsBarRef" class="stats-bar">
    <ul class="stats-bar-list">
      <li v-for="stat in stats" :key="stat.label" class="stats-bar-item">
        <span class="stats-bar-value" :data-stat-target="stat.value">{{ stat.value }}</span>
        <span class="stats-bar-label">{{ stat.label }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "500+", label: "Articles" },
  { value: "1,000+", label: "Practice Problems" },
  { value: "6", label: "Courses" },
  { value: "50K+", label: "Learners" },
];

const statsBarRef = ref<HTMLElement | null>(null);

interface ParsedStatTarget {
  element: HTMLElement;
  end: number;
  suffix: string;
  isK: boolean;
}

const COUNT_UP_DURATION_MS = 2200;

let countUpRafId: number | null = null;
let countUpObserver: IntersectionObserver | null = null;
let countUpHasRun = false;

const parseStatTarget = (
  element: HTMLElement,
  raw: string,
): ParsedStatTarget | null => {
  const normalised = raw.replace(/,/g, "").trim();
  const match = normalised.match(/^([\d.]+)\s*(K?)(\+?)$/i);
  if (!match) return null;

  const [, numericPart, kPart, plusPart] = match;
  const isK = kPart.toUpperCase() === "K";
  const baseNumber = parseFloat(numericPart);
  if (Number.isNaN(baseNumber)) return null;

  return {
    element,
    end: isK ? baseNumber * 1000 : baseNumber,
    suffix: plusPart,
    isK,
  };
};

const formatStatValue = (current: number, target: ParsedStatTarget): string => {
  if (target.isK) {
    const kValue = current / 1000;
    const kDisplay = kValue >= 1 ? `${Math.round(kValue)}` : kValue.toFixed(1);
    return `${kDisplay}K${target.suffix}`;
  }
  return `${Math.round(current).toLocaleString("en-US")}${target.suffix}`;
};

const buildInitialZeroState = (target: ParsedStatTarget): string =>
  target.isK ? `0K${target.suffix}` : `0${target.suffix}`;

const collectStatTargets = (): ParsedStatTarget[] => {
  if (!statsBarRef.value) return [];
  const valueNodes = statsBarRef.value.querySelectorAll<HTMLElement>(".stats-bar-value");
  const parsed: ParsedStatTarget[] = [];
  valueNodes.forEach((node) => {
    const raw = node.dataset.statTarget ?? node.textContent ?? "";
    const target = parseStatTarget(node, raw);
    if (target) parsed.push(target);
  });
  return parsed;
};

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const runStatsCountUp = (targets: ParsedStatTarget[]): void => {
  if (targets.length === 0) return;

  if (prefersReducedMotion()) {
    targets.forEach((target) => {
      target.element.textContent = formatStatValue(target.end, target);
    });
    return;
  }

  const startTimestamp = performance.now();

  const step = (now: number): void => {
    const elapsed = now - startTimestamp;
    const progress = Math.min(elapsed / COUNT_UP_DURATION_MS, 1);
    const eased = 1 - Math.pow(1 - progress, 4);

    targets.forEach((target) => {
      target.element.textContent = formatStatValue(eased * target.end, target);
    });

    if (progress < 1) {
      countUpRafId = requestAnimationFrame(step);
    } else {
      countUpRafId = null;
    }
  };

  countUpRafId = requestAnimationFrame(step);
};

const initStatsCountUp = (): void => {
  const targets = collectStatTargets();
  if (targets.length === 0) return;

  targets.forEach((target) => {
    target.element.textContent = buildInitialZeroState(target);
  });

  if (!statsBarRef.value || typeof IntersectionObserver === "undefined") {
    runStatsCountUp(targets);
    countUpHasRun = true;
    return;
  }

  countUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countUpHasRun) {
          countUpHasRun = true;
          runStatsCountUp(targets);
          observer.disconnect();
          countUpObserver = null;
        }
      });
    },
    { threshold: 0.3 },
  );

  countUpObserver.observe(statsBarRef.value);
};

onMounted(() => {
  initStatsCountUp();
});

onBeforeUnmount(() => {
  if (countUpRafId !== null) {
    cancelAnimationFrame(countUpRafId);
    countUpRafId = null;
  }
  if (countUpObserver !== null) {
    countUpObserver.disconnect();
    countUpObserver = null;
  }
});
</script>

<style scoped>
.stats-bar {
  width: 100%;
  background-color: #0f172a;
  padding: 70px 24px;
}

.stats-bar-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 36px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.stats-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stats-bar-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #5b9cf5;
}

.stats-bar-label {
  font-weight: 400;
  color: #ced1d5;
}

@media (max-width: 640px) {
  .stats-bar-list {
    flex-wrap: wrap;
    gap: 32px 48px;
  }
}
</style>
