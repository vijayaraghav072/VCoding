<template>
  <footer class="site-footer-bar" role="contentinfo">
    <div class="site-footer-container">
      <div class="site-footer-columns-grid">
        <div class="site-footer-brand-block">
          <RouterLink :to="{ name: 'home' }" class="site-footer-brand-link" aria-label="Vcoding home">
            <span class="site-footer-brand-logo-mark">
              <SvgIcon icon-name="logo-braces" width="22" height="22" />
            </span>
            <span class="site-footer-brand-name-text">Vcoding</span>
          </RouterLink>
          <p class="site-footer-brand-description">
            A modern learning platform for programmers. Master DSA, system design,
            and full-stack development with structured paths and hands-on practice.
          </p>
        </div>

        <div class="site-footer-column">
          <h4 class="site-footer-column-heading">Quick Links</h4>
          <ul class="site-footer-link-list">
            <li><RouterLink :to="{ name: 'home' }" class="site-footer-link">Home</RouterLink></li>
            <li><RouterLink :to="{ name: 'articles' }" class="site-footer-link">Articles</RouterLink></li>
            <li><RouterLink :to="{ name: 'problems' }" class="site-footer-link">Problems</RouterLink></li>
            <li><RouterLink :to="{ name: 'explore' }" class="site-footer-link">Courses</RouterLink></li>
          </ul>
        </div>

        <div class="site-footer-column">
          <h4 class="site-footer-column-heading">Resources</h4>
          <ul class="site-footer-link-list">
            <li><a href="javascript:void(0)" class="site-footer-link">Docs</a></li>
            <li><a href="javascript:void(0)" class="site-footer-link">Blog</a></li>
            <li><a href="javascript:void(0)" class="site-footer-link">Help Center</a></li>
            <li><a href="javascript:void(0)" class="site-footer-link">Leaderboard</a></li>
          </ul>
        </div>

        <div class="site-footer-column">
          <h4 class="site-footer-column-heading">Connect</h4>
          <ul class="site-footer-social-list" aria-label="Social links">
            <li>
              <a href="javascript:void(0)" class="site-footer-social-link" aria-label="Twitter">
                <SvgIcon icon-name="twitter-icon" width="18" height="18" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="site-footer-social-link" aria-label="GitHub">
                <SvgIcon icon-name="github-icon" width="18" height="18" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="site-footer-social-link" aria-label="LinkedIn">
                <SvgIcon icon-name="linkedin-icon" width="18" height="18" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="site-footer-social-link" aria-label="YouTube">
                <SvgIcon icon-name="youtube-icon" width="18" height="18" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="site-footer-bottom-bar">
        <p class="site-footer-copyright-text">&copy; {{ year }} Vcoding. Built for learning.</p>
        <ul class="site-footer-legal-list">
          <li><RouterLink :to="{ name: 'privacy-policy' }" class="site-footer-link site-footer-link--muted">Privacy</RouterLink></li>
          <li><RouterLink :to="{ name: 'terms-and-conditions' }" class="site-footer-link site-footer-link--muted">Terms</RouterLink></li>
          <li><RouterLink :to="{ name: 'contact' }" class="site-footer-link site-footer-link--muted">Contact</RouterLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import SvgIcon from "@/common/UI-components/SvgIcon.vue";

const year = computed<number>(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
.site-footer-bar {
  position: relative;
  z-index: 2;
  background: #000000;
  color: hsl(0, 0%, 100%);
  padding: 64px 24px 24px;
  font-family: var(--font-sans);
}

.site-footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.site-footer-columns-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}

.site-footer-brand-block {
  max-width: 360px;
}

.site-footer-brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  margin-bottom: 16px;
  transition: color 0.2s ease;
}

.site-footer-brand-link:hover {
  color: var(--color-primary);
}

.site-footer-brand-logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 4px;
  background: rgba(var(--color-primary-rgb), 0.18);
  color: var(--color-primary);
}

.site-footer-brand-name-text {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.site-footer-brand-description {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: rgba(var(--color-secondary-rgb), 0.6);
}

.site-footer-column-heading {
  margin: 0 0 18px 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
}

.site-footer-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.site-footer-link {
  color: hsl(0, 0%, 100%);
  font-size: 0.92rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-footer-link:hover,
.site-footer-link:focus-visible {
  color: var(--color-primary);
  outline: none;
}

.site-footer-link--muted {
  color: rgba(var(--color-secondary-rgb), 0.55);
  font-size: 0.85rem;
}

.site-footer-link--muted:hover {
  color: var(--color-primary);
}

.site-footer-social-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.site-footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(var(--color-secondary-rgb), 0.12);
  background: rgba(var(--color-secondary-rgb), 0.04);
  color: hsl(0, 0%, 100%);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.site-footer-social-link:hover,
.site-footer-social-link:focus-visible {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.12);
  transform: translateY(-2px);
  outline: none;
}

.site-footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid #1f2937;
  font-size: 0.85rem;
}

.site-footer-copyright-text {
  margin: 0;
  color: rgba(var(--color-secondary-rgb), 0.5);
}

.site-footer-legal-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

@media (max-width: 960px) {
  .site-footer-columns-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }

  .site-footer-brand-block {
    grid-column: 1 / -1;
    max-width: none;
  }
}

@media (max-width: 560px) {
  .site-footer-bar {
    padding: 48px 20px 20px;
  }

  .site-footer-columns-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }

  .site-footer-bottom-bar {
    justify-content: center;
    text-align: center;
  }

  .site-footer-legal-list {
    justify-content: center;
  }
}
</style>
