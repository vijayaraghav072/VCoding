<template>
  <footer class="completion-footer">
    <div class="completion-footer__text">
      <h3 class="completion-footer__title">
        Finished this topic?
      </h3>
      <p class="completion-footer__description">
        Mark it complete to track your progress and unlock the HTML certificate.
      </p>
    </div>
    <button
      type="button"
      class="completion-footer__btn"
      :class="{
        'completion-footer__btn--done': isCompleted,
      }"
      :disabled="isCompleted"
      :aria-pressed="isCompleted ? 'true' : 'false'"
      :aria-label="
        isCompleted
          ? `${topicTitle} marked as completed`
          : `Mark ${topicTitle} as completed`
      "
      @click="$emit('mark-complete')"
    >
      <svg
        v-if="isCompleted"
        class="completion-footer__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <svg
        v-else
        class="completion-footer__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
      </svg>
      <span>{{ isCompleted ? 'Completed' : 'Mark as Completed' }}</span>
    </button>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  isCompleted: boolean
  topicTitle: string
}>()

defineEmits<{
  'mark-complete': []
}>()
</script>
