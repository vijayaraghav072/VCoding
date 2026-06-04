<template>
  <aside class="curriculum-sidebar" aria-label="HTML curriculum">
    <header class="curriculum-sidebar__header">
      <span class="curriculum-sidebar__badge">HTML Curriculum</span>
      <h2 class="curriculum-sidebar__heading">Learn HTML</h2>

      <p class="curriculum-sidebar__stats">
        <span class="curriculum-sidebar__stats-count">
          {{ completedCount }} / {{ totalTopics }}
        </span>
        topics completed
      </p>
      <div
        class="curriculum-sidebar__progress-track"
        role="progressbar"
        :aria-valuemin="0"
        :aria-valuemax="totalTopics"
        :aria-valuenow="completedCount"
        :aria-valuetext="`${completedCount} of ${totalTopics} topics completed (${progressPercent}%)`"
      >
        <span
          class="curriculum-sidebar__progress-fill"
          :style="{ width: progressPercent + '%' }"
        ></span>
      </div>
      <p class="curriculum-sidebar__meta">
        <span class="curriculum-sidebar__meta-percent">{{ progressPercent }}%</span>
        <span
          v-if="currentTopicIndex < totalTopics"
          class="curriculum-sidebar__meta-position"
        >
          · Viewing {{ Math.min(currentTopicIndex + 1, totalTopics) }} of
          {{ totalTopics }}
        </span>
      </p>
    </header>

    <nav class="curriculum-sidebar__topics" aria-label="Topics">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="sidebar-category"
        :class="{ 'sidebar-category--expanded': isCategoryOpen(cat.id) }"
      >
        <button
          type="button"
          class="sidebar-category__toggle"
          :aria-expanded="isCategoryOpen(cat.id) ? 'true' : 'false'"
          :aria-controls="`sidebar-cat-${cat.id}`"
          @click="$emit('toggle-category', cat.id)"
        >
          <span class="sidebar-category__label">
            {{ cat.title }}
            <span class="sidebar-category__count" aria-hidden="true">
              {{ getCategoryCompleted(cat) }} / {{ cat.topics.length }}
            </span>
          </span>
          <span class="sidebar-category__chevron" aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>

        <ul
          v-show="isCategoryOpen(cat.id)"
          :id="`sidebar-cat-${cat.id}`"
          class="sidebar-category__items"
        >
          <li v-for="topic in cat.topics" :key="topic.id">
            <button
              type="button"
              class="sidebar-topic"
              :class="{
                'sidebar-topic--active':
                  selectedCategoryId === cat.id &&
                  selectedTopicId === topic.id,
                'sidebar-topic--done': isTopicDone(topic.id),
              }"
              :aria-current="
                selectedCategoryId === cat.id &&
                selectedTopicId === topic.id
                  ? 'page'
                  : undefined
              "
              @click="
                $emit('select', { categoryId: cat.id, topicId: topic.id })
              "
            >
              <span
                class="sidebar-topic__indicator"
                :aria-label="
                  isTopicDone(topic.id) ? 'Completed' : 'Not completed'
                "
              >
                <svg
                  v-if="isTopicDone(topic.id)"
                  class="sidebar-topic__check-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span v-else class="sidebar-topic__dot" aria-hidden="true"></span>
              </span>
              <span class="sidebar-topic__text">{{ topic.title }}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Category } from '../html-curriculum'

const props = defineProps<{
  categories: Category[]
  expandedCategoryIds: string[]
  selectedCategoryId: string
  selectedTopicId: string
  currentTopicIndex: number
  totalTopics: number
  completedTopicIds: Set<string>
}>()

defineEmits<{
  select: [payload: { categoryId: string; topicId: string }]
  'toggle-category': [id: string]
}>()

function isCategoryOpen(categoryId: string): boolean {
  return props.expandedCategoryIds.includes(categoryId)
}

const completedCount = computed(() => props.completedTopicIds.size)

const progressPercent = computed(() => {
  if (!props.totalTopics) return 0
  return Math.round((completedCount.value / props.totalTopics) * 100)
})

function isTopicDone(topicId: string): boolean {
  return props.completedTopicIds.has(topicId)
}

function getCategoryCompleted(cat: Category): number {
  let n = 0
  for (const t of cat.topics) {
    if (props.completedTopicIds.has(t.id)) n++
  }
  return n
}
</script>
