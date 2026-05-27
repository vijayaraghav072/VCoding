<template>
  <article class="privacy-page" aria-labelledby="privacy-heading">
    <div class="privacy-container">
      <aside class="privacy-sidebar" aria-label="Table of contents">
        <nav class="privacy-toc">
          <p class="privacy-toc-title">On this page</p>
          <ul class="privacy-toc-list" ref="tocListRef">
            <span
              class="privacy-toc-indicator"
              :style="indicatorStyle"
              aria-hidden="true"
            ></span>
            <li v-for="section in tocSections" :key="section.id">
              <a
                :href="`#${section.id}`"
                class="privacy-toc-link"
                :class="{ 'privacy-toc-link--active': activeSection === section.id }"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="privacy-content">
        <header class="privacy-header">
          <p class="privacy-header-badge">Legal</p>
          <h1 id="privacy-heading" class="privacy-title">Privacy Policy</h1>
          <p class="privacy-last-updated">Last Updated: May 21, 2026</p>
          <p class="privacy-intro">
            Welcome to Vcoding. Your privacy matters to us. This Privacy Policy explains what
            information we collect, how we use it, and how we protect it when you use our website.
          </p>
        </header>

        <section :id="tocSections[0].id" class="privacy-section">
          <h2 class="privacy-section-heading">1. Information We Collect</h2>
          <p>We only collect limited information from users.</p>
          <h3 class="privacy-subsection-heading">Email Address</h3>
          <p>We may collect your email address when you:</p>
          <ul class="privacy-list">
            <li>Create an account</li>
            <li>Subscribe to newsletters</li>
            <li>Contact us</li>
            <li>Request updates or notifications</li>
          </ul>
          <p>We do not collect unnecessary personal information.</p>
        </section>

        <section :id="tocSections[1].id" class="privacy-section">
          <h2 class="privacy-section-heading">2. How We Use Your Information</h2>
          <p>We use your email address only for purposes such as:</p>
          <ul class="privacy-list">
            <li>Account-related communication</li>
            <li>Important updates</li>
            <li>Responding to support requests</li>
            <li>Sending newsletters or educational updates (if subscribed)</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section :id="tocSections[2].id" class="privacy-section">
          <h2 class="privacy-section-heading">3. Cookies &amp; Basic Analytics</h2>
          <p>
            Our website may use basic cookies or analytics tools to improve website performance
            and user experience.
          </p>
          <p>These tools may collect limited technical information such as:</p>
          <ul class="privacy-list">
            <li>Browser type</li>
            <li>Device type</li>
            <li>Pages visited</li>
            <li>General usage statistics</li>
          </ul>
          <p>This information is used only to improve the platform.</p>
        </section>

        <section :id="tocSections[3].id" class="privacy-section">
          <h2 class="privacy-section-heading">4. Third-Party Services</h2>
          <p>We may use trusted third-party services for:</p>
          <ul class="privacy-list">
            <li>Website hosting</li>
            <li>Analytics</li>
            <li>Authentication</li>
            <li>Email delivery</li>
            <li>Advertising services</li>
          </ul>
          <p>
            These services may process limited technical data according to their own privacy policies.
          </p>
          <p>Examples may include:</p>
          <ul class="privacy-list">
            <li>Google Analytics</li>
            <li>Google AdSense</li>
            <li>Cloud hosting providers</li>
          </ul>
        </section>

        <section :id="tocSections[4].id" class="privacy-section">
          <h2 class="privacy-section-heading">5. Data Protection</h2>
          <p>We take reasonable steps to protect your information through:</p>
          <ul class="privacy-list">
            <li>Secure connections (HTTPS)</li>
            <li>Protected authentication systems</li>
            <li>Security monitoring</li>
          </ul>
          <p>However, no online platform can guarantee complete security.</p>
        </section>

        <section :id="tocSections[5].id" class="privacy-section">
          <h2 class="privacy-section-heading">6. Your Rights</h2>
          <p>You may request to:</p>
          <ul class="privacy-list">
            <li>Access your stored email address</li>
            <li>Update your information</li>
            <li>Delete your account or data</li>
            <li>Unsubscribe from communications</li>
          </ul>
          <p>To request this, contact us at:</p>
          <p class="privacy-contact-info">
            Email: <a href="mailto:support@vcoding.io" class="privacy-link">support@vcoding.io</a>
          </p>
        </section>

        <section :id="tocSections[6].id" class="privacy-section">
          <h2 class="privacy-section-heading">7. Children's Privacy</h2>
          <p>Our website is intended for general educational use.</p>
          <p>
            We do not knowingly collect personal information from children without appropriate
            consent where required by law.
          </p>
        </section>

        <section :id="tocSections[7].id" class="privacy-section">
          <h2 class="privacy-section-heading">8. External Links</h2>
          <p>Our platform may contain links to third-party websites or tools.</p>
          <p>We are not responsible for the privacy practices of external websites.</p>
        </section>

        <section :id="tocSections[8].id" class="privacy-section">
          <h2 class="privacy-section-heading">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy occasionally.</p>
          <p>
            Any updates will be posted on this page with a revised "Last Updated" date.
          </p>
        </section>

        <section :id="tocSections[9].id" class="privacy-section">
          <h2 class="privacy-section-heading">10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <ul class="privacy-list privacy-list--no-bullet">
            <li>
              <strong>Website:</strong>
              <a href="https://vcoding.io" class="privacy-link">vcoding.io</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:support@vcoding.io" class="privacy-link">support@vcoding.io</a>
            </li>
          </ul>
        </section>

        <section :id="tocSections[10].id" class="privacy-section">
          <h2 class="privacy-section-heading">11. Consent</h2>
          <p>By using this website, you agree to this Privacy Policy.</p>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, type CSSProperties } from 'vue'
import { useSeo, useBreadcrumbSchema } from '@/composables/useSeo'

useSeo({
  title: 'Privacy Policy',
  description:
    'Read the Privacy Policy for Vcoding and learn how we protect user information and maintain privacy across our educational platform.',
  path: '/privacy-policy',
})

useBreadcrumbSchema([
  { name: 'Home', url: '/home' },
  { name: 'Privacy Policy', url: '/privacy-policy' },
])

const tocSections = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-your-information', label: 'How We Use Your Information' },
  { id: 'cookies-analytics', label: 'Cookies & Analytics' },
  { id: 'third-party-services', label: 'Third-Party Services' },
  { id: 'data-protection', label: 'Data Protection' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'external-links', label: 'External Links' },
  { id: 'changes-to-policy', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
  { id: 'consent', label: 'Consent' },
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
.privacy-page {
  padding: 48px 24px 96px;
  font-family: var(--font-sans);
  color: var(--hdr-text);
}

.privacy-container {
  display: grid;
  grid-template-columns: 1fr min(720px, 100%) 240px;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.privacy-sidebar {
  order: 1;
  grid-column: 3;
}

.privacy-content {
  grid-column: 2;
}

.privacy-toc {
  position: sticky;
  top: 96px;
}

.privacy-toc-title {
  margin: 0 0 16px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hdr-text-soft);
}

.privacy-toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-left: 2px solid var(--color-primary-100);
  padding-left: 16px;
  position: relative;
}

.privacy-toc-indicator {
  position: absolute;
  left: -2px;
  top: 0;
  width: 3px;
  border-radius: 3px;
  background: #12408e;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  pointer-events: none;
}

.privacy-toc-link {
  display: block;
  padding: 4px 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--hdr-text-soft);
  text-decoration: none;
  transition: color 0.15s ease;
}

.privacy-toc-link:hover,
.privacy-toc-link:focus-visible {
  color: var(--color-primary);
  outline: none;
}

.privacy-toc-link--active {
  color: var(--color-primary);
  font-weight: 600;
}

.privacy-header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-primary-100);
}

.privacy-header-badge {
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

.privacy-title {
  margin: 0 0 12px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.privacy-last-updated {
  margin: 0 0 20px;
  font-size: 0.875rem;
  color: var(--hdr-text-soft);
}

.privacy-intro {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--hdr-text);
  max-width: 600px;
}

.privacy-section {
  padding-top: 32px;
  padding-bottom: 32px;
  scroll-margin-top: 88px;

  & + & {
    border-top: 1px solid var(--color-primary-50);
  }
}

.privacy-section-heading {
  margin: 0 0 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.3;
}

.privacy-subsection-heading {
  margin: 20px 0 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--hdr-text);
}

.privacy-section p {
  margin: 0 0 12px;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--hdr-text);

  &:last-child {
    margin-bottom: 0;
  }
}

.privacy-list {
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

.privacy-list--no-bullet {
  list-style: none;
  padding-left: 0;
  gap: 10px;
}

.privacy-link {
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

.privacy-contact-info {
  margin-top: 8px;
  font-weight: 500;
}

@media (max-width: 1080px) {
  .privacy-container {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .privacy-sidebar {
    display: none;
  }

  .privacy-content {
    grid-column: 1;
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .privacy-page {
    padding: 32px 16px 72px;
  }

  .privacy-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
  }

  .privacy-section {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .privacy-section-heading {
    font-size: 1.125rem;
  }
}
</style>
