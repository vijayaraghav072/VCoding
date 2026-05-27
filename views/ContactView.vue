<template>
  <article class="contact-page" aria-labelledby="contact-heading">
    <div class="contact-container">
      <header class="contact-header">
        <p class="contact-header-badge">Get in Touch</p>
        <h1 id="contact-heading" class="contact-title">Contact Us</h1>
        <p class="contact-intro">
          We're always happy to hear from students, developers, professionals, teachers,
          businesses, and learners from around the world. Whether you have questions, feedback,
          partnership inquiries, technical issues, or content suggestions, feel free to contact us.
        </p>
      </header>

      <section class="contact-cards" aria-label="Contact methods">
        <div class="contact-card">
          <div class="contact-card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 class="contact-card-title">General Support</h2>
          <p class="contact-card-description">
            For general questions, account support, or website-related issues.
          </p>
          <a href="mailto:support@vcoding.io" class="contact-card-email">support@vcoding.io</a>
        </div>

        <div class="contact-card">
          <div class="contact-card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 class="contact-card-title">Business &amp; Partnerships</h2>
          <p class="contact-card-description">
            For collaborations, sponsorships, educational partnerships, or business-related
            discussions.
          </p>
          <a href="mailto:business@vcoding.io" class="contact-card-email">business@vcoding.io</a>
        </div>

        <div class="contact-card">
          <div class="contact-card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h2 class="contact-card-title">Report Issues</h2>
          <p class="contact-card-description">
            Found a bug, broken tutorial, incorrect information, or technical issue? Please include
            the page URL, a short description, and screenshots if possible.
          </p>
          <a href="mailto:support@vcoding.io" class="contact-card-email">support@vcoding.io</a>
        </div>
      </section>

      <section class="contact-info-grid" aria-label="Additional information">
        <div class="contact-info-block">
          <h2 class="contact-info-heading">Response Time</h2>
          <p class="contact-info-text">
            We aim to respond to most inquiries within <strong>24–72 business hours</strong>.
            Response times may vary depending on request volume.
          </p>
        </div>

        <div class="contact-info-block">
          <h2 class="contact-info-heading">Before Contacting Us</h2>
          <p class="contact-info-text">
            Please check whether your question is already answered in:
          </p>
          <ul class="contact-info-list">
            <li>Tutorials</li>
            <li>Documentation</li>
            <li>FAQs</li>
            <li>Help sections</li>
            <li>Learning guides</li>
          </ul>
          <p class="contact-info-text">This helps you get answers faster.</p>
        </div>

        <div class="contact-info-block">
          <h2 class="contact-info-heading">Educational Platform Notice</h2>
          <p class="contact-info-text">
            Vcoding is an educational and informational platform designed to help users learn
            technology, programming, development, business concepts, and related topics. We
            currently provide support primarily in English for users in the United States, United
            Kingdom, and global audiences.
          </p>
        </div>

        <div class="contact-info-block">
          <h2 class="contact-info-heading">Respectful Communication</h2>
          <p class="contact-info-text">
            We expect respectful and professional communication from all users. Messages containing
            spam, abuse, harassment, threats, or malicious content may be ignored or blocked.
          </p>
        </div>
      </section>

      <section class="contact-privacy-note" aria-label="Privacy notice">
        <h2 class="contact-privacy-heading">Privacy Notice</h2>
        <p class="contact-privacy-text">
          If you contact us, we may store your email address and message only for support and
          communication purposes. For more details, please review our
          <RouterLink :to="{ name: 'privacy-policy' }" class="contact-link">Privacy Policy</RouterLink>.
        </p>
      </section>

      <section class="contact-connect" aria-label="Stay connected">
        <h2 class="contact-connect-heading">Connect With Us</h2>
        <p class="contact-connect-text">Stay updated with:</p>
        <ul class="contact-connect-list">
          <li>New tutorials</li>
          <li>Educational content</li>
          <li>Feature updates</li>
          <li>Learning resources</li>
          <li>Platform announcements</li>
        </ul>
        <p class="contact-connect-text">
          More community and social features may be added in the future.
        </p>
      </section>

      <footer class="contact-footer-info">
        <div class="contact-footer-card">
          <h2 class="contact-footer-heading">Contact Information</h2>
          <ul class="contact-footer-details">
            <li>
              <strong>Website:</strong>
              <a href="https://vcoding.io" class="contact-link">vcoding.io</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:support@vcoding.io" class="contact-link">support@vcoding.io</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

useSeo({
  title: 'Contact Us',
  description:
    'Contact Vcoding for support, feedback, business inquiries, partnerships, or technical assistance related to our educational platform.',
  path: '/contact',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
  { name: 'Contact Us', url: '/contact' },
])
</script>

<style scoped lang="scss">
.contact-page {
  padding: 48px 24px 96px;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.contact-container {
  max-width: 960px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 56px;
}

.contact-header-badge {
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

.contact-title {
  margin: 0 0 16px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.contact-intro {
  margin: 0 auto;
  max-width: 640px;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--hdr-text);
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.contact-card {
  padding: 32px 28px;
  border-radius: 12px;
  border: 1px solid var(--color-primary-100);
  background: var(--color-surface);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  border-color: var(--color-primary-200);
  box-shadow: 0 4px 24px rgba(var(--color-primary-rgb), 0.06);
}

.contact-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--color-primary-50);
  color: var(--color-primary);
  margin-bottom: 20px;
}

.contact-card-title {
  margin: 0 0 10px;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contact-card-description {
  margin: 0 0 16px;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--hdr-text-soft);
}

.contact-card-email {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 6px;
  background: var(--color-primary-50);
  transition: background 0.15s ease, color 0.15s ease;
}

.contact-card-email:hover,
.contact-card-email:focus-visible {
  background: var(--color-primary);
  color: #fff;
  outline: none;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 56px;
}

.contact-info-block {
  padding: 28px;
  border-radius: 10px;
  background: var(--color-primary-50);
}

.contact-info-heading {
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contact-info-text {
  margin: 0 0 10px;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--hdr-text);

  &:last-child {
    margin-bottom: 0;
  }
}

.contact-info-list {
  margin: 8px 0 12px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--hdr-text);
  }
}

.contact-privacy-note {
  margin-bottom: 48px;
  padding: 28px 32px;
  border-radius: 10px;
  border-left: 4px solid var(--color-primary);
  background: var(--color-primary-50);
}

.contact-privacy-heading {
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contact-privacy-text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--hdr-text);
}

.contact-connect {
  margin-bottom: 56px;
}

.contact-connect-heading {
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contact-connect-text {
  margin: 0 0 10px;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--hdr-text);
}

.contact-connect-list {
  margin: 8px 0 16px;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--hdr-text);
  }
}

.contact-footer-info {
  padding-top: 32px;
  border-top: 1px solid var(--color-primary-100);
}

.contact-footer-card {
  padding: 28px 32px;
  border-radius: 10px;
  background: var(--color-primary-50);
  text-align: center;
}

.contact-footer-heading {
  margin: 0 0 16px;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contact-footer-details {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  li {
    font-size: 0.9375rem;
    color: var(--hdr-text);
  }
}

.contact-link {
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

@media (max-width: 860px) {
  .contact-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding: 32px 16px 72px;
  }

  .contact-header {
    margin-bottom: 40px;
  }

  .contact-card {
    padding: 24px 20px;
  }

  .contact-info-block {
    padding: 20px;
  }

  .contact-privacy-note {
    padding: 20px 24px;
  }

  .contact-footer-details {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
</style>
