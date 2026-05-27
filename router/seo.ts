import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    ogType?: 'website' | 'article' | 'profile'
    noIndex?: boolean
    requiresAuth?: boolean
    guestOnly?: boolean
  }
}

export const routeSeoDefaults: Record<string, RouteMeta> = {
  home: {
    title: 'Learn Programming, DSA & System Design',
    description:
      'Vcoding is a free educational platform for learning programming, data structures, algorithms, system design, and full-stack development with structured courses and hands-on practice.',
    ogType: 'website',
  },
  articles: {
    title: 'Programming Articles & Tutorials',
    description:
      'Read in-depth programming articles, tutorials, and guides on web development, DSA, system design, AI, and more. Written by experienced developers for all skill levels.',
  },
  problems: {
    title: 'Practice Coding Problems',
    description:
      'Sharpen your programming skills with curated coding problems ranging from beginner to advanced. Practice DSA, algorithms, and real interview questions.',
  },
  explore: {
    title: 'Explore Courses & Learning Paths',
    description:
      'Discover structured learning paths and courses in programming, web development, AI, cloud computing, and more. Start learning for free today.',
  },
  login: {
    title: 'Sign In',
    description:
      'Sign in to your Vcoding account to track your learning progress, save bookmarks, and access personalized content.',
    noIndex: true,
  },
  signup: {
    title: 'Create Account',
    description:
      'Create your free Vcoding account to track progress, save bookmarks, and access personalized learning content.',
    noIndex: true,
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'Read the Privacy Policy for Vcoding and learn how we protect user information and maintain privacy across our educational platform.',
  },
  termsConditions: {
    title: 'Terms and Conditions',
    description:
      'Read the Terms and Conditions for Vcoding, including platform usage guidelines, educational disclaimers, intellectual property rights, and user responsibilities.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Contact Vcoding for support, feedback, business inquiries, partnerships, or technical assistance related to our educational platform.',
  },
}
