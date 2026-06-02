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
import { ref } from 'vue'
import { useCountUp } from '@/composables/useCountUp'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '500+', label: 'Articles' },
  { value: '1,000+', label: 'Practice Problems' },
  { value: '6', label: 'Courses' },
  { value: '50K+', label: 'Learners' },
]

const statsBarRef = ref<HTMLElement | null>(null)

useCountUp(statsBarRef, '.stats-bar-value')
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
