import { useHead, useSeoMeta } from '@unhead/vue'
import { computed, unref, type MaybeRef } from 'vue'

const SITE_NAME = 'Vcoding'
const SITE_URL = 'https://vcoding.io'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`
const TWITTER_HANDLE = '@vcoding'

export interface SeoOptions {
  title: MaybeRef<string>
  description: MaybeRef<string>
  path: MaybeRef<string>
  ogImage?: MaybeRef<string>
  ogType?: MaybeRef<'website' | 'article' | 'profile'>
  noIndex?: MaybeRef<boolean>
}

export function useSeo(options: SeoOptions) {
  const title = computed(() => unref(options.title))
  const description = computed(() => unref(options.description))
  const canonicalUrl = computed(() => `${SITE_URL}${unref(options.path)}`)
  const ogImage = computed(() => unref(options.ogImage) || DEFAULT_OG_IMAGE)
  const ogType = computed(() => unref(options.ogType) || 'website')
  const noIndex = computed(() => unref(options.noIndex) || false)

  useHead({
    title: computed(() => `${title.value} | ${SITE_NAME}`),
    link: [
      { rel: 'canonical', href: canonicalUrl },
    ],
  })

  useSeoMeta({
    description,
    robots: computed(() =>
      noIndex.value
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1',
    ),

    ogTitle: title,
    ogDescription: description,
    ogType: ogType as MaybeRef<string>,
    ogUrl: canonicalUrl,
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogSiteName: SITE_NAME,
    ogLocale: 'en_US',

    twitterCard: 'summary_large_image',
    twitterSite: TWITTER_HANDLE,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  })
}

export interface SchemaOrgData {
  [key: string]: unknown
}

export function useJsonLd(data: MaybeRef<SchemaOrgData | SchemaOrgData[]>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify(unref(data))),
      },
    ],
  })
}

export function useOrganizationSchema() {
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [
      'https://twitter.com/vcoding',
      'https://github.com/vcoding',
      'https://linkedin.com/company/vcoding',
      'https://youtube.com/@vcoding',
    ],
  })
}

export function useWebsiteSchema() {
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  })
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function useBreadcrumbSchema(items: MaybeRef<BreadcrumbItem[]>) {
  const breadcrumbs = computed(() => unref(items))

  useJsonLd(
    computed(() => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.value.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      })),
    })),
  )
}

export interface ArticleSchemaOptions {
  headline: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
  author: string
}

export function useArticleSchema(options: MaybeRef<ArticleSchemaOptions>) {
  const data = computed(() => unref(options))

  useJsonLd(
    computed(() => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.value.headline,
      description: data.value.description,
      url: data.value.url.startsWith('http')
        ? data.value.url
        : `${SITE_URL}${data.value.url}`,
      image: data.value.image || DEFAULT_OG_IMAGE,
      datePublished: data.value.datePublished,
      dateModified: data.value.dateModified,
      author: {
        '@type': 'Person',
        name: data.value.author,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.svg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': data.value.url.startsWith('http')
          ? data.value.url
          : `${SITE_URL}${data.value.url}`,
      },
    })),
  )
}

export { SITE_NAME, SITE_URL }
