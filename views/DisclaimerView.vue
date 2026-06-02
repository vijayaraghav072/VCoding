<template>
  <article class="disclaimer-page" aria-labelledby="disclaimer-heading">
    <div class="disclaimer-container">
      <header class="disclaimer-header">
        <p class="disclaimer-header-badge">Legal</p>
        <h1 id="disclaimer-heading" class="disclaimer-title">Disclaimer</h1>
        <p class="disclaimer-last-updated">Last Updated: May 21, 2026</p>
        <p class="disclaimer-intro">
          The information provided on Vcoding ("the website") is for general educational and
          informational purposes only. By accessing and using this website, you acknowledge
          and agree to this Disclaimer.
        </p>
      </header>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">1. Educational Content Only</h2>
        <p>
          All content published on Vcoding — including articles, tutorials, code examples,
          guides, and courses — is intended solely for educational purposes. The content does
          not constitute professional advice in any field, including but not limited to legal,
          financial, medical, or engineering advice.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">2. No Guarantees of Accuracy</h2>
        <p>
          While we strive to ensure that all information on Vcoding is accurate, up-to-date,
          and reliable, we make no warranties or representations of any kind regarding the
          completeness, accuracy, or reliability of the content.
        </p>
        <p>
          Technology evolves rapidly. Code examples, best practices, and technical standards
          may change over time. Users should verify information independently before applying
          it to real-world projects or professional work.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">3. Use at Your Own Risk</h2>
        <p>
          Any actions you take based on information found on this website are strictly at
          your own risk. Vcoding shall not be held liable for any losses, damages, or
          negative consequences resulting from the use of content on this platform.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">4. External Links</h2>
        <p>
          Vcoding may contain links to external websites, tools, and third-party resources
          for additional reference. We do not control the content, privacy practices, or
          availability of these external websites.
        </p>
        <p>
          Linking to a third-party website does not imply endorsement of that website or
          its content. Users access external links at their own risk.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">5. Code Examples</h2>
        <p>
          Code examples provided on Vcoding are for illustration and learning purposes. While
          we aim to provide production-quality examples, they may not cover all edge cases,
          security considerations, or performance optimizations required for real-world
          applications.
        </p>
        <p>
          Always review, test, and adapt code examples to meet the specific requirements
          of your project before deploying to production.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">6. Advertisements</h2>
        <p>
          Vcoding may display advertisements through third-party advertising services such as
          Google AdSense. We are not responsible for the content, accuracy, or availability of
          third-party advertisements, products, or services displayed on the platform.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">7. No Professional Relationship</h2>
        <p>
          Use of this website does not create any professional relationship between Vcoding and
          its users. The platform is a self-service educational resource available to all users.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">8. Changes to This Disclaimer</h2>
        <p>
          We may update this Disclaimer from time to time. Any changes will be reflected on
          this page with a revised "Last Updated" date. Continued use of the website after
          changes means you accept the updated Disclaimer.
        </p>
      </section>

      <section class="disclaimer-section">
        <h2 class="disclaimer-section-heading">9. Contact Us</h2>
        <p>If you have questions about this Disclaimer, contact us:</p>
        <ul class="disclaimer-list disclaimer-list--no-bullet">
          <li>
            <strong>Website:</strong>
            <a href="https://vcoding.io" class="disclaimer-link">vcoding.io</a>
          </li>
          <li>
            <strong>Email:</strong>
            <a href="mailto:support@vcoding.io" class="disclaimer-link">support@vcoding.io</a>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

useSeo({
  title: 'Disclaimer',
  description:
    'Read the Disclaimer for Vcoding. All content is provided for educational purposes only. We make no guarantees regarding accuracy or completeness of information.',
  path: '/disclaimer',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
  { name: 'Disclaimer', url: '/disclaimer' },
])
</script>

<style scoped lang="scss">
.disclaimer-page {
  padding: 48px 24px 96px;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.disclaimer-container {
  max-width: 760px;
  margin: 0 auto;
}

.disclaimer-header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-primary-100);
}

.disclaimer-header-badge {
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

.disclaimer-title {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.disclaimer-last-updated {
  margin: 0 0 20px;
  font-size: 0.875rem;
  color: var(--hdr-text-soft);
}

.disclaimer-intro {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--hdr-text);
  max-width: 640px;
}

.disclaimer-section {
  padding-top: 32px;
  padding-bottom: 32px;

  & + & {
    border-top: 1px solid var(--color-primary-50);
  }
}

.disclaimer-section-heading {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.3;
}

.disclaimer-section p {
  margin: 0 0 12px;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--hdr-text);

  &:last-child {
    margin-bottom: 0;
  }
}

.disclaimer-list {
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

.disclaimer-list--no-bullet {
  list-style: none;
  padding-left: 0;
  gap: 10px;
}

.disclaimer-link {
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
  .disclaimer-page {
    padding: 32px 16px 72px;
  }

  .disclaimer-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
  }

  .disclaimer-section {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .disclaimer-section-heading {
    font-size: 1.125rem;
  }
}
</style>
