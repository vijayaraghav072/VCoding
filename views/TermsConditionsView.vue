<template>
  <article class="terms-page" aria-labelledby="terms-heading">
    <div class="terms-container">
      <aside class="terms-sidebar" aria-label="Table of contents">
        <nav class="terms-toc">
          <p class="terms-toc-title">On this page</p>
          <ul class="terms-toc-list" ref="tocListRef">
            <span
              class="terms-toc-indicator"
              :style="indicatorStyle"
              aria-hidden="true"
            ></span>
            <li v-for="section in tocSections" :key="section.id">
              <a
                :href="`#${section.id}`"
                class="terms-toc-link"
                :class="{ 'terms-toc-link--active': activeSection === section.id }"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="terms-content">
        <header class="terms-header">
          <p class="terms-header-badge">Legal</p>
          <h1 id="terms-heading" class="terms-title">Terms and Conditions</h1>
          <p class="terms-last-updated">Last Updated: May 21, 2026</p>
          <p class="terms-intro">
            Welcome to Vcoding ("we," "our," or "us"). These Terms and Conditions ("Terms") govern
            your access to and use of our website, educational content, tutorials, tools, and
            related services. By accessing or using this website, you agree to comply with these
            Terms. If you do not agree with these Terms, please do not use the website.
          </p>
        </header>

        <section :id="tocSections[0].id" class="terms-section">
          <h2 class="terms-section-heading">1. Use of the Website</h2>
          <p>
            Our platform provides educational and informational content for students, developers,
            professionals, teachers, and general learners.
          </p>
          <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
          <ul class="terms-list">
            <li>Violate applicable laws or regulations</li>
            <li>Harm the platform or its users</li>
            <li>Disrupt website functionality</li>
            <li>Attempt unauthorized access</li>
            <li>Spread malicious software or harmful code</li>
            <li>Copy or misuse platform content unlawfully</li>
          </ul>
        </section>

        <section :id="tocSections[1].id" class="terms-section">
          <h2 class="terms-section-heading">2. Educational Content Disclaimer</h2>
          <p>
            The content provided on this website is for educational and informational purposes only.
          </p>
          <p>
            While we aim to provide accurate and high-quality information, we do not guarantee that
            all content is always:
          </p>
          <ul class="terms-list">
            <li>Complete</li>
            <li>Accurate</li>
            <li>Up to date</li>
            <li>Error-free</li>
          </ul>
          <p>
            Users should independently verify important technical, financial, legal, or professional
            information before relying on it.
          </p>
        </section>

        <section :id="tocSections[2].id" class="terms-section">
          <h2 class="terms-section-heading">3. User Accounts</h2>
          <p>Some features may require account creation using an email address.</p>
          <p>You are responsible for:</p>
          <ul class="terms-list">
            <li>Maintaining the security of your account</li>
            <li>Keeping login credentials confidential</li>
            <li>Any activity performed under your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </section>

        <section :id="tocSections[3].id" class="terms-section">
          <h2 class="terms-section-heading">4. Intellectual Property</h2>
          <p>Unless otherwise stated, all website content including:</p>
          <ul class="terms-list">
            <li>Articles</li>
            <li>Tutorials</li>
            <li>Text</li>
            <li>Graphics</li>
            <li>Branding</li>
            <li>Logos</li>
            <li>Design elements</li>
            <li>Code examples</li>
            <li>UI components</li>
          </ul>
          <p>
            is owned by or licensed to Vcoding and protected by applicable copyright and
            intellectual property laws.
          </p>
          <h3 class="terms-subsection-heading">You may:</h3>
          <ul class="terms-list">
            <li>Read and learn from the content</li>
            <li>Share links to public pages</li>
            <li>Use code examples for educational purposes where permitted</li>
          </ul>
          <h3 class="terms-subsection-heading">You may not:</h3>
          <ul class="terms-list">
            <li>Republish content without permission</li>
            <li>Copy large portions of content</li>
            <li>Sell or redistribute website materials</li>
            <li>Use our branding without authorization</li>
          </ul>
        </section>

        <section :id="tocSections[4].id" class="terms-section">
          <h2 class="terms-section-heading">5. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites, tools, or resources.</p>
          <p>We are not responsible for:</p>
          <ul class="terms-list">
            <li>Third-party content</li>
            <li>External services</li>
            <li>Privacy practices</li>
            <li>Availability of external websites</li>
          </ul>
          <p>Users access third-party websites at their own risk.</p>
        </section>

        <section :id="tocSections[5].id" class="terms-section">
          <h2 class="terms-section-heading">6. Advertisements</h2>
          <p>
            We may display advertisements or sponsored content through third-party advertising
            providers such as Google AdSense.
          </p>
          <p>
            We are not responsible for third-party advertisements, products, or services displayed
            on the platform.
          </p>
        </section>

        <section :id="tocSections[6].id" class="terms-section">
          <h2 class="terms-section-heading">7. Acceptable Use</h2>
          <p>Users must not:</p>
          <ul class="terms-list">
            <li>Attempt to hack or disrupt the website</li>
            <li>Abuse APIs or automated systems</li>
            <li>Use bots to scrape content excessively</li>
            <li>Upload malicious code</li>
            <li>Harass other users</li>
            <li>Use the platform for unlawful purposes</li>
          </ul>
          <p>
            We reserve the right to restrict access for users who violate these rules.
          </p>
        </section>

        <section :id="tocSections[7].id" class="terms-section">
          <h2 class="terms-section-heading">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Vcoding shall not be liable for:
          </p>
          <ul class="terms-list">
            <li>Any indirect or consequential damages</li>
            <li>Loss of data</li>
            <li>Loss of business or revenue</li>
            <li>Service interruptions</li>
            <li>Technical issues</li>
            <li>Errors in educational content</li>
          </ul>
          <p>Use of the platform is at your own risk.</p>
        </section>

        <section :id="tocSections[8].id" class="terms-section">
          <h2 class="terms-section-heading">9. Availability of Services</h2>
          <p>
            We may modify, suspend, or discontinue parts of the website at any time without prior
            notice.
          </p>
          <p>We do not guarantee uninterrupted access to the platform.</p>
        </section>

        <section :id="tocSections[9].id" class="terms-section">
          <h2 class="terms-section-heading">10. Privacy</h2>
          <p>Your use of the platform is also governed by our Privacy Policy.</p>
          <p>
            Please review our
            <RouterLink :to="{ name: 'privacy-policy' }" class="terms-link">Privacy Policy</RouterLink>
            to understand how we handle user information.
          </p>
        </section>

        <section :id="tocSections[10].id" class="terms-section">
          <h2 class="terms-section-heading">11. Changes to These Terms</h2>
          <p>We may update these Terms periodically.</p>
          <p>
            Updated versions will be posted on this page with a revised "Last Updated" date.
          </p>
          <p>
            Continued use of the platform after updates means you accept the revised Terms.
          </p>
        </section>

        <section :id="tocSections[11].id" class="terms-section">
          <h2 class="terms-section-heading">12. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with applicable laws and
            regulations.
          </p>
          <p>Users are responsible for complying with local laws in their jurisdiction.</p>
        </section>

        <section :id="tocSections[12].id" class="terms-section">
          <h2 class="terms-section-heading">13. Contact Us</h2>
          <p>If you have questions regarding these Terms, contact us:</p>
          <ul class="terms-list terms-list--no-bullet">
            <li>
              <strong>Website:</strong>
              <a href="https://vcoding.io" class="terms-link">vcoding.io</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:support@vcoding.io" class="terms-link">support@vcoding.io</a>
            </li>
          </ul>
        </section>

        <section :id="tocSections[13].id" class="terms-section">
          <h2 class="terms-section-heading">14. Acceptance of Terms</h2>
          <p>
            By using this website, you confirm that you have read, understood, and agreed to these
            Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, type CSSProperties } from 'vue'
import { RouterLink } from 'vue-router'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

useSeo({
  title: 'Terms and Conditions',
  description:
    'Read the Terms and Conditions for Vcoding, including platform usage guidelines, educational disclaimers, intellectual property rights, and user responsibilities.',
  path: '/terms-and-conditions',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
  { name: 'Terms and Conditions', url: '/terms-and-conditions' },
])

const tocSections = [
  { id: 'use-of-the-website', label: 'Use of the Website' },
  { id: 'educational-content-disclaimer', label: 'Content Disclaimer' },
  { id: 'user-accounts', label: 'User Accounts' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'third-party-links', label: 'Third-Party Links' },
  { id: 'advertisements', label: 'Advertisements' },
  { id: 'acceptable-use', label: 'Acceptable Use' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'availability-of-services', label: 'Availability of Services' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'changes-to-terms', label: 'Changes to These Terms' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact-us', label: 'Contact Us' },
  { id: 'acceptance-of-terms', label: 'Acceptance of Terms' },
]

const activeSection = ref(tocSections[0].id)
const tocListRef = ref<HTMLElement | null>(null)
const indicatorStyle = ref<CSSProperties>({ opacity: '0' })

function updateIndicator() {
  if (!tocListRef.value) return
  const index = tocSections.findIndex((s) => s.id === activeSection.value)
  if (index < 0) return
  const items = tocListRef.value.querySelectorAll(':scope > li')
  if (!items[index]) return
  const listRect = tocListRef.value.getBoundingClientRect()
  const itemRect = items[index].getBoundingClientRect()
  indicatorStyle.value = {
    transform: `translateY(${itemRect.top - listRect.top}px)`,
    height: `${itemRect.height}px`,
    opacity: '1',
  }
}

watch(activeSection, () => nextTick(updateIndicator))

let observer: IntersectionObserver | null = null

onMounted(() => {
  const sectionElements = tocSections
    .map((s) => document.getElementById(s.id))
    .filter(Boolean) as HTMLElement[]

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
  )

  for (const el of sectionElements) {
    observer.observe(el)
  }

  nextTick(updateIndicator)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped lang="scss">
.terms-page {
  padding: 48px 24px 96px;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.terms-container {
  display: grid;
  grid-template-columns: 1fr min(720px, 100%) 240px;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.terms-sidebar {
  order: 1;
  grid-column: 3;
}

.terms-content {
  grid-column: 2;
}

.terms-toc {
  position: sticky;
  top: 96px;
}

.terms-toc-title {
  margin: 0 0 16px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hdr-text-soft);
}

.terms-toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 4px solid var(--color-primary-100);
  padding-left: 16px;
  position: relative;
}

.terms-toc-indicator {
  position: absolute;
  left: -3.5px;
  top: 0;
  width: 3px;
  border-radius: 3px;
  background: #12408e;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  pointer-events: none;
}

.terms-toc-link {
  display: block;
  padding: 4px 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--hdr-text-soft);
  text-decoration: none;
  transition: color 0.15s ease;
}

.terms-toc-link:hover,
.terms-toc-link:focus-visible {
  color: var(--color-primary);
  outline: none;
}

.terms-toc-link--active {
  color: var(--color-primary);
  font-weight: 600;
}

.terms-header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-primary-100);
}

.terms-header-badge {
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

.terms-title {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.terms-last-updated {
  margin: 0 0 20px;
  font-size: 0.875rem;
  color: var(--hdr-text-soft);
}

.terms-intro {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--hdr-text);
  max-width: 600px;
}

.terms-section {
  padding-top: 32px;
  padding-bottom: 32px;
  scroll-margin-top: 88px;

  & + & {
    border-top: 1px solid var(--color-primary-50);
  }
}

.terms-section-heading {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.3;
}

.terms-subsection-heading {
  margin: 20px 0 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--hdr-text);
}

.terms-section p {
  margin: 0 0 12px;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--hdr-text);

  &:last-child {
    margin-bottom: 0;
  }
}

.terms-list {
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

.terms-list--no-bullet {
  list-style: none;
  padding-left: 0;
  gap: 10px;
}

.terms-link {
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

@media (max-width: 1080px) {
  .terms-container {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .terms-sidebar {
    display: none;
  }

  .terms-content {
    grid-column: 1;
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .terms-page {
    padding: 32px 16px 72px;
  }

  .terms-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
  }

  .terms-section {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .terms-section-heading {
    font-size: 1.125rem;
  }
}
</style>
