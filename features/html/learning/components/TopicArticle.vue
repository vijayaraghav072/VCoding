<template>
  <article class="topic-article" :key="topic.globalIndex">
    <header class="topic-article__header">
      <span class="topic-article__eyebrow">
        Topic {{ topic.globalIndex + 1 }} of {{ totalTopics }}
      </span>
      <h1 class="topic-article__title">{{ topic.title }}</h1>
      <p
        v-if="topic.summary"
        class="topic-article__summary"
      >
        {{ topic.summary }}
      </p>
    </header>

    <div
      class="topic-article__content"
      v-html="topic.content"
    ></div>

    <CodeSnippet
      v-if="topic.example"
      :code="topic.example.code"
      :topic-id="topic.id"
      language="HTML"
    />

    <section
      v-if="hasDetailBlocks"
      class="topic-detail-blocks"
      aria-label="Detailed explanation"
    >
      <div
        v-if="topic.realWorld"
        class="topic-detail-block"
      >
        <h3 class="topic-detail-block__heading">Real-world use case</h3>
        <div
          class="topic-detail-block__body"
          v-html="topic.realWorld"
        ></div>
      </div>

      <div
        v-if="topic.commonMistakes"
        class="topic-detail-block topic-detail-block--caution"
      >
        <h3 class="topic-detail-block__heading">Common mistakes</h3>
        <div
          class="topic-detail-block__body"
          v-html="topic.commonMistakes"
        ></div>
      </div>

      <div
        v-if="topic.recap"
        class="topic-detail-block topic-detail-block--highlight"
      >
        <h3 class="topic-detail-block__heading">Quick recap</h3>
        <div
          class="topic-detail-block__body"
          v-html="topic.recap"
        ></div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FlatTopic } from '../html-curriculum'
import CodeSnippet from './CodeSnippet.vue'

const props = defineProps<{
  topic: FlatTopic
  totalTopics: number
}>()

const hasDetailBlocks = computed(() => {
  const t = props.topic
  return Boolean(t.realWorld || t.commonMistakes || t.recap)
})
</script>
