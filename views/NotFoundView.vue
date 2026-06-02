<template>
  <div class="not-found">
    <span class="not-found-code">404</span>
    <h1 class="not-found-heading">Page Not Found</h1>
    <p class="not-found-message">
      Sorry, the page you're looking for doesn't exist or has been moved.
    </p>
    <RouterLink :to="{ name: 'home' }" class="not-found-btn">Go Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  path: '/404',
  noIndex: true,
})
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: 48px 24px;
  text-align: center;
}

.not-found-code {
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 900;
  color: #12408e;
  line-height: 1;
  letter-spacing: -0.04em;
  opacity: 0.15;
}

.not-found-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: hsl(210, 10%, 20%);
  margin-top: 8px;
  letter-spacing: -0.02em;
}

.not-found-message {
  font-size: 1rem;
  color: hsl(210, 8%, 45%);
  max-width: 420px;
  line-height: 1.6;
  margin-top: 12px;
}

.not-found-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  padding: 14px 32px;
  background: #12408e;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 4px 14px rgba(18, 64, 142, 0.2);
}

.not-found-btn:hover {
  background: #0c3070;
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(18, 64, 142, 0.3);
}

.not-found-btn:active {
  transform: scale(0.98);
}

.not-found-btn:focus-visible {
  outline: 2px solid #12408e;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .not-found-btn {
    transition: none;
  }
}
</style>
