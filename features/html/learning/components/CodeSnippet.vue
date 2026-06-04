<template>
  <section
    class="code-snippet"
    :aria-label="heading"
  >
    <header class="code-snippet__bar">
      <span class="code-snippet__heading">{{ heading }}</span>
      <span v-if="language" class="code-snippet__language">
        {{ language }}
      </span>
    </header>

    <div class="code-snippet__body">
      <pre class="code-snippet__pre"><code>{{ code }}</code></pre>
    </div>

    <footer v-if="showTryIt" class="code-snippet__actions">
      <button
        type="button"
        class="code-snippet__try-btn"
        @click="onTryIt"
      >
        Try It Yourself
        <span class="code-snippet__try-arrow" aria-hidden="true">→</span>
      </button>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  code: string
  heading?: string
  language?: string
  topicId?: string
  showTryIt?: boolean
}>(), {
  heading: 'Example',
  language: '',
  topicId: '',
  showTryIt: true,
})

const router = useRouter()

function onTryIt() {
  router.push({
    path: '/playground',
    query: {
      ...(props.topicId ? { topic: props.topicId } : {}),
      ...(props.language ? { lang: props.language } : {}),
      code: encodeURIComponent(props.code),
    },
  })
}
</script>
