<template>
  <section class="learn-html" :class="{ 'learn-html--ready': isReady }">
    <div class="learn-html__layout">
      <HtmlCurriculumSidebar
        :categories="CATEGORIES"
        :expanded-category-ids="expandedCategoryIds"
        :selected-category-id="selectedCategoryId"
        :selected-topic-id="selectedTopicId"
        :current-topic-index="currentTopic.globalIndex"
        :total-topics="TOTAL_TOPICS"
        :completed-topic-ids="completedIds"
        @select="onSelectTopic"
        @toggle-category="onToggleCategory"
      />

      <div class="learn-html__content" ref="contentScrollerRef">
        <nav class="learn-html__breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <button
                type="button"
                class="learn-html__breadcrumb-link"
                @click="goHome"
              >
                HTML
              </button>
            </li>
            <li class="learn-html__breadcrumb-sep" aria-hidden="true">›</li>
            <li>
              <span class="learn-html__breadcrumb-link learn-html__breadcrumb-link--static">
                {{ currentTopic.categoryTitle }}
              </span>
            </li>
            <li class="learn-html__breadcrumb-sep" aria-hidden="true">›</li>
            <li>
              <span class="learn-html__breadcrumb-current" aria-current="page">
                {{ currentTopic.title }}
              </span>
            </li>
          </ol>
        </nav>

        <TopicArticle
          :topic="currentTopic"
          :total-topics="TOTAL_TOPICS"
        />

        <CompletionFooter
          :is-completed="isCurrentDone"
          :topic-title="currentTopic.title"
          @mark-complete="onMarkComplete"
        />

        <TopicNavigation
          :has-prev="!!currentTopic.prev"
          :has-next="!!currentTopic.next"
          :prev-label="prevLabel"
          :next-label="nextLabel"
          @go-prev="goPrev"
          @go-next="goNext"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

import HtmlCurriculumSidebar from './components/HtmlCurriculumSidebar.vue'
import TopicArticle from './components/TopicArticle.vue'
import CompletionFooter from './components/CompletionFooter.vue'
import TopicNavigation from './components/TopicNavigation.vue'

import {
  CATEGORIES,
  FLAT_TOPICS,
  TOTAL_TOPICS,
  DEFAULT_SELECTION,
  findTopic,
} from './html-curriculum'
import { useHtmlProgress } from './composables/useHtmlProgress'

import './html-learning.css'

const ALL_CATEGORY_IDS = CATEGORIES.map((c) => c.id)
const BODY_CLASS = 'learn-html-active'

const route = useRoute()
const router = useRouter()
const { completedIds, isCompleted, markComplete } = useHtmlProgress()

const isReady = ref(false)
const contentScrollerRef = ref<HTMLElement | null>(null)

useSeo({
  title: 'Learn HTML — Free Tutorial & Course',
  description:
    'Master HTML from scratch with our structured, free HTML course. Covers elements, attributes, forms, semantic markup, accessibility, SEO, and more. Perfect for beginners and professionals in the US and UK.',
  path: '/learn/html',
  ogType: 'article',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Learn HTML', url: '/learn/html' },
])

function initialSelection() {
  const c = typeof route.query.category === 'string' ? route.query.category : ''
  const t = typeof route.query.topic === 'string' ? route.query.topic : ''
  const hit = FLAT_TOPICS.find((x) => x.categoryId === c && x.id === t)
  if (hit) return { categoryId: hit.categoryId, topicId: hit.id }
  return { ...DEFAULT_SELECTION }
}

const initial = initialSelection()
const selectedCategoryId = ref(initial.categoryId)
const selectedTopicId = ref(initial.topicId)
const expandedCategoryIds = ref<string[]>([...ALL_CATEGORY_IDS])

const currentTopic = computed(() =>
  findTopic(selectedCategoryId.value, selectedTopicId.value),
)

const isCurrentDone = computed(() => isCompleted(currentTopic.value.id))

const prevLabel = computed(() => {
  if (!currentTopic.value.prev) return 'Start of curriculum'
  const p = FLAT_TOPICS[currentTopic.value.globalIndex - 1]
  return p ? p.title : ''
})

const nextLabel = computed(() => {
  if (!currentTopic.value.next) return 'End of curriculum'
  const n = FLAT_TOPICS[currentTopic.value.globalIndex + 1]
  return n ? n.title : ''
})

function onMarkComplete() {
  markComplete(currentTopic.value.id)
}

function onToggleCategory(id: string) {
  const set = new Set(expandedCategoryIds.value)
  if (set.has(id)) set.delete(id)
  else set.add(id)
  expandedCategoryIds.value = Array.from(set)
}

function ensureExpanded(categoryId: string) {
  if (!expandedCategoryIds.value.includes(categoryId)) {
    expandedCategoryIds.value = [...expandedCategoryIds.value, categoryId]
  }
}

function selectTopic(
  payload: { categoryId: string; topicId: string },
  { scroll = true } = {},
) {
  selectedCategoryId.value = payload.categoryId
  selectedTopicId.value = payload.topicId
  ensureExpanded(payload.categoryId)

  router.replace({
    path: '/learn/html',
    query: { category: payload.categoryId, topic: payload.topicId },
  })

  if (scroll) {
    requestAnimationFrame(() => {
      const scroller = contentScrollerRef.value
      if (scroller && typeof scroller.scrollTo === 'function') {
        scroller.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }
}

function onSelectTopic(payload: { categoryId: string; topicId: string }) {
  selectTopic(payload)
}

function goPrev() {
  const p = currentTopic.value.prev
  if (p) selectTopic(p)
}

function goNext() {
  const n = currentTopic.value.next
  if (n) selectTopic(n)
}

function goHome() {
  router.push('/')
}

watch(
  () => [route.query.category, route.query.topic],
  ([c, t]) => {
    if (typeof c !== 'string' || typeof t !== 'string') return
    if (c === selectedCategoryId.value && t === selectedTopicId.value) return
    const hit = FLAT_TOPICS.find((x) => x.categoryId === c && x.id === t)
    if (!hit) return
    selectedCategoryId.value = hit.categoryId
    selectedTopicId.value = hit.id
    ensureExpanded(hit.categoryId)
  },
)

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.add(BODY_CLASS)
  }

  router.replace({
    path: '/learn/html',
    query: {
      category: selectedCategoryId.value,
      topic: selectedTopicId.value,
    },
  }).catch(() => {})

  requestAnimationFrame(() => { isReady.value = true })
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove(BODY_CLASS)
  }
})
</script>
