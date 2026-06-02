<template>
  <section class="cta-section" aria-labelledby="cta-title">
    <div class="cta-section__inner">
      <h2 id="cta-title" class="cta-section__title">Start your coding journey today</h2>
      <p class="cta-section__sub">
        Join 50,000+ learners building real skills with structured paths and hands-on practice.
      </p>
      <button type="button" class="cta-section__btn" @click="onGetStarted">
        <span class="cta-section__btn-label">Get Started</span>
        <span class="cta-section__btn-arrow">
          <SvgIcon icon-name="arrow-right-icon" width="18" height="18" />
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@/common/UI-components/SvgIcon.vue'

const onGetStarted = () => {
  // TODO: route to the desired page
}
</script>

<style scoped lang="scss">
.cta-section {
  background: var(--color-primary);
  color: #fff;
  padding: 72px 24px;
}

.cta-section__inner {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
}

.cta-section__title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.cta-section__sub {
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.02rem;
  margin: 0 auto 28px auto;
  max-width: 620px;
  line-height: 1.6;
}

.cta-section__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: #fff;
  color: var(--color-primary);
  border: 1px solid #fff;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  }

  &:active {
    transform: scale(1.02);
  }
}

.cta-section__btn-label {
  display: inline;
}

.cta-section__btn-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  .cta-section__btn:hover & {
    transform: translateX(3px);
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 56px 20px;
  }

  .cta-section__title {
    font-size: 1.6rem;
  }
}
</style>
