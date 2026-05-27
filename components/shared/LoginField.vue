<template>
  <div class="login-field">
    <label :for="id" class="login-field-label">{{ label }}</label>
    <div class="login-field-input-wrap" :class="{ 'is-focused': isFocused }">
      <span class="login-field-icon">
        <SvgIcon :icon-name="iconName" width="18" height="18" />
      </span>
      <input
        :id="id"
        :type="currentType"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :required="required"
        class="login-field-input"
        @input="onInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <button
        v-if="togglePassword"
        type="button"
        class="login-field-toggle"
        :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
        @click="passwordVisible = !passwordVisible"
      >
        <SvgIcon
          :icon-name="passwordVisible ? 'eye-open-icon' : 'eye-closed-icon'"
          width="18"
          height="18"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SvgIcon from '@/common/UI-components/SvgIcon.vue'

const props = defineProps<{
  id: string
  modelValue: string
  label: string
  name: string
  type?: string
  placeholder?: string
  autocomplete?: string
  iconName: string
  required?: boolean
  togglePassword?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isFocused = ref(false)
const passwordVisible = ref(false)

const currentType = computed(() => {
  if (props.togglePassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type ?? 'text'
})

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.login-field {
  --lf-primary: #12408e;
  --lf-primary-glow: rgba(18, 64, 142, 0.12);
  --lf-border: hsl(210, 20%, 88%);
  --lf-text: hsl(210, 10%, 25%);
  --lf-text-soft: hsl(210, 8%, 45%);
  --lf-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

.login-field-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--lf-text);
  letter-spacing: 0.01em;
}

.login-field-input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 48px;
  border: 1.5px solid var(--lf-border);
  border-radius: var(--lf-radius);
  background: #ffffff;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.login-field-input-wrap.is-focused {
  border-color: var(--lf-primary);
  box-shadow: 0 0 0 3px var(--lf-primary-glow);
}

.login-field-icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--lf-text-soft);
}

.login-field-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  font-family: inherit;
  color: var(--lf-text);
  line-height: 1.5;
}

.login-field-input::placeholder {
  color: hsl(210, 6%, 62%);
}

.login-field-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--lf-text-soft);
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.login-field-toggle:hover {
  background: hsl(210, 20%, 95%);
  color: var(--lf-primary);
}

.login-field-toggle:focus-visible {
  outline: 2px solid var(--lf-primary);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .login-field-input-wrap,
  .login-field-toggle {
    transition: none;
  }
}
</style>
