<template>
  <header class="site-header-bar" :class="{ 'site-header-bar--is-scrolled': isScrolled }">
    <div
      class="site-header-scroll-progress-bar"
      aria-hidden="true"
      :style="{ transform: `scaleX(${scrollProgress})` }"
    ></div>
    <div class="site-header-bar-container">
      <div class="site-header-brand-and-tabs-wrapper">
        <RouterLink :to="{ name: 'home' }" class="site-header-brand-link">
          <span class="site-header-brand-logo-mark">
            <SvgIcon icon-name="logo-braces" width="22" height="22" />
          </span>
          <span class="site-header-brand-name-text">Vcoding</span>
        </RouterLink>

        <nav class="site-header-nav-tabs-list">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.id"
            :to="{ name: tab.routeName }"
            class="site-header-nav-tab-link"
            :class="{ 'site-header-nav-tab-link--is-active': route.name === tab.routeName }"
          >
            <span class="site-header-nav-tab-icon">
              <SvgIcon :icon-name="tab.icon" :width="tab.iconWidth" :height="tab.iconHeight" />
            </span>
            <span class="site-header-nav-tab-label">{{ tab.label }}</span>
          </RouterLink>
        </nav>
      </div>

      <div class="site-header-cta-section">
        <div class="site-header-gradient-strip" aria-hidden="true">
          <button type="button" class="site-header-sign-in-btn" @click="router.push({ name: 'login' })">
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import SvgIcon from "@/common/UI-components/SvgIcon.vue";

const emit = defineEmits<{ 'open-login': [] }>();
const route = useRoute();
const router = useRouter();

interface NavTab {
  id: string;
  label: string;
  routeName: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
}

const tabs: NavTab[] = [
  { id: "home", label: "Home", routeName: "home", icon: "home-icon", iconWidth: "18", iconHeight: "18" },
  { id: "articles", label: "Articles", routeName: "articles", icon: "articles-icon", iconWidth: "18", iconHeight: "18" },
  { id: "problems", label: "Problems", routeName: "problems", icon: "problems-icon", iconWidth: "22", iconHeight: "22" },
  { id: "explore", label: "Explore", routeName: "explore", icon: "explore-icon", iconWidth: "18", iconHeight: "18" },
];

const scrollProgress = ref(0);
const isScrolled = ref(false);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    (document.documentElement.scrollHeight || document.body.scrollHeight) -
    window.innerHeight;
  scrollProgress.value = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
  isScrolled.value = scrollTop > 4;
};

onMounted(() => {
  updateScrollProgress();
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollProgress);
  window.removeEventListener("resize", updateScrollProgress);
});
</script>

<style scoped lang="scss">

.site-header-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 6px 28px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(18, 64, 142, 0.05);
  // border-bottom: 1px solid rgba(18, 64, 142, 0.08);
  font-family: var(--font-sans);
}

.site-header-brand-and-tabs-wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 24px;
}

.site-header-scroll-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #0f377d, #3260be, #457fd1, #5b9cf5);
  transform: scaleX(0);
  transform-origin: left;
  transition: height 0.25s ease, filter 0.3s ease;
  z-index: 101;
  pointer-events: none;
}

.site-header-bar--is-scrolled .site-header-scroll-progress-bar {
  height: 5px;
  filter: drop-shadow(0 0 6px rgba(18, 64, 142, 0.4));
}

.site-header-bar-container {
  // padding: 14px 28px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header-brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #12408e;
}

.site-header-brand-logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background-color: #12408e;
  color: hsl(0, 0%, 100%);
}

.site-header-brand-name-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #12408e;
}

.site-header-nav-tabs-list {
  display: flex;
  align-items: center;
  gap: 8px;
}

.site-header-nav-tab-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 15px;
  font-weight: 500;
  color: #4a5568;
  text-decoration: none;
  transition: color 0.25s ease;
}

.site-header-nav-tab-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.site-header-nav-tab-link::after {
  content: "";
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 4px;
  height: 2px;
  background-color: #12408e;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease;
}

.site-header-nav-tab-link:hover {
  color: #12408e;
}

.site-header-nav-tab-link:hover::after {
  transform: scaleX(1);
}

.site-header-nav-tab-link--is-active {
  color: #12408e;
  font-weight: 600;
}

.site-header-nav-tab-link--is-active::after {
  transform: scaleX(1);
}

.site-header-cta-section {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 35%;
}

.site-header-gradient-strip {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 44px;
  background: linear-gradient(35deg, #0f377d 0%, #3260be 35%, #5b9cf5 100%);
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.site-header-sign-in-btn {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 28px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  background-color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.site-header-sign-in-btn:hover {
  background-color: hsl(0, 0%, 100%);
  border-color: #12408e;
  transform: translateY(-50%) scale(1.03);
}

.site-header-sign-in-btn:active {
  transform: translateY(-50%) scale(0.97);
}

@media (max-width: 960px) {
  .site-header-gradient-strip {
    width: 160px;
  }
}

@media (max-width: 820px) {
  .site-header-nav-tab-label {
    display: none;
  }

  .site-header-nav-tab-link::after {
    left: 8px;
    right: 8px;
  }

  .site-header-bar-container {
    // padding: 12px 16px;
    gap: 12px;
  }

  .site-header-gradient-strip {
    // width: 120px;
  }
}

@media (max-width: 560px) {
  .site-header-gradient-strip {
    // width: 80px;
  }

  .site-header-sign-in-btn {
    padding: 6px 16px;
    font-size: 13px;
    right: 40px;
  }
}
</style>
