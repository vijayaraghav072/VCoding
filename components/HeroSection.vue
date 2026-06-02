<template>
  <section ref="heroSectionRef" class="hero-section">
    <div class="hero-section-container">
      <div class="hero-section-content-column">
        <span class="hero-trust-pill">
          <span class="hero-trust-pill-dot"></span>
          <span class="hero-trust-pill-label">Trusted by 50,000+ developers</span>
        </span>

        <h1 class="hero-heading-title">
          Master Programming
          <br />
          the <span ref="accentTextRef" class="hero-heading-title-accent">Smart Way</span>
        </h1>

        <p class="hero-heading-description">
          Learn data structures, algorithms, and system design with
          structured paths, real problems, and hands-on practice.
        </p>

        <div class="hero-action-buttons-group">
          <button type="button" class="hero-action-button hero-action-button--primary">
            <span class="hero-action-button-label">Start Learning</span>
            <span class="hero-action-button-icon hero-action-button--primary__arrow">
              <SvgIcon icon-name="arrow-right-icon" width="16" height="16" />
            </span>
          </button>
          <button type="button" class="hero-action-button hero-action-button--ghost">
            <span class="hero-action-button-label">Explore Courses</span>
          </button>
        </div>

        <ul ref="statsListRef" class="hero-stats-list">
          <li v-for="stat in stats" :key="stat.label" class="hero-stats-item">
            <span class="hero-stats-item-value" :data-stat-target="stat.value">{{ stat.value }}</span>
            <span class="hero-stats-item-label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>

      <div class="hero-section-visual-column" aria-hidden="true">
        <span class="hero-decorative-glow hero-decorative-glow--primary"></span>
        <span class="hero-decorative-glow hero-decorative-glow--secondary"></span>

        <div
          v-for="snippet in codeSnippets"
          :key="snippet.id"
          class="hero-code-snippet"
          :class="`hero-code-snippet--${snippet.id}`"
        >
          <div class="hero-code-snippet-title-bar">
            <span class="hero-code-snippet-traffic-dot hero-code-snippet-traffic-dot--red"></span>
            <span class="hero-code-snippet-traffic-dot hero-code-snippet-traffic-dot--yellow"></span>
            <span class="hero-code-snippet-traffic-dot hero-code-snippet-traffic-dot--green"></span>
            <span class="hero-code-snippet-file-name">{{ snippet.fileName }}</span>
          </div>
          <pre class="hero-code-snippet-body" v-html="snippet.code"></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import SvgIcon from "@/common/UI-components/SvgIcon.vue";
import { useCountUp } from "@/composables/useCountUp";

interface HeroStat {
  value: string;
  label: string;
}

const stats: HeroStat[] = [
  { value: "500+", label: "Articles" },
  { value: "1,000+", label: "Problems" },
  { value: "50K+", label: "Learners" },
];

interface CodeSnippet {
  id: string;
  fileName: string;
  code: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    id: "binary-search",
    fileName: "binarySearch.js",
    code: [
      '<span class="hero-code-token-keyword">function</span> <span class="hero-code-token-function">binarySearch</span>(arr, target) {',
      '  <span class="hero-code-token-keyword">let</span> lo = <span class="hero-code-token-number">0</span>, hi = arr.length;',
      '  <span class="hero-code-token-keyword">while</span> (lo &lt; hi) {',
      '    <span class="hero-code-token-keyword">const</span> mid = (lo + hi) &gt;&gt;&gt; <span class="hero-code-token-number">1</span>;',
      '    arr[mid] &lt; target',
      '      ? lo = mid + <span class="hero-code-token-number">1</span>',
      '      : hi = mid;',
      '  }',
      '  <span class="hero-code-token-keyword">return</span> lo;',
      '}',
    ].join('\n'),
  },
  {
    id: "tree-node",
    fileName: "TreeNode.js",
    code: [
      '<span class="hero-code-token-keyword">class</span> <span class="hero-code-token-function">TreeNode</span> {',
      '  <span class="hero-code-token-keyword">constructor</span>(val) {',
      '    <span class="hero-code-token-keyword">this</span>.val = val;',
      '    <span class="hero-code-token-keyword">this</span>.left = <span class="hero-code-token-number">null</span>;',
      '    <span class="hero-code-token-keyword">this</span>.right = <span class="hero-code-token-number">null</span>;',
      '  }',
      '}',
    ].join('\n'),
  },
  {
    id: "two-sum",
    fileName: "twoSum.js",
    code: [
      '<span class="hero-code-token-comment">// O(n) two-pointer approach</span>',
      '<span class="hero-code-token-keyword">const</span> <span class="hero-code-token-function">twoSum</span> = (nums, t) =&gt; {',
      '  <span class="hero-code-token-keyword">let</span> l = <span class="hero-code-token-number">0</span>, r = nums.length - <span class="hero-code-token-number">1</span>;',
      '  <span class="hero-code-token-keyword">while</span> (l &lt; r) {',
      '    <span class="hero-code-token-keyword">if</span> (nums[l]+nums[r] === t)',
      '      <span class="hero-code-token-keyword">return</span> [l, r];',
      '  }',
      '};',
    ].join('\n'),
  },
];

const accentTextRef = ref<HTMLElement | null>(null);
const heroSectionRef = ref<HTMLElement | null>(null);
const statsListRef = ref<HTMLElement | null>(null);

const ACCENT_TEXT_CONTENT = "Smart Way";
const TYPING_ACTIVE_CLASS = "hero-heading-title-accent--is-typing";

type TypingPhase = "typing" | "pausing" | "deleting";

let typingTimerId: ReturnType<typeof setTimeout> | null = null;

const jitter = (base: number, range: number): number =>
  base + Math.random() * range;

const startAccentTypingLoop = (el: HTMLElement): void => {
  const totalChars = ACCENT_TEXT_CONTENT.length;
  let cursorPosition = 0;
  let phase: TypingPhase = "typing";

  const setTypingActive = (isActive: boolean): void => {
    el.classList.toggle(TYPING_ACTIVE_CLASS, isActive);
  };

  const tick = (): void => {
    if (!document.body.contains(el)) return;

    switch (phase) {
      case "typing":
        setTypingActive(true);
        cursorPosition++;
        el.textContent = ACCENT_TEXT_CONTENT.slice(0, cursorPosition);
        if (cursorPosition >= totalChars) {
          phase = "pausing";
          setTypingActive(false);
          typingTimerId = setTimeout(tick, 2800);
        } else {
          typingTimerId = setTimeout(tick, jitter(130, 50));
        }
        break;

      case "pausing":
        phase = "deleting";
        typingTimerId = setTimeout(tick, 0);
        break;

      case "deleting":
        setTypingActive(true);
        cursorPosition--;
        el.textContent = ACCENT_TEXT_CONTENT.slice(0, cursorPosition);
        if (cursorPosition <= 0) {
          phase = "typing";
          setTypingActive(false);
          typingTimerId = setTimeout(tick, 500);
        } else {
          typingTimerId = setTimeout(tick, jitter(65, 30));
        }
        break;
    }
  };

  typingTimerId = setTimeout(tick, 500);
};

useCountUp(statsListRef, '.hero-stats-item-value');

onMounted(() => {
  if (accentTextRef.value) {
    accentTextRef.value.textContent = "";
    startAccentTypingLoop(accentTextRef.value);
  }
});

onBeforeUnmount(() => {
  if (typingTimerId !== null) {
    clearTimeout(typingTimerId);
    typingTimerId = null;
  }
});
</script>

<style scoped lang="scss">
@use "@/Scss/all-mixins" as mixins;

.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 85vh;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.hero-section-container {
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 72px 28px 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 84px;
}

/* ---------- Content column ---------- */

.hero-section-content-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.hero-trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: var(--hdr-primary-light);
  border: 1px solid hsl(216, 50%, 90%);
  color: var(--hdr-primary);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2px;
  opacity: 0;
  animation: hero-element-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
}

.hero-trust-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--hdr-primary);
  animation: hero-element-pulse 2.4s ease-in-out infinite;
}

.hero-heading-title {
  margin: 0;
  font-size: clamp(36px, 4.6vw, 56px);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: hsl(210, 20%, 18%);
  opacity: 0;
  animation: hero-element-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.hero-heading-title-accent {
  display: inline-block;
  min-width: 2px;
  min-height: 1.15em;
  vertical-align: baseline;
  background: linear-gradient(135deg, var(--hdr-primary) 0%, #3b6fd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-heading-title-accent::after {
  content: "";
  display: inline-block;
  width: 3px;
  height: 1.1em;
  margin-left: 3px;
  vertical-align: text-bottom;
  background: var(--hdr-primary);
  border-radius: 1px;
  animation: hero-heading-caret-blink 1s step-end infinite;
}

.hero-heading-title-accent--is-typing::after {
  animation: none;
  opacity: 1;
}

.hero-heading-description {
  margin: 0;
  max-width: 460px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--hdr-text-soft);
  opacity: 0;
  animation: hero-element-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

@keyframes hero-element-fade-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-heading-caret-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes hero-element-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }
}

/* ---------- Buttons ---------- */

.hero-action-buttons-group {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 4px;
  opacity: 0;
  animation: hero-element-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
}

.hero-action-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 22px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}

.hero-action-button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero-action-button--primary {
  @include mixins.primary-btn-1;
  padding: 13px 22px;
  font-size: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.25);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(18, 64, 142, 0.28);
  }

  &:active {
    transform: scale(1.02);
  }
}

.hero-action-button--primary__arrow {
  flex-shrink: 0;
  transition: transform 0.2s ease;

  .hero-action-button--primary:hover & {
    transform: translateX(3px);
  }
}

.hero-action-button--ghost {
  background-color: var(--color-secondary);
  color: var(--hdr-primary);
  border: 1px solid rgba(var(--color-primary-rgb), 0.25);
}

.hero-action-button--ghost:hover {
  background-color: rgba(var(--color-primary-rgb), 0.06);
  border-color: var(--hdr-primary);
}

/* ---------- Stats ---------- */

.hero-stats-list {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: flex;
  align-items: flex-start;
  gap: 44px;
  opacity: 0;
  animation: hero-element-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
}

.hero-stats-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero-stats-item-value {
  font-size: 22px;
  font-weight: 700;
  color: hsl(210, 20%, 18%);
  letter-spacing: -0.01em;
}

.hero-stats-item-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--hdr-text-soft);
}

/* ---------- Visual column (floating code snippets) ---------- */

.hero-section-visual-column {
  position: relative;
  width: 100%;
  min-height: 460px;
  opacity: 0;
  animation: hero-element-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
}

/* Decorative gradient glow blobs sitting behind the code snippets */
.hero-decorative-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(64px);
  opacity: 0.45;
  pointer-events: none;
  will-change: transform;
}

.hero-decorative-glow--primary {
  top: 5%;
  right: 0;
  width: 380px;
  height: 380px;
  background: linear-gradient(
    135deg,
    rgba(var(--color-primary-rgb), 0.55),
    var(--color-primary-200)
  );
  animation: hero-decorative-glow-drift 9s ease-in-out infinite;
}

.hero-decorative-glow--secondary {
  bottom: 8%;
  left: 5%;
  width: 260px;
  height: 260px;
  background: linear-gradient(
    135deg,
    var(--color-primary-200),
    rgba(var(--color-primary-rgb), 0.45)
  );
  animation: hero-decorative-glow-drift 11s ease-in-out infinite reverse;
}

@keyframes hero-decorative-glow-drift {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(18px, -22px) scale(1.05);
  }
  66% {
    transform: translate(-14px, 14px) scale(0.96);
  }
}

.hero-code-snippet {
  position: absolute;
  z-index: 2;
  background: #1a2332;
  border-radius: 14px;
  overflow: hidden;
  color: #c3cfe2;
  font-family: "JetBrains Mono", "Fira Code", "SF Mono", Menlo, Consolas, monospace;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition: box-shadow 0.3s ease;
}

.hero-code-snippet:hover {
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.28),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.hero-code-snippet--binary-search {
  top: -2%;
  right: 0;
  width: 300px;
  animation: hero-code-snippet-float 5s ease-in-out infinite;
}

.hero-code-snippet--tree-node {
  bottom: 20%;
  left: -6%;
  width: 260px;
  animation: hero-code-snippet-float 6s ease-in-out 2s infinite;
}

.hero-code-snippet--two-sum {
  bottom: 0;
  right: 10%;
  width: 260px;
  animation: hero-code-snippet-float 7.5s ease-in-out 1s infinite;
}

.hero-code-snippet-title-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #141c28;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.hero-code-snippet-traffic-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hero-code-snippet-traffic-dot--red {
  background: #ff5f57;
}

.hero-code-snippet-traffic-dot--yellow {
  background: #ffbd2e;
}

.hero-code-snippet-traffic-dot--green {
  background: #28ca42;
}

.hero-code-snippet-file-name {
  margin-left: auto;
  font-size: 0.7rem;
  color: #5a6a7e;
  font-family: inherit;
  letter-spacing: 0.2px;
}

.hero-code-snippet-body {
  margin: 0;
  padding: 14px 16px;
  font-family: inherit;
  font-size: 0.72rem;
  line-height: 1.65;
  color: #c3cfe2;
  white-space: pre;
  overflow: hidden;
}

/* Syntax token colors */
.hero-code-snippet-body :deep(.hero-code-token-keyword)  { color: #c792ea; }
.hero-code-snippet-body :deep(.hero-code-token-function) { color: #82aaff; }
.hero-code-snippet-body :deep(.hero-code-token-number)   { color: #f78c6c; }
.hero-code-snippet-body :deep(.hero-code-token-string)   { color: #c3e88d; }
.hero-code-snippet-body :deep(.hero-code-token-comment)  { color: #546e7a; font-style: italic; }

@keyframes hero-code-snippet-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}

/* ---------- Responsive ---------- */

@media (max-width: 1024px) {
  .hero-section-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 56px 20px 72px;
  }

  .hero-section-visual-column {
    min-height: 440px;
  }

  .hero-code-snippet--tree-node {
    left: 2%;
  }
}

@media (max-width: 640px) {
  .hero-action-buttons-group {
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero-heading-title {
    text-align: center;
  }

  .hero-stats-list {
    gap: 28px;
  }

  .hero-code-snippet--binary-search {
    width: 260px;
  }

  .hero-code-snippet--tree-node {
    width: 230px;
    left: 0;
  }

  .hero-code-snippet--two-sum {
    width: 230px;
    right: 4%;
  }

  .hero-code-snippet-body {
    font-size: 0.68rem;
  }
}
</style>
