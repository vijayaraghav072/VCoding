<template>
  <HeroSection />
  <StatsBar />
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import StatsBar from '@/components/StatsBar.vue'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const seoTitle = computed(() => {
  const meta = route.meta
  return (meta.title as string) || 'Learn Programming, DSA & System Design'
})

const seoDescription = computed(() => {
  const meta = route.meta
  return (
    (meta.description as string) ||
    'Vcoding is a free educational platform for learning programming, data structures, algorithms, system design, and full-stack development.'
  )
})

useSeo({
  title: seoTitle,
  description: seoDescription,
  path: computed(() => route.path),
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
])
</script>
