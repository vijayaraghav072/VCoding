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
        class="testimonial-slider"
        tabindex="0"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonial carousel"
        @focusin="pauseAutoplay"
        @focusout="resumeAutoplay"
        @keydown="handleKeydown"
      >
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="{
            'testimonial-card--active': getPosition(i) === 'center',
            'testimonial-card--left': getPosition(i) === 'left',
            'testimonial-card--right': getPosition(i) === 'right',
            'testimonial-card--pre-left': getPosition(i) === 'pre-left',
            'testimonial-card--pre-right': getPosition(i) === 'pre-right',
          }"
          :aria-hidden="getPosition(i) !== 'center'"
          role="group"
          :aria-roledescription="getPosition(i) === 'center' ? 'slide' : undefined"
          :aria-label="getPosition(i) === 'center' ? `Testimonial from ${testimonial.name}` : undefined"
          @mouseenter="getPosition(i) === 'center' && pauseAutoplay()"
          @mouseleave="getPosition(i) === 'center' && resumeAutoplay()"
        >
          <div class="testimonial-card__body">
            <span class="testimonial-card__quote-mark" aria-hidden="true">&ldquo;</span>
            <p class="testimonial-card__quote">{{ testimonial.quote }}</p>
            <div class="testimonial-card__author">
              <span class="testimonial-card__name">{{ testimonial.name }}</span>
              <span class="testimonial-card__role">{{ testimonial.role }}</span>
            </div>
          </div>
          <div class="testimonial-card__image-wrap">
            <img
              :src="testimonial.avatar"
              :alt="`Avatar of ${testimonial.name}`"
              class="testimonial-card__image"
              loading="lazy"
            />
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
  avatar: string
}

const AUTOPLAY_INTERVAL = 5000

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Vcoding completely changed how I approach problem-solving. The structured courses and curated practice problems helped me crack my dream job interview at a top tech company.',
    name: 'Emily Watson',
    role: 'Software Engineer at Google',
    avatar: 'https://api.dicebear.com/10.x/adventurer/svg?eyesVariant=variant21&eyesProbability=100&mouthVariant=variant16&glassesVariant=variant02&glassesProbability=50&eyebrowsVariant=variant09&earringsVariant=variant04&earringsProbability=95&detailsProbability=96&detailsVariant=&hairColorAngle=-86&hairColorFillStops=2&hairColor=0e0e0e,85c2c6,562306,dba3be,592454,ac6511,cb6820,ab2a18&seed=azb523cf',
  },
  {
    id: 2,
    quote:
      "The DSA roadmap on Vcoding is the best I've found anywhere online. Clear explanations, real-world examples, and a difficulty curve that actually makes sense.",
    name: 'James Carter',
    role: 'CS Student, MIT',
    avatar: 'https://api.dicebear.com/10.x/adventurer/svg?eyesVariant=variant23&eyesProbability=100&mouthVariant=variant13,variant23,variant26,variant28,variant29,variant30&seed=m25qt4vc',
  },
  {
    id: 3,
    quote:
      "I switched careers from mechanical engineering to software development. Vcoding's step-by-step courses made the transition smooth and much less overwhelming.",
    name: 'Oliver Bennett',
    role: 'Full-Stack Developer at Shopify',
    avatar: 'https://api.dicebear.com/10.x/adventurer/svg?eyesVariant=variant04,variant05,variant06,variant07,variant08,variant09,variant10,variant11,variant12,variant13,variant14,variant15,variant16,variant17,variant18,variant21,variant23,variant24,variant25,variant26&eyesProbability=100&mouthVariant=variant01,variant02,variant06,variant07,variant08,variant09,variant10,variant11,variant12,variant15,variant16,variant17,variant18,variant19,variant20,variant21,variant22,variant23,variant24,variant25,variant26,variant27,variant28,variant29,variant30&seed=9utebboa',
  },
  {
    id: 4,
    quote:
      'Vcoding made me fall in love with coding all over again. The hands-on projects and clear explanations gave me the confidence to ace my interviews and land my dream role.',
    name: 'Sophie Mitchell',
    role: 'Backend Engineer at Amazon',
    avatar: 'https://api.dicebear.com/10.x/adventurer/svg?eyesVariant=variant21&eyesProbability=100&mouthVariant=variant01&glassesVariant=variant02&glassesProbability=50&eyebrowsVariant=variant09&earringsVariant=variant04&earringsProbability=95&detailsProbability=96&detailsVariant=&hairColorAngle=-86&hairColorFillStops=2&skinColor=f2d3b1,ecad80&hairColor=0e0e0e,e5d7a3,6a4e35,afafaf,3eac2c,dba3be,ab2a18&seed=r3jhfiiw',
  },
  {
    id: 5,
    quote:
      'From zero coding knowledge to building full-stack apps in six months — Vcoding gave me the roadmap and confidence I needed to make the career leap.',
    name: 'Ethan Brooks',
    role: 'Frontend Developer at Stripe',
    avatar: 'https://api.dicebear.com/9.x/adventurer/svg?seed=KarthikNair',
  },
]

const activeIndex = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function getPosition(index: number): 'left' | 'center' | 'right' | 'pre-left' | 'pre-right' | 'hidden' {
  const diff = (index - activeIndex.value + testimonials.length) % testimonials.length
  if (diff === 0) return 'center'
  if (diff === 1) return 'right'
  if (diff === testimonials.length - 1) return 'left'
  if (diff === 2) return 'pre-right'
  if (diff === testimonials.length - 2) return 'pre-left'
  return 'hidden'
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
  // max-width: 1100px;
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
  max-width: 600px;
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

/* ── Slider ── */

.testimonial-slider {
  --slide-left: -151%;
  --slide-right: 51%;

  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 36px;
  padding: 28px;
  outline: none;
  overflow: hidden;

  &:focus-visible {
    border-radius: 20px;
    outline: 2px solid var(--color-primary, #12408e);
    outline-offset: 8px;
  }


  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 15%,
    #000 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 15%,
    #000 85%,
    transparent 100%
  );
}

/* ── Card ── */

.testimonial-card {
  position: absolute;
  top: 24px;
  left: 50%;
  width: 55%;
  height: calc(100% - 80px);
  display: flex;
  background: linear-gradient(
    145deg,
    rgba(235, 240, 255, 0.95) 0%,
    rgba(225, 233, 255, 0.7) 50%,
    rgba(242, 244, 255, 0.5) 100%
  );
  border: 1px solid rgba(79, 70, 229, 0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(79, 70, 229, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.03);
  will-change: transform, opacity;
  transition:
    transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 500ms ease,
    box-shadow 400ms ease;

  // Default hidden state
  transform: translateX(-50%) scale(0.88);
  opacity: 0;
  z-index: 0;
  pointer-events: none;

  /* ── Position states ── */

  &--active {
    transform: translateX(-50%) scale(1);
    opacity: 1;
    z-index: 10;
    pointer-events: auto;
    box-shadow:
      0 6px 20px rgba(79, 70, 229, 0.1),
      0 2px 8px rgba(0, 0, 0, 0.05);
 

    &:hover {
      transform: translateX(-50%) scale(1.015);
      box-shadow:
        0 18px 52px rgba(79, 70, 229, 0.14),
        0 6px 20px rgba(0, 0, 0, 0.06);
    }
  }

  &--left {
    transform: translateX(var(--slide-left)) scale(0.92);
    opacity: 1;
    z-index: 5;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 20%, #000 60%);
    mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 20%, #000 60%);
  }

  &--right {
    transform: translateX(var(--slide-right)) scale(0.92);
    opacity: 1;
    z-index: 5;
    -webkit-mask-image: linear-gradient(to right, #000 40%, rgba(0, 0, 0, 0.3) 80%, transparent 100%);
    mask-image: linear-gradient(to right, #000 40%, rgba(0, 0, 0, 0.3) 80%, transparent 100%);
  }

  &--pre-left {
    transform: translateX(var(--slide-left)) scale(0.92);
    opacity: 0;
    z-index: 1;
  }

  &--pre-right {
    transform: translateX(var(--slide-right)) scale(0.92);
    opacity: 0;
    z-index: 1;
  }
}

/* ── Card Body (text side) ── */

.testimonial-card__body {
  flex: 1;
  padding: 36px 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  position: relative;
  z-index: 1;
  min-width: 0;
}

.testimonial-card__quote-mark {
  font-size: 5.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 0.5;
  color: rgba(79, 70, 229, 0.16);
  margin-bottom: 12px;
  display: block;
  pointer-events: none;
  user-select: none;
}

.testimonial-card__quote {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.6;
  color: #1e293b;
  margin: 0 0 24px 0;
}

.testimonial-card__author {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.testimonial-card__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #4f46e5;
}

.testimonial-card__role {
  font-size: 0.82rem;
  color: #64748b;
  font-weight: 500;
}

/* ── Card Image (avatar side) ── */

.testimonial-card__image-wrap {
  width: 38%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(79, 70, 229, 0.03) 0%,
    rgba(79, 70, 229, 0.07) 100%
  );
}

.testimonial-card__image {
  width: 80%;
  height: auto;
  max-height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 4px 14px rgba(79, 70, 229, 0.1));
}

/* ── Controls (unchanged) ── */

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

@media (max-width: 900px) {
  .testimonial-slider {
    --slide-left: -140%;
    --slide-right: 40%;
    height: 320px;
  }

  .testimonial-card {
    width: 62%;
  }

  .testimonial-card__body {
    padding: 28px 22px 24px;
  }

  .testimonial-card__quote-mark {
    font-size: 4rem;
  }

  .testimonial-card__quote {
    font-size: 0.92rem;
  }
}

@media (max-width: 640px) {
  .testimonial-section {
    padding: 56px 16px;
  }

  .testimonial-slider {
    height: 380px;
  }

  .testimonial-card {
    width: 88%;
    flex-direction: column;

    &--left,
    &--right,
    &--pre-left,
    &--pre-right {
      opacity: 0 !important;
      pointer-events: none !important;
    }
  }

  .testimonial-card__image-wrap {
    width: 100%;
    height: 130px;
    order: -1;
  }

  .testimonial-card__image {
    max-height: 90%;
  }

  .testimonial-card__body {
    padding: 20px;
  }

  .testimonial-card__quote-mark {
    font-size: 3.2rem;
    margin-bottom: 6px;
  }

  .testimonial-card__quote {
    font-size: 0.88rem;
    margin-bottom: 16px;
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
