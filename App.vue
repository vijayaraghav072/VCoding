<template>
  <Headerbar @open-login="goToLogin" />

  <main id="main-content" class="app-main" :class="{ 'app-main--full-bleed': isLearningRoute }">
    <RouterView />
  </main>

  <template v-if="!isLearningRoute">
    <WhyVcodingSection />
    <TestimonialSection />
    <CtaSection />
    <FooterSection />
  </template>

  <div
    aria-live="polite"
    aria-atomic="true"
    class="sr-only"
    role="status"
  >
    {{ announcement }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import Headerbar from '@/components/Headerbar.vue'
import WhyVcodingSection from '@/components/WhyVcodingSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useSeo, useOrganizationSchema, useWebsiteSchema } from '@/composables/useSeo'
import { useRouteAnnouncer } from '@/composables/useRouteAnnouncer'

const route = useRoute()
const router = useRouter()
const { announcement } = useRouteAnnouncer()

const isLearningRoute = computed(() =>
  route.path.startsWith('/learn/'),
)

useOrganizationSchema()
useWebsiteSchema()

useSeo({
  title: 'Learn Programming, DSA & System Design',
  description:
    'Vcoding is a free educational platform for learning programming, data structures, algorithms, system design, and full-stack development with structured courses and hands-on practice.',
  path: '/',
})

function goToLogin() {
  router.push({ name: 'login' })
}
</script>

<style scoped>
.app-main {
  width: 100%;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
}

.app-main--full-bleed {
  padding-top: 72px;
  min-height: 0;
  overflow: hidden;
}

.skip-to-content {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 9999;
  padding: 12px 24px;
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-to-content:focus {
  top: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
