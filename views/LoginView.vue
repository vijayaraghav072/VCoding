<template>
  <div class="login-page">
    <div class="login-form-panel">
      <div class="login-form-inner">

        <RouterLink :to="{ name: 'home' }" class="login-logo" aria-label="Go to homepage">
          <span class="login-logo-mark">
            <SvgIcon icon-name="logo-braces" width="18" height="18" />
          </span>
          <span class="login-logo-text">V<span class="login-logo-accent">coding</span></span>
        </RouterLink>

        <div class="login-heading">
          <h1 class="login-title">Welcome back</h1>
          <p class="login-subtitle">Sign in to continue your coding journey.</p>
        </div>

        <form class="login-form" novalidate @submit.prevent="onSubmit">
          <LoginField
            id="login-email"
            v-model="form.email"
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            autocomplete="email"
            icon-name="email-icon"
            required
          />

          <LoginField
            id="login-password"
            v-model="form.password"
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            icon-name="lock-icon"
            required
            toggle-password
          />

          <div class="login-options">
            <label class="login-checkbox-wrap">
              <input type="checkbox" v-model="form.remember" class="login-checkbox" />
              <span class="login-checkbox-custom"></span>
              <span class="login-checkbox-text">Remember me</span>
            </label>
            <a href="#" class="login-forgot-link" @click.prevent>Forgot password?</a>
          </div>

          <button
            type="submit"
            class="login-btn-primary"
            :class="{ 'is-loading': submitting }"
            :disabled="submitting"
          >
            <span class="login-btn-text">Sign in</span>
            <span class="login-btn-arrow">
              <SvgIcon icon-name="arrow-right-icon" width="18" height="18" />
            </span>
            <span class="login-btn-spinner"></span>
          </button>

          <div class="login-divider">
            <span class="login-divider-line"></span>
            <span class="login-divider-text">or</span>
            <span class="login-divider-line"></span>
          </div>

          <div class="login-social-group">
            <button
              type="button"
              class="login-btn-social login-btn-google"
              :disabled="submitting || socialCooldown"
              aria-label="Continue with Google"
              @click="onSocial('google')"
            >
              <SvgIcon icon-name="google-icon" width="22" height="22" />
              <span class="login-btn-social-text">Continue with Google</span>
            </button>
          </div>
        </form>

        <p class="login-footer-text">
          Don't have an account?
          <RouterLink :to="{ name: 'signup' }" class="login-footer-link">Sign up</RouterLink>
        </p>
      </div>
    </div>

    <AuthVisualPanel />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import SvgIcon from '@/common/UI-components/SvgIcon.vue';
import AuthVisualPanel from '@/components/shared/AuthVisualPanel.vue';
import LoginField from '@/components/shared/LoginField.vue';
import { useSeo } from '@/composables/useSeo';
import { useAuth } from '@/composables/useAuth';

useSeo({
  title: 'Sign In',
  description: 'Sign in to your Vcoding account to track your learning progress, save bookmarks, and access personalized content.',
  path: '/login',
  noIndex: true,
});

const router = useRouter();
const { signInWithGoogle, error: authError } = useAuth();

const form = reactive({
  email: '',
  password: '',
  remember: false,
});

const submitting = ref(false);
const socialCooldown = ref(false);

async function onSubmit() {
  const email = form.email.trim();
  const password = form.password;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  submitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert('Login successful!');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Login failed. Please try again.';
    alert(message);
  } finally {
    submitting.value = false;
  }
}

async function onSocial(provider: string) {
  if (socialCooldown.value) return;
  socialCooldown.value = true;

  if (provider === 'google') {
    await signInWithGoogle();
  }

  setTimeout(() => {
    socialCooldown.value = false;
  }, 2000);
}
</script>

<style scoped>
.login-page {
  --lp-primary: #12408e;
  --lp-primary-dark: #0c3070;
  --lp-primary-light: #eef3fb;
  --lp-primary-glow: rgba(18, 64, 142, 0.12);
  --lp-text: hsl(210, 10%, 25%);
  --lp-text-soft: hsl(210, 8%, 45%);
  --lp-text-muted: hsl(210, 6%, 62%);
  --lp-border: hsl(210, 20%, 88%);
  --lp-bg: #ffffff;
  --lp-radius: 12px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 72px);
  overflow-y: hidden;
  background: var(--lp-bg);
}

.login-form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  min-height: 0;
  overflow-y: auto;
}

.login-form-inner {
  width: 100%;
  max-width: 450px;
}

.login-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 48px;
}

.login-logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--lp-primary);
  color: hsl(0, 0%, 100%);
  padding: 6px 10px;
  border-radius: 8px;
}

.login-logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--lp-text);
  letter-spacing: -0.02em;
}

.login-logo-accent {
  color: var(--lp-primary);
}

.login-heading {
  margin-bottom: 32px;
}

.login-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--lp-text);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 8px;
}

.login-subtitle {
  font-size: 0.95rem;
  color: var(--lp-text-soft);
  line-height: 1.5;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.login-checkbox-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}

.login-checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.login-checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--lp-border);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.login-checkbox-custom::after {
  content: '';
  width: 10px;
  height: 10px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 6L5 8.5L9.5 3.5' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s ease;
}

.login-checkbox:checked + .login-checkbox-custom {
  background: var(--lp-primary);
  border-color: var(--lp-primary);
  box-shadow: 0 0 0 3px var(--lp-primary-glow);
}

.login-checkbox:checked + .login-checkbox-custom::after {
  opacity: 1;
  transform: scale(1);
}

.login-checkbox:focus-visible + .login-checkbox-custom {
  box-shadow: 0 0 0 3px var(--lp-primary-glow);
}

.login-checkbox-text {
  font-size: 0.85rem;
  color: var(--lp-text-soft);
  font-weight: 500;
}

.login-forgot-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--lp-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.login-forgot-link:hover {
  color: var(--lp-primary-dark);
}

.login-btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 28px;
  background: var(--lp-primary);
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: var(--lp-radius);
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 4px 14px rgba(18, 64, 142, 0.2);
  overflow: hidden;
}

.login-btn-primary:hover {
  background: var(--lp-primary-dark);
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(18, 64, 142, 0.3);
}

.login-btn-primary:active {
  transform: scale(0.99);
}

.login-btn-primary:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
}

.login-btn-arrow {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.login-btn-primary:hover .login-btn-arrow {
  transform: translateX(3px);
}

.login-btn-spinner {
  display: none;
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  animation: login-spin 0.65s linear infinite;
}

.login-btn-primary.is-loading .login-btn-text,
.login-btn-primary.is-loading .login-btn-arrow {
  opacity: 0;
  visibility: hidden;
}

.login-btn-primary.is-loading .login-btn-spinner {
  display: block;
  position: absolute;
}

@keyframes login-spin {
  to { transform: rotate(360deg); }
}

.login-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.login-divider-line {
  flex: 1;
  height: 1px;
  background: var(--lp-border);
}

.login-divider-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--lp-text-muted);
  letter-spacing: 0.08em;
}

.login-social-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.login-btn-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 13px 20px;
  background: var(--lp-bg);
  color: var(--lp-text);
  border: 1.5px solid var(--lp-border);
  border-radius: var(--lp-radius);
  font-family: inherit;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease,
    opacity 0.2s ease;
}

.login-btn-social:hover {
  border-color: hsl(210, 20%, 78%);
  background: hsl(210, 30%, 98%);
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.login-btn-social:active {
  transform: scale(0.99);
}

.login-btn-social:focus-visible {
  outline: 2px solid var(--lp-primary);
  outline-offset: 2px;
}

.login-btn-social:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.login-btn-social-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--lp-text);
}

.login-footer-text {
  text-align: center;
  margin-top: 28px;
  font-size: 0.9rem;
  color: var(--lp-text-soft);
}

.login-footer-link {
  font-weight: 700;
  color: var(--lp-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.login-footer-link:hover {
  color: var(--lp-primary-dark);
}

@media (max-width: 860px) {
  .login-page {
    grid-template-columns: 1fr;
    min-height: calc(100vh - 72px);
  }

  .login-form-panel {
    padding: 40px 24px;
  }

  .login-form-inner {
    max-width: 440px;
  }
}

@media (max-width: 480px) {
  .login-form-panel {
    padding: 32px 20px;
    min-height: calc(100vh - 72px);
  }

  .login-title {
    font-size: 1.5rem;
  }

  .login-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .login-logo {
    margin-bottom: 36px;
  }

  .login-social-group {
    gap: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .login-btn-primary,
  .login-btn-social,
  .login-checkbox-custom,
  .login-checkbox-custom::after {
    transition: none;
  }
}
</style>
