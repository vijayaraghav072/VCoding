<template>
  <section class="testimonial-section" aria-labelledby="testimonial-title">
    <div class="testimonial-section__inner">
      <span class="testimonial-section__badge">
        <span class="testimonial-section__badge-star">&#9733;</span>
        <span class="testimonial-section__badge-label">Testimonials</span>
      </span>

      <h2 id="testimonial-title" class="testimonial-section__title">
        What Our <span class="testimonial-section__title-accent">Learners</span> Say
      </h2>

      <span class="testimonial-section__divider" aria-hidden="true"></span>

      <p class="testimonial-section__subtitle">
        Real stories from developers who leveled up their skills with Vcoding.
      </p>

      <div
        class="testimonial-stack"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonial carousel"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
        @focusin="pauseAutoplay"
        @focusout="resumeAutoplay"
        @keydown="handleKeydown"
      >
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="{ 'testimonial-card--active': getDepth(i) === 0 }"
          :style="getCardStyle(i)"
          :aria-hidden="getDepth(i) >= MAX_VISIBLE"
          role="group"
          :aria-roledescription="getDepth(i) === 0 ? 'slide' : undefined"
          :aria-label="getDepth(i) === 0 ? `Testimonial from ${testimonial.name}` : undefined"
        >
          <span class="testimonial-card__quote-mark" aria-hidden="true">&ldquo;</span>

          <p class="testimonial-card__quote">{{ testimonial.quote }}</p>

          <div v-if="testimonial.metrics" class="testimonial-card__metrics">
            <span
              v-for="metric in testimonial.metrics"
              :key="metric.label"
              class="testimonial-card__metric"
            >
              <strong class="testimonial-card__metric-value">{{ metric.value }}</strong>
              <span class="testimonial-card__metric-label">{{ metric.label }}</span>
            </span>
          </div>

          <div class="testimonial-card__author">
            <span
              class="testimonial-card__avatar"
              :style="{ background: testimonial.avatarColor }"
              aria-hidden="true"
            >
              {{ testimonial.initials }}
            </span>
            <div class="testimonial-card__author-info">
              <span class="testimonial-card__name">{{ testimonial.name }}</span>
              <span class="testimonial-card__role">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-controls">
        <button
          class="testimonial-controls__btn"
          aria-label="Previous testimonial"
          @click="prev"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          <button
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="testimonial-dots__dot"
            :class="{ 'testimonial-dots__dot--active': i === activeIndex }"
            role="tab"
            :aria-selected="i === activeIndex"
            :aria-label="`Testimonial ${i + 1} of ${testimonials.length}`"
            @click="goTo(i)"
          />
        </div>

        <button
          class="testimonial-controls__btn"
          aria-label="Next testimonial"
          @click="next"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  initials: string
  avatarColor: string
  metrics?: { label: string; value: string }[]
}

const AUTOPLAY_INTERVAL = 5000
const MAX_VISIBLE = 4

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Vcoding completely changed how I approach problem-solving. The structured courses and curated practice problems helped me crack my dream job interview at a top tech company.',
    name: 'Arjun Mehta',
    role: 'Software Engineer at Google',
    initials: 'AM',
    avatarColor: '#4f46e5',
    metrics: [
      { label: 'Problems Solved', value: '450+' },
      { label: 'Accuracy', value: '94%' },
    ],
  },
  {
    id: 2,
    quote:
      "The DSA roadmap on Vcoding is the best I've found anywhere online. Clear explanations, real-world examples, and a difficulty curve that actually makes sense for competitive programming.",
    name: 'Priya Sharma',
    role: 'CS Student, IIT Delhi',
    initials: 'PS',
    avatarColor: '#0891b2',
    metrics: [
      { label: 'Course Progress', value: '100%' },
      { label: 'Streak', value: '120 days' },
    ],
  },
  {
    id: 3,
    quote:
      "I switched careers from mechanical engineering to software development. Vcoding's step-by-step courses made the transition smooth and much less overwhelming than I expected.",
    name: 'Rahul Verma',
    role: 'Full-Stack Developer at Flipkart',
    initials: 'RV',
    avatarColor: '#059669',
    metrics: [
      { label: 'Courses Completed', value: '12' },
      { label: 'Projects Built', value: '8' },
    ],
  },
  {
    id: 4,
    quote:
      'What sets Vcoding apart is the quality of content. Every article feels like it was written by someone who truly understands what learners struggle with and how to explain it clearly.',
    name: 'Sneha Patil',
    role: 'Backend Engineer at Amazon',
    initials: 'SP',
    avatarColor: '#dc2626',
    metrics: [
      { label: 'Articles Read', value: '200+' },
      { label: 'Rank', value: 'Top 5%' },
    ],
  },
  {
    id: 5,
    quote:
      'From zero coding knowledge to building full-stack apps in six months — Vcoding gave me the roadmap and confidence I needed to make the career leap.',
    name: 'Karthik Nair',
    role: 'Frontend Developer at Razorpay',
    initials: 'KN',
    avatarColor: '#7c3aed',
    metrics: [
      { label: 'Skills Learned', value: '15+' },
      { label: 'Accuracy', value: '91%' },
    ],
  },
]

const activeIndex = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function getDepth(index: number): number {
  return (index - activeIndex.value + testimonials.length) % testimonials.length
}

function getCardStyle(index: number): Record<string, string> {
  const depth = getDepth(index)

  if (depth >= MAX_VISIBLE) {
    return {
      '--card-y': `${MAX_VISIBLE * 16}px`,
      '--card-scale': `${1 - MAX_VISIBLE * 0.05}`,
      '--card-z': '0',
      '--card-opacity': '0',
      '--card-blur': `${MAX_VISIBLE}px`,
      '--card-shadow': '0 2px 8px rgba(0,0,0,0.02)',
      'pointer-events': 'none',
    }
  }

  const shadows = [
    '0 8px 32px rgba(0,0,0,0.10)',
    '0 4px 18px rgba(0,0,0,0.06)',
    '0 2px 10px rgba(0,0,0,0.04)',
    '0 1px 4px rgba(0,0,0,0.02)',
  ]

  return {
    '--card-y': `${depth * 16}px`,
    '--card-scale': `${1 - depth * 0.05}`,
    '--card-z': `${MAX_VISIBLE - depth}`,
    '--card-opacity': `${1 - depth * 0.2}`,
    '--card-blur': `${depth * 0.7}px`,
    '--card-shadow': shadows[depth],
    'pointer-events': depth === 0 ? 'auto' : 'none',
  }
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
  resetAutoplay()
}

function prev() {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length
  resetAutoplay()
}

function goTo(index: number) {
  activeIndex.value = index
  resetAutoplay()
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length
  }, AUTOPLAY_INTERVAL)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function resetAutoplay() {
  stopAutoplay()
  startAutoplay()
}

function pauseAutoplay() {
  stopAutoplay()
}

function resumeAutoplay() {
  startAutoplay()
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    prev()
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped lang="scss">
.testimonial-section {
  background: #ffffff;
  padding: 74px 24px;
  font-family: var(--font-sans);
  overflow: hidden;
}

.testimonial-section__inner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.testimonial-section__badge {
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

.testimonial-section__badge-star {
  font-size: 0.85rem;
  line-height: 1;
  color: #f59e0b;
}

.testimonial-section__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 16px 0;
  line-height: 1.15;
}

.testimonial-section__title-accent {
  background: linear-gradient(135deg, #2b7de2, #1343c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.testimonial-section__divider {
  display: block;
  width: 60px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #1343c9, #3b8aeb);
  margin-bottom: 20px;
}

.testimonial-section__subtitle {
  max-width: 540px;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--hdr-text-soft, hsl(210, 10%, 45%));
  margin: 0 0 48px 0;
}

/* ── Card Stack ── */

.testimonial-stack {
  position: relative;
  width: 100%;
  max-width: 560px;
  min-height: 320px;
  margin-bottom: 36px;
  outline: none;

  &:focus-visible {
    border-radius: 20px;
    outline: 2px solid var(--color-primary, #12408e);
    outline-offset: 8px;
  }
}

.testimonial-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid hsl(210, 18%, 93%);
  border-radius: 16px;
  padding: 32px 28px 24px;
  text-align: left;
  cursor: pointer;
  transform-origin: center top;
  will-change: transform, opacity;

  transform: translateY(var(--card-y, 0)) scale(var(--card-scale, 1));
  z-index: var(--card-z, 0);
  opacity: var(--card-opacity, 1);
  filter: blur(var(--card-blur, 0px));
  box-shadow: var(--card-shadow, 0 4px 16px rgba(0, 0, 0, 0.06));

  transition:
    transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 500ms ease,
    filter 500ms ease,
    box-shadow 400ms ease;
}

.testimonial-card--active:hover {
  transform: translateY(calc(var(--card-y, 0px) - 8px)) scale(var(--card-scale, 1));
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.13);
}

/* ── Card Content ── */

.testimonial-card__quote-mark {
  position: absolute;
  top: 12px;
  right: 24px;
  font-size: 4.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1;
  color: var(--color-primary-100, hsl(216, 70%, 92%));
  pointer-events: none;
  user-select: none;
}

.testimonial-card__quote {
  font-size: 0.95rem;
  line-height: 1.72;
  color: hsl(210, 15%, 30%);
  margin: 0 0 20px 0;
  position: relative;
  padding-right: 32px;
}

.testimonial-card__metrics {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.testimonial-card__metric {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 8px;
  background: var(--color-primary-50, hsl(216, 78%, 97%));
  font-size: 0.78rem;
  color: hsl(210, 15%, 35%);
}

.testimonial-card__metric-value {
  font-weight: 700;
  color: var(--color-primary, #12408e);
  font-size: 0.82rem;
}

.testimonial-card__metric-label {
  font-weight: 500;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid hsl(210, 18%, 94%);
}

.testimonial-card__avatar {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.testimonial-card__author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.testimonial-card__name {
  font-size: 0.88rem;
  font-weight: 700;
  color: hsl(210, 20%, 18%);
}

.testimonial-card__role {
  font-size: 0.78rem;
  color: var(--hdr-text-soft, hsl(210, 10%, 45%));
  font-weight: 500;
}

/* ── Controls ── */

.testimonial-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.testimonial-controls__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid hsl(210, 18%, 90%);
  background: #fff;
  color: hsl(210, 15%, 35%);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: var(--color-primary, #12408e);
    border-color: var(--color-primary, #12408e);
    color: #fff;
    box-shadow: 0 4px 14px rgba(18, 64, 142, 0.25);
  }

  &:active {
    transform: scale(0.93);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary, #12408e);
    outline-offset: 2px;
  }
}

.testimonial-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.testimonial-dots__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: hsl(210, 15%, 85%);
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    width 0.3s ease,
    border-radius 0.3s ease;

  &--active {
    width: 24px;
    border-radius: 4px;
    background: var(--color-primary, #12408e);
  }

  &:hover:not(&--active) {
    background: hsl(210, 15%, 70%);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary, #12408e);
    outline-offset: 2px;
  }
}

/* ── Responsive ── */

@media (max-width: 600px) {
  .testimonial-section {
    padding: 56px 16px;
  }

  .testimonial-stack {
    min-height: 350px;
  }

  .testimonial-card {
    padding: 24px 20px 20px;
  }

  .testimonial-card__quote-mark {
    font-size: 3.5rem;
    top: 8px;
    right: 16px;
  }

  .testimonial-card__quote {
    font-size: 0.88rem;
    padding-right: 20px;
  }

  .testimonial-card__metrics {
    gap: 8px;
  }

  .testimonial-section__subtitle {
    margin-bottom: 36px;
  }

  .testimonial-controls {
    gap: 14px;
  }

  .testimonial-controls__btn {
    width: 38px;
    height: 38px;
  }
}
</style>
