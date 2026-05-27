// RECONSTRUCTED FILE — original was lost on 2026-05-26.
// Provides an aria-live announcement string that updates when the route changes.
// Used by App.vue's screen-reader announcement region.
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useRouteAnnouncer() {
  const announcement = ref('')
  const route = useRoute()

  watch(
    () => route.fullPath,
    () => {
      const title = (route.meta?.title as string | undefined) ?? ''
      announcement.value = title ? `Navigated to ${title}` : ''
    },
  )

  return { announcement }
}
