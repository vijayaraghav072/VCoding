<template>
  <section class="why-vcoding-section" aria-labelledby="why-vcoding-title">
    <div class="why-vcoding-section__inner">
      <span class="why-vcoding-section__badge">
        <span class="why-vcoding-section__badge-star">&#9734;</span>
        <span class="why-vcoding-section__badge-label">Why Vcoding?</span>
      </span>

      <h2 id="why-vcoding-title" class="why-vcoding-section__title">
        Why <span class="why-vcoding-section__title-accent">Vcoding</span>?
      </h2>

      <span class="why-vcoding-section__divider" aria-hidden="true"></span>

      <p class="why-vcoding-section__subtitle">
        Vcoding is built to make learning simpler, smarter, and more effective.
        <br />
        Everything you need to learn, practice, and grow as a developer – all in one place.
      </p>

      <div class="why-vcoding-section__grid">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="why-vcoding-card"
        >
          <span class="why-vcoding-card__icon-wrap">
            <SvgIcon :icon-name="feature.icon" :width="feature.width" :height="feature.height" />
          </span>
          <h3 class="why-vcoding-card__title">{{ feature.title }}</h3>
          <p class="why-vcoding-card__description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@/common/UI-components/SvgIcon.vue'

interface Feature {
  icon: string
  width: number
  height: number
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'articles-icon',
    width: 28,
    height: 28,
    title: 'In-Depth Articles',
    description:
      'Well-written tutorials on data structures, algorithms, system design, web development, and much more.',
  },
  {
    icon: 'code-brackets-icon',
    width: 28,
    height: 28,
    title: 'Coding Practice',
    description:
      'Solve problems by topic and difficulty with an integrated code editor and instant feedback.',
  },
  {
    icon: 'graduation-icon',
    width: 32,
    height: 32,
    title: 'Structured Courses',
    description:
      'Follow guided learning paths from beginner to advanced levels with structured content.',
  },
  {
    icon: 'trophy-icon',
    width: 34,
    height: 34,
    title: 'Track & Compete',
    description:
      'Track your progress, maintain streaks, earn achievements and compete on the leaderboard.',
  },
  {
    icon: 'categories-icon',
    width: 28,
    height: 28,
    title: 'Multiple Categories',
    description:
      'Explore a wide range of topics including DSA, Web Dev, DevOps, AI, Cyber Security, and more.',
  },
  {
    icon: 'lightning-icon',
    width: 28,
    height: 28,
    title: 'Fast & Responsive',
    description:
      'Enjoy a fast, clean and responsive learning experience across all your devices.',
  },
]
</script>

<style scoped lang="scss">
.why-vcoding-section {
  background: #f8f9fb;
  padding: 74px 24px;
  font-family: var(--font-sans);
}

.why-vcoding-section__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.why-vcoding-section__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 999px;
  background: #f0f5ff;
  border: 1px solid #e0e8f5;
  font-size: 0.82rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 20px;
}

.why-vcoding-section__badge-star {
  font-size: 0.95rem;
  line-height: 1;
  color: #f59e0b;
}

.why-vcoding-section__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 16px 0;
  line-height: 1.15;
}

.why-vcoding-section__title-accent {
  background: linear-gradient(135deg, #2b7de2, #1343c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.why-vcoding-section__divider {
  display: block;
  width: 60px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #1343c9, #3b8aeb);
  margin-bottom: 20px;
}

.why-vcoding-section__subtitle {
  max-width: 640px;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--hdr-text-soft, hsl(210, 10%, 45%));
  margin: 0 0 48px 0;
}

.why-vcoding-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

.why-vcoding-card {
  background: #fff;
  border: 1px solid hsl(210, 18%, 92%);
  border-radius: 14px;
  padding: 36px 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.why-vcoding-card:hover {
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.07);
  transform: translateY(-4px);
}

.why-vcoding-card__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--color-primary-50, hsl(216, 78%, 97%));
  color: var(--color-primary, #12408e);
  margin-bottom: 20px;
  flex-shrink: 0;
}

.why-vcoding-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: hsl(210, 20%, 14%);
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.why-vcoding-card__description {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--hdr-text-soft, hsl(210, 10%, 45%));
  margin: 0;
}

@media (max-width: 900px) {
  .why-vcoding-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .why-vcoding-section {
    padding: 56px 16px;
  }

  .why-vcoding-section__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .why-vcoding-card {
    padding: 28px 20px 24px;
  }

  .why-vcoding-section__subtitle {
    margin-bottom: 32px;
  }
}
</style>
