<template>
  <div class="signup-page">
    <div class="signup-form-panel">
      <div class="signup-form-inner">

        <RouterLink :to="{ name: 'home' }" class="signup-logo" aria-label="Go to homepage">
          <span class="signup-logo-mark">
            <SvgIcon icon-name="logo-braces" width="18" height="18" />
          </span>
          <span class="signup-logo-text">V<span class="signup-logo-accent">coding</span></span>
        </RouterLink>

        <div class="signup-heading">
          <h1 class="signup-title">Create your account</h1>
          <p class="signup-subtitle">Join Vcoding and start your coding journey.</p>
        </div>

        <form class="signup-form" novalidate @submit.prevent="onSubmit">
          <LoginField
            id="signup-name"
            v-model="form.name"
            label="Full name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            autocomplete="name"
            icon-name="user-icon"
            required
          />

          <LoginField
            id="signup-email"
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
            id="signup-password"
            v-model="form.password"
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            autocomplete="new-password"
            icon-name="lock-icon"
            required
            toggle-password
          />

          <LoginField
            id="signup-confirm"
            v-model="form.confirmPassword"
            label="Confirm password"
            name="confirm-password"
            type="password"
            placeholder="Confirm your password"
            autocomplete="new-password"
            icon-name="lock-icon"
            required
            toggle-password
          />

          <p class="signup-password-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Password must be at least 8 characters with a mix of letters, numbers &amp; symbols.
          </p>

          <label class="signup-checkbox-wrap">
            <input type="checkbox" v-model="form.agreed" class="signup-checkbox" />
            <span class="signup-checkbox-custom"></span>
            <span class="signup-checkbox-text">
              I agree to the
              <RouterLink :to="{ name: 'terms-and-conditions' }" class="signup-inline-link">Terms of Service</RouterLink>
              and
              <RouterLink :to="{ name: 'privacy-policy' }" class="signup-inline-link">Privacy Policy</RouterLink>
            </span>
          </label>

          <button
            type="submit"
            class="signup-btn-primary"
            :class="{ 'is-loading': submitting }"
            :disabled="submitting"
          >
            <span class="signup-btn-text">Create account</span>
            <span class="signup-btn-arrow">
              <SvgIcon icon-name="arrow-right-icon" width="18" height="18" />
            </span>
            <span class="signup-btn-spinner"></span>
          </button>

          <div class="signup-divider">
            <span class="signup-divider-line"></span>
            <span class="signup-divider-text">or</span>
            <span class="signup-divider-line"></span>
          </div>

          <div class="signup-social-group">
            <button
              type="button"
              class="signup-btn-social signup-btn-google"
              :disabled="submitting || socialCooldown"
              aria-label="Continue with Google"
              @click="onSocial('google')"
            >
              <SvgIcon icon-name="google-icon" width="22" height="22" />
              <span class="signup-btn-social-text">Continue with Google</span>
            </button>
          </div>
        </form>

        <p class="signup-footer-text">
          Already have an account?
          <RouterLink :to="{ name: 'login' }" class="signup-footer-link">Sign in</RouterLink>
        </p>
      </div>
    </div>

    <AuthVisualPanel />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SvgIcon from '@/common/UI-components/SvgIcon.vue'
import AuthVisualPanel from '@/components/shared/AuthVisualPanel.vue'
import LoginField from '@/components/shared/LoginField.vue'
import { useSeo } from '@/composables/useSeo'
import { useAuth } from '@/composables/useAuth'

useSeo({
  title: 'Create Account',
  description: 'Create your free Vcoding account to track progress, save bookmarks, and access personalized learning content.',
  path: '/signup',
  noIndex: true,
})

const { signInWithGoogle, error: authError } = useAuth()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreed: false,
})

const submitting = ref(false)
const socialCooldown = ref(false)

async function onSubmit() {
  const name = form.name.trim()
  const email = form.email.trim()
  const password = form.password
  const confirmPassword = form.confirmPassword

  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill in all fields.')
    return
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters.')
    return
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.')
    return
  }

  if (!form.agreed) {
    alert('Please agree to the Terms of Service and Privacy Policy.')
    return
  }

  submitting.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert('Account created successfully!')
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Sign up failed. Please try again.'
    alert(message)
  } finally {
    submitting.value = false
  }
}

async function onSocial(provider: string) {
  if (socialCooldown.value) return
  socialCooldown.value = true

  if (provider === 'google') {
    await signInWithGoogle()
  }

  setTimeout(() => {
    socialCooldown.value = false
  }, 2000)
}
</script>

<style scoped>
.signup-page {
  --sp-primary: #12408e;
  --sp-primary-dark: #0c3070;
  --sp-primary-light: #eef3fb;
  --sp-primary-glow: rgba(18, 64, 142, 0.12);
  --sp-text: hsl(210, 10%, 25%);
  --sp-text-soft: hsl(210, 8%, 45%);
  --sp-text-muted: hsl(210, 6%, 62%);
  --sp-border: hsl(210, 20%, 88%);
  --sp-bg: #ffffff;
  --sp-radius: 12px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 72px);
  overflow: hidden;
  background: var(--sp-bg);
}

.signup-form-panel {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 40px;
  overflow-y: auto;
}

.signup-form-inner {
  width: 100%;
  max-width: 440px;
}

.signup-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 40px;
}

.signup-logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--sp-primary);
  color: hsl(0, 0%, 100%);
  padding: 6px 10px;
  border-radius: 8px;
}

.signup-logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--sp-text);
  letter-spacing: -0.02em;
}

.signup-logo-accent {
  color: var(--sp-primary);
}

.signup-heading {
  margin-bottom: 28px;
}

.signup-title {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--sp-text);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 8px;
}

.signup-subtitle {
  font-size: 0.95rem;
  color: var(--sp-text-soft);
  line-height: 1.5;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.signup-password-hint {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: -8px 0 20px;
  font-size: 0.8rem;
  color: var(--sp-text-muted);
  line-height: 1.5;
}

.signup-password-hint svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.signup-checkbox-wrap {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin-bottom: 24px;
}

.signup-checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.signup-checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--sp-border);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.signup-checkbox-custom::after {
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

.signup-checkbox:checked + .signup-checkbox-custom {
  background: var(--sp-primary);
  border-color: var(--sp-primary);
  box-shadow: 0 0 0 3px var(--sp-primary-glow);
}

.signup-checkbox:checked + .signup-checkbox-custom::after {
  opacity: 1;
  transform: scale(1);
}

.signup-checkbox:focus-visible + .signup-checkbox-custom {
  box-shadow: 0 0 0 3px var(--sp-primary-glow);
}

.signup-checkbox-text {
  font-size: 0.85rem;
  color: var(--sp-text-soft);
  line-height: 1.5;
}

.signup-inline-link {
  font-weight: 700;
  color: var(--sp-primary);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.2s ease, color 0.2s ease;
}

.signup-inline-link:hover {
  color: var(--sp-primary-dark);
  text-decoration-color: var(--sp-primary-dark);
}

.signup-btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 28px;
  background: var(--sp-primary);
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: var(--sp-radius);
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

.signup-btn-primary:hover {
  background: var(--sp-primary-dark);
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(18, 64, 142, 0.3);
}

.signup-btn-primary:active {
  transform: scale(0.99);
}

.signup-btn-primary:focus-visible {
  outline: 2px solid var(--sp-primary);
  outline-offset: 2px;
}

.signup-btn-arrow {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.signup-btn-primary:hover .signup-btn-arrow {
  transform: translateX(3px);
}

.signup-btn-spinner {
  display: none;
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  animation: signup-spin 0.65s linear infinite;
}

.signup-btn-primary.is-loading .signup-btn-text,
.signup-btn-primary.is-loading .signup-btn-arrow {
  opacity: 0;
  visibility: hidden;
}

.signup-btn-primary.is-loading .signup-btn-spinner {
  display: block;
  position: absolute;
}

@keyframes signup-spin {
  to { transform: rotate(360deg); }
}

.signup-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.signup-divider-line {
  flex: 1;
  height: 1px;
  background: var(--sp-border);
}

.signup-divider-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--sp-text-muted);
  letter-spacing: 0.08em;
}

.signup-social-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.signup-btn-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 13px 20px;
  background: var(--sp-bg);
  color: var(--sp-text);
  border: 1.5px solid var(--sp-border);
  border-radius: var(--sp-radius);
  font-family: inherit;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease,
    opacity 0.2s ease;
}

.signup-btn-social:hover {
  border-color: hsl(210, 20%, 78%);
  background: hsl(210, 30%, 98%);
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.signup-btn-social:active {
  transform: scale(0.99);
}

.signup-btn-social:focus-visible {
  outline: 2px solid var(--sp-primary);
  outline-offset: 2px;
}

.signup-btn-social:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.signup-btn-social-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--sp-text);
}

.signup-footer-text {
  text-align: center;
  margin-top: 28px;
  font-size: 0.9rem;
  color: var(--sp-text-soft);
}

.signup-footer-link {
  font-weight: 700;
  color: var(--sp-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.signup-footer-link:hover {
  color: var(--sp-primary-dark);
}

@media (max-width: 860px) {
  .signup-page {
    grid-template-columns: 1fr;
  }

  .signup-form-panel {
    padding: 40px 24px;
  }

  .signup-form-inner {
    max-width: 440px;
  }
}

@media (max-width: 480px) {
  .signup-form-panel {
    padding: 32px 20px;
  }

  .signup-title {
    font-size: 1.5rem;
  }

  .signup-logo {
    margin-bottom: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .signup-btn-primary,
  .signup-btn-social,
  .signup-checkbox-custom,
  .signup-checkbox-custom::after {
    transition: none;
  }
}
</style>
