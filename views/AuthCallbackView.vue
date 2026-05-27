<template>
  <div class="auth-callback">
    <div class="auth-callback-spinner"></div>
    <p class="auth-callback-text">Signing you in…</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()

onMounted(async () => {
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    router.replace({ name: 'home' })
  } else {
    router.replace({ name: 'login' })
  }
})
</script>

<style scoped>
.auth-callback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  gap: 16px;
}

.auth-callback-spinner {
  width: 36px;
  height: 36px;
  border: 3.5px solid hsl(210, 20%, 90%);
  border-top-color: #12408e;
  border-radius: 50%;
  animation: auth-spin 0.7s linear infinite;
}

.auth-callback-text {
  font-size: 0.95rem;
  color: hsl(210, 8%, 45%);
  font-weight: 500;
}

@keyframes auth-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .auth-callback-spinner {
    animation: none;
    border-top-color: hsl(210, 20%, 90%);
    border-left-color: #12408e;
  }
}
</style>
