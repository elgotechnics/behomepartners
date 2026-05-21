import type { ReactNode } from "react";

export type ServiceLink = { label: string; href: string };

export type ServiceHeroPoint = {
  title: string;
  icon: ReactNode;
};

export type ServiceBenefit = {
  title: string;
  body: string;
  icon: ReactNode;
};

export type ServiceFeature = {
  title: string;
  body: string;
  icon: ReactNode;
};

export type ServiceStep = {
  title: string;
  body: ReactNode;
};

export type ServiceFAQItem = {
  q: string;
  a: ReactNode;
};

export type ServiceIntroBullet = {
  text: string;
  icon?: ReactNode;
};

export type ServiceConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceType: string;
  hero: {
    label?: string;
    h1: string;
    description: string;
    points: ServiceHeroPoint[];
    primaryCta: ServiceLink;
    secondaryCta?: ServiceLink;
    image: { src: string; alt: string };
  };
  intro: {
    eyebrow?: string;
    title: string;
    body: ReactNode[];
    image: { src: string; alt: string };
    imagePosition?: "left" | "right";
    bullets?: ServiceIntroBullet[];
  };
  benefits: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: ServiceBenefit[];
  };
  features?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: ServiceFeature[];
  };
  process: {
    eyebrow?: string;
    title: string;
    description?: string;
    steps: ServiceStep[];
  };
  reviews?: {
    eyebrow?: string;
    title?: string;
  };
  faq?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    items: ServiceFAQItem[];
    image?: { src: string; alt: string };
    imagePosition?: "left" | "right";
  };
  cta: {
    eyebrow?: string;
    title: string;
    body: string;
    primary: ServiceLink;
    secondary?: ServiceLink;
    image?: { src: string; alt: string };
  };
};
