// RECONSTRUCTED FILE — original was lost on 2026-05-26.
// Route definitions reconstructed from references in views/components and src/router/seo.ts.
// The original may have applied SEO meta from routeSeoDefaults — re-attach if needed.
import type { RouteRecordRaw } from 'vue-router'
import { routeSeoDefaults } from './seo'

const seo = (key: string) => routeSeoDefaults[key] ?? {}

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: () => import('@/views/HomeView.vue'), meta: seo('home') },
  { path: '/articles', name: 'articles', component: () => import('@/views/HomeView.vue'), meta: seo('articles') },
  { path: '/problems', name: 'problems', component: () => import('@/views/HomeView.vue'), meta: seo('problems') },
  { path: '/explore', name: 'explore', component: () => import('@/views/HomeView.vue'), meta: seo('explore') },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { ...seo('login'), guestOnly: true },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupView.vue'),
    meta: { ...seo('signup'), guestOnly: true },
  },
  {
    path: '/auth/callback',
    name: 'auth-callback',
    component: () => import('@/views/AuthCallbackView.vue'),
    meta: { noIndex: true },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    meta: seo('privacyPolicy'),
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: () => import('@/views/TermsConditionsView.vue'),
    meta: seo('termsConditions'),
  },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue'), meta: seo('contact') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue'), meta: seo('about') },
  { path: '/disclaimer', name: 'disclaimer', component: () => import('@/views/DisclaimerView.vue'), meta: seo('disclaimer') },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page Not Found', noIndex: true },
  },
]
