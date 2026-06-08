<template>
  <div class="topic-article__container">
    <article class="topic-article" :key="topic.globalIndex">
      <!-- Header -->
      <header class="topic-article__header">
        <span class="topic-article__eyebrow">
          Topic {{ topic.globalIndex + 1 }} of {{ totalTopics }}
        </span>
        <h1 class="topic-article__title">{{ topic.title }}</h1>
      </header>

      <!-- Summary / intro paragraph -->
      <p v-if="topic.summary" class="topic-article__summary">
        {{ topic.summary }}
      </p>

      <!-- Main content -->
      <div
        class="topic-article__content"
        v-html="topic.content"
      ></div>

      <!-- Where it goes -->
      <section v-if="topic.whereItGoes" class="topic-section">
        <h2 class="topic-section__heading">Where it goes</h2>
        <p class="topic-section__text">{{ topic.whereItGoes }}</p>
      </section>

      <!-- Common attributes -->
      <section v-if="topic.commonAttributes && topic.commonAttributes.length" class="topic-section">
        <h2 class="topic-section__heading">Common attributes</h2>
        <ul class="topic-section__attr-list">
          <li
            v-for="attr in topic.commonAttributes"
            :key="attr"
            class="topic-section__attr-item"
          >
            <code>{{ attr }}</code>
          </li>
        </ul>
      </section>

      <!-- Syntax -->
      <section v-if="topic.syntax" class="topic-section">
        <h2 class="topic-section__heading">Syntax</h2>
        <div class="topic-section__syntax">
          <pre><code>{{ topic.syntax }}</code></pre>
        </div>
      </section>

      <!-- Example code -->
      <section v-if="topic.example" class="topic-section">
        <h2 class="topic-section__heading">Example</h2>
        <CodeSnippet
          :code="topic.example.code"
          :topic-id="topic.id"
          language="HTML"
        />
      </section>

      <!-- Practice Now / Live Preview -->
      <section v-if="topic.exercise" class="topic-section topic-section--practice">
        <!-- <h2 class="topic-section__heading">
          Practice Now
          <span class="topic-section__heading-arrow" aria-hidden="true">→</span>
        </h2> -->

        <div v-if="topic.exercise.expectedOutput" class="topic-exercise__preview">
          <span class="topic-exercise__preview-label">Expected output:</span>
          <p class="topic-exercise__preview-text">{{ topic.exercise.expectedOutput }}</p>
        </div>

        <div class="topic-exercise">
          <div class="topic-exercise__header">
            <h3 class="topic-exercise__title">Exercise</h3>
            <p class="topic-exercise__task">{{ topic.exercise.task }}</p>
          </div>

          <div class="topic-exercise__editor">
            <div class="topic-exercise__editor-bar">
              <span class="topic-exercise__editor-label">Your code</span>
            </div>
            <textarea
              v-model="exerciseCode"
              class="topic-exercise__textarea"
              spellcheck="false"
              rows="10"
            ></textarea>
          </div>

          <div class="topic-exercise__actions">
            <button
              type="button"
              class="topic-exercise__btn topic-exercise__btn--run"
              @click="runCode"
            >
              Run code
            </button>
            <button
              type="button"
              class="topic-exercise__btn topic-exercise__btn--reset"
              @click="resetCode"
            >
              Reset
            </button>
          </div>

          <div class="topic-exercise__output">
            <span class="topic-exercise__output-label">Output</span>
            <div class="topic-exercise__output-frame" v-html="outputHtml"></div>
          </div>
        </div>
      </section>

      <!-- Best practices -->
      <section v-if="topic.bestPractices" class="topic-section">
        <h2 class="topic-section__heading">Best practices</h2>
        <div class="topic-section__body" v-html="topic.bestPractices"></div>
      </section>

      <!-- Real-world use case -->
      <section v-if="topic.realWorld" class="topic-detail-block">
        <h3 class="topic-detail-block__heading">Real-world use case</h3>
        <div class="topic-detail-block__body" v-html="topic.realWorld"></div>
      </section>

      <!-- Common mistakes -->
      <section v-if="topic.commonMistakes" class="topic-detail-block topic-detail-block--caution">
        <h3 class="topic-detail-block__heading">Common mistakes</h3>
        <div class="topic-detail-block__body" v-html="topic.commonMistakes"></div>
      </section>

      <!-- Practice prompt -->
      <section v-if="topic.practicePrompt" class="topic-section topic-section--challenge">
        <h2 class="topic-section__heading">Practice</h2>
        <p class="topic-section__text">{{ topic.practicePrompt }}</p>
      </section>

      <!-- Quick recap -->
      <section v-if="topic.recap" class="topic-detail-block topic-detail-block--highlight">
        <h3 class="topic-detail-block__heading">Quick recap</h3>
        <div class="topic-detail-block__body" v-html="topic.recap"></div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FlatTopic } from '../html-curriculum'
import CodeSnippet from './CodeSnippet.vue'

const props = defineProps<{
  topic: FlatTopic
  totalTopics: number
}>()

const exerciseCode = ref('')
const outputHtml = ref('')

function getStarterCode(): string {
  return props.topic.exercise?.starterCode || props.topic.example?.code || ''
}

watch(
  () => props.topic.id,
  () => {
    exerciseCode.value = getStarterCode()
    outputHtml.value = getStarterCode()
  },
  { immediate: true },
)

function runCode() {
  outputHtml.value = exerciseCode.value
}

function resetCode() {
  exerciseCode.value = getStarterCode()
  outputHtml.value = getStarterCode()
}
</script>
