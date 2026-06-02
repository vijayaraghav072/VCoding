<template>
  <article class="about-page" aria-labelledby="about-heading">
    <div class="about-container">
      <header class="about-header">
        <p class="about-header-badge">About Us</p>
        <h1 id="about-heading" class="about-title">About Vcoding</h1>
        <p class="about-intro">
          Vcoding is a modern educational platform built to help students, developers,
          professionals, and lifelong learners master programming, data structures, algorithms,
          system design, and full-stack development through structured courses, in-depth articles,
          and hands-on coding practice.
        </p>
      </header>

      <section class="about-section" aria-labelledby="about-mission-heading">
        <h2 id="about-mission-heading" class="about-section-heading">Our Mission</h2>
        <p class="about-section-text">
          Our mission is to provide world-class, free educational content that is accessible to
          everyone. We believe that high-quality learning resources should not be locked behind
          paywalls. Vcoding is designed to help learners at every stage — from absolute beginners
          writing their first line of code to experienced professionals preparing for system
          design interviews.
        </p>
      </section>

      <section class="about-section" aria-labelledby="about-offer-heading">
        <h2 id="about-offer-heading" class="about-section-heading">What We Offer</h2>
        <ul class="about-feature-list">
          <li class="about-feature-item">
            <h3 class="about-feature-title">In-Depth Articles</h3>
            <p class="about-feature-description">
              Comprehensive tutorials covering data structures, algorithms, web development,
              AI and machine learning, DevOps, cybersecurity, and more. Every article is
              written by experienced developers with a focus on clarity and real-world
              application.
            </p>
          </li>
          <li class="about-feature-item">
            <h3 class="about-feature-title">Coding Practice</h3>
            <p class="about-feature-description">
              Solve curated coding problems organized by topic and difficulty. Practice with
              an integrated code editor, get instant feedback, and prepare for technical
              interviews at top companies.
            </p>
          </li>
          <li class="about-feature-item">
            <h3 class="about-feature-title">Structured Learning Paths</h3>
            <p class="about-feature-description">
              Follow guided courses from beginner to advanced levels. Our structured paths
              ensure you learn concepts in the right order with clear progression and
              measurable milestones.
            </p>
          </li>
          <li class="about-feature-item">
            <h3 class="about-feature-title">Progress Tracking</h3>
            <p class="about-feature-description">
              Track your learning journey with streaks, achievements, and leaderboards.
              Stay motivated and measure your growth over time.
            </p>
          </li>
        </ul>
      </section>

      <section class="about-section" aria-labelledby="about-audience-heading">
        <h2 id="about-audience-heading" class="about-section-heading">Who Is Vcoding For?</h2>
        <p class="about-section-text">
          Vcoding is built for a global audience with a primary focus on learners in the
          United States and United Kingdom. Our platform serves:
        </p>
        <ul class="about-list">
          <li>Students learning computer science and programming</li>
          <li>Software developers sharpening their skills</li>
          <li>Working professionals preparing for career transitions</li>
          <li>Teachers looking for structured educational resources</li>
          <li>Business owners exploring technology and automation</li>
          <li>Beginners starting their coding journey from scratch</li>
        </ul>
      </section>

      <section class="about-section" aria-labelledby="about-quality-heading">
        <h2 id="about-quality-heading" class="about-section-heading">Content Quality</h2>
        <p class="about-section-text">
          Every piece of content on Vcoding is original, carefully researched, and written to
          provide genuine educational value. We prioritize accuracy, depth, and clarity. Our
          content is reviewed for technical correctness and follows best practices for modern
          software development.
        </p>
        <p class="about-section-text">
          We are committed to the principles of E-E-A-T (Experience, Expertise,
          Authoritativeness, and Trustworthiness) and strive to build a platform that learners
          and professionals can trust.
        </p>
      </section>

      <section class="about-section" aria-labelledby="about-contact-heading">
        <h2 id="about-contact-heading" class="about-section-heading">Get in Touch</h2>
        <p class="about-section-text">
          Have questions, feedback, or partnership inquiries? We would love to hear from you.
        </p>
        <ul class="about-list about-list--no-bullet">
          <li>
            <strong>Website:</strong>
            <a href="https://vcoding.io" class="about-link">vcoding.io</a>
          </li>
          <li>
            <strong>Email:</strong>
            <a href="mailto:support@vcoding.io" class="about-link">support@vcoding.io</a>
          </li>
        </ul>
        <p class="about-section-text">
          You can also visit our
          <RouterLink :to="{ name: 'contact' }" class="about-link">Contact</RouterLink>
          page for more options.
        </p>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

useSeo({
  title: 'About Us',
  description:
    'Learn about Vcoding, a free educational platform for programming, data structures, algorithms, system design, and full-stack development. Our mission, team, and commitment to quality education.',
  path: '/about',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
  { name: 'About', url: '/about' },
])
</script>

<style scoped lang="scss">
.about-page {
  padding: 48px 24px 96px;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.about-container {
  max-width: 760px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 56px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-primary-100);
}

.about-header-badge {
  display: inline-block;
  margin: 0 0 16px;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: var(--color-primary-50);
  border-radius: 100px;
}

.about-title {
  margin: 0 0 16px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.about-intro {
  margin: 0 auto;
  max-width: 640px;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--hdr-text);
}

.about-section {
  padding-top: 32px;
  padding-bottom: 32px;

  & + & {
    border-top: 1px solid var(--color-primary-50);
  }
}

.about-section-heading {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.3;
}

.about-section-text {
  margin: 0 0 12px;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--hdr-text);

  &:last-child {
    margin-bottom: 0;
  }
}

.about-list {
  margin: 8px 0 16px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--hdr-text);
  }
}

.about-list--no-bullet {
  list-style: none;
  padding-left: 0;
  gap: 10px;
}

.about-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-feature-item {
  padding: 24px;
  border-radius: 10px;
  background: var(--color-primary-50);
}

.about-feature-title {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
}

.about-feature-description {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--hdr-text);
}

.about-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;

  &:hover,
  &:focus-visible {
    color: var(--hdr-primary-dark);
    text-decoration: underline;
  }
}

@media (max-width: 640px) {
  .about-page {
    padding: 32px 16px 72px;
  }

  .about-header {
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .about-section {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .about-section-heading {
    font-size: 1.125rem;
  }

  .about-feature-item {
    padding: 20px;
  }
}
</style>
