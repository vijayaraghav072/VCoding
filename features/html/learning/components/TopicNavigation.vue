<template>
  <nav class="topic-pager" aria-label="Topic navigation">
    <button
      type="button"
      class="topic-pager__btn topic-pager__btn--prev"
      :disabled="!hasPrev"
      @click="$emit('go-prev')"
    >
      <span class="topic-pager__arrow" aria-hidden="true">←</span>
      <span class="topic-pager__info">
        <span class="topic-pager__direction">Previous</span>
        <span class="topic-pager__name">{{ prevLabel }}</span>
      </span>
    </button>

    <button
      type="button"
      class="topic-pager__btn topic-pager__btn--next"
      :disabled="!hasNext"
      @click="$emit('go-next')"
    >
      <span class="topic-pager__info topic-pager__info--end">
        <span class="topic-pager__direction">Next</span>
        <span class="topic-pager__name">{{ nextLabel }}</span>
      </span>
      <span class="topic-pager__arrow" aria-hidden="true">→</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  hasPrev: boolean
  hasNext: boolean
  prevLabel: string
  nextLabel: string
}>()

defineEmits<{
  'go-prev': []
  'go-next': []
}>()
</script>
