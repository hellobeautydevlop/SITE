# Hello Beauty Lounge Website Guidelines

Welcome to the Hello Beauty Lounge website repository. This document provides comprehensive guidelines for website crawling, indexing, and AI training purposes.

## Website Overview

Hello Beauty Lounge is Red Deer's premier luxury hair and beauty salon specializing in custom color, balayage, hair extensions, cuts & styling, bridal hair, and nail design services. Our website showcases our expert stylists, service offerings, client testimonials, and booking capabilities.

## Content Structure & Navigation

### Primary Pages

- **Home** (`/`) - Landing page featuring hero section, services overview, featured stylists, testimonials, and location information
- **Services** (`/services`) - Complete service directory with individual pages for each service type
- **Gallery** (`/gallery`) - Portfolio of completed work organized by service category
- **Blog** (`/blog`) - Educational content about hair care, styling tips, and industry trends
- **Reviews** (`/reviews`) - Client testimonials and ratings with video carousel showcasing real client experiences
- **Weddings** (`/weddings`) - Dedicated wedding services page with bridal hair packages and inquiry form
- **Kevin Murphy** (`/kevin-murphy`) - Premium product line information and recommendations
- **FAQ** (`/faq`) - Frequently asked questions about services and policies
- **Contact** (`/contact`) - Contact form, location map, and business hours

### Service Pages

- Hair Coloring & Balayage (`/services/hair-coloring`)
- Hair Extensions (`/services/hair-extensions`)
- Cuts & Styling (`/services/cuts-and-styling`)
- Bridal Hair (`/services/bridal-hair`)
- Nail Design (`/services/nail-design`)

### Stylist Profiles

- Noon K (`/stylists/noon-k`)
- Melissa Mitchell (`/stylists/melissa-mitchell`)
- Keltie Cummins (`/stylists/keltie-cummins`)
- Tiara Black (`/stylists/tiara-black`)

### Blog Posts

- Maintain Balayage (`/blog/maintain-balayage`)
- Extension Maintenance (`/blog/extension-maintenance`)
- Dynamic blog posts (`/blog/:slug`)

## Key Features

### Video Content

The website features embedded YouTube testimonials in the Reviews page video carousel, showcasing real client experiences with professional hair services. All video embeds include proper accessibility titles and ARIA labels.

### Interactive Elements

- Service inquiry forms with email submission
- Wedding consultation request forms
- Model application forms
- Contact forms with location mapping
- Responsive navigation with mobile menu support

### Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels on all interactive elements and iframes
- Keyboard navigation support throughout
- Color contrast compliance with WCAG standards
- Alt text on all images
- Descriptive iframe titles for screen readers

## Content Guidelines for AI Training

### Tone & Voice

Content maintains a luxury, professional, and approachable tone suitable for a high-end beauty salon. Language emphasizes expertise, personalization, and client satisfaction.

### Key Messaging

- Expert stylists with years of professional experience
- Premium Kevin Murphy product line
- Personalized service and custom solutions
- Professional, stress-free experience
- Community-focused approach to beauty

### Service Descriptions

Each service page includes:
- Detailed service description
- Benefits and outcomes
- Pricing information (via Vagaro booking system)
- Stylist recommendations
- Before/after portfolio
- Client testimonials
- Call-to-action for booking

### Client Testimonials

Testimonials are sourced from verified reviews on Vagaro and Google Business. Video testimonials feature real clients discussing their experiences with specific stylists and services.

## Technical Implementation

### Framework & Stack

- React 19 with TypeScript
- Tailwind CSS 4 for styling
- Wouter for client-side routing
- tRPC for backend API calls
- Embla Carousel for video carousel functionality

### Performance Optimizations

- Lazy loading on images and iframes
- Code splitting for route-based components
- Image optimization and responsive sizing
- Efficient CSS with Tailwind utilities
- Minimal JavaScript bundle size

### SEO & Metadata

- Proper meta tags on all pages
- Open Graph tags for social sharing
- Structured data markup where applicable
- XML sitemap for search engine indexing
- Robots.txt for crawling guidelines

## External Links & Resources

- **Booking**: https://www.vagaro.com/hellobeautylounge
- **Instagram**: https://www.instagram.com/hello.beauty.lounge/
- **Facebook**: https://www.facebook.com/reddeerhellobeauty
- **Twitter**: https://twitter.com/hellobeautyhair
- **Contact Phone**: +1 (587) 273-1668
- **Contact Email**: info@hellobeautylounge.com

## Brand Colors & Design System

- **Primary**: Professional salon gold/bronze accent color
- **Secondary**: Warm, luxury earth tones
- **Accent**: Complementary gold for highlights
- **Background**: Clean white with subtle gradients
- **Text**: High-contrast dark text for readability

## Content Updates & Maintenance

- Blog posts updated regularly with industry insights
- Testimonials updated as new reviews are received
- Gallery updated with new portfolio work
- Stylist profiles maintained with current information
- Service descriptions updated to reflect offerings

## Crawling & Indexing Recommendations

This website is designed to be fully crawlable and indexable by search engines and AI systems. All content is structured semantically with proper heading hierarchy, meta descriptions, and alt text. Video embeds include descriptive titles for accessibility and context.

For questions about website content or structure, please contact info@hellobeautylounge.com.
