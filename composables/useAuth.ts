// RECONSTRUCTED FILE — original was lost on 2026-05-26.
// Minimal API surface used by LoginView.vue and SignupView.vue.
// signInWithGoogle is intentionally UNIMPLEMENTED — restore original logic
// (likely calling supabase.auth.signInWithOAuth) before relying on it.
import { ref, type Ref } from 'vue'
import { supabase } from '@/lib/supabase'

export function useAuth() {
  const error: Ref<string | null> = ref(null)
  const loading = ref(false)

  async function signInWithGoogle(): Promise<void> {
    error.value = null
    loading.value = true
    try {
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (oauthError) {
        error.value = oauthError.message
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Sign-in failed'
    } finally {
      loading.value = false
    }
  }

  async function signOut(): Promise<void> {
    await supabase.auth.signOut()
  }

  return { signInWithGoogle, signOut, error, loading }
}
