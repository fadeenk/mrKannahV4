# Landing Page Redesign - Design Document

**Date:** 2026-03-14  
**Author:** opencode  
**Goal:** Increase consultation bookings and better showcase consulting services

---

## Overview

Redesign the Docusaurus landing page to increase consultation bookings by improving value proposition clarity, showcasing services effectively, and differentiating based on 18+ years experience.

---

## Hero Section Redesign

### Current State
- Large decorative "Fadee Kannah" text (75px font)
- Tagline: "Guiding Teams and Individuals to Success"
- Profile picture with animation
- 2 CTAs below the fold

### Proposed State
- **Headline:** "18+ Years Building Tech Companies. I Help You Launch Faster, Scale Smarter."
- **Subheadline:** "From MVP to enterprise — get senior technical leadership without the full-time cost."
- **Primary CTA:** "Book Free Consultation" (prominent button, links to Calendly)
- **Secondary CTA:** "See My Work" (links to /showcase)
- **Trust indicators (below CTAs):**
  - "$30M+ raised for clients"
  - "40-60% infrastructure cost reduction"
  - "Built teams from 2 to 50"
- Profile picture repositioned (right side or smaller) to not compete with headline

### Implementation Notes
- Reduce decorative name text size or move below headline
- Use bold, high-contrast CTA button (hero--primary style)
- Keep particles background but ensure it doesn't distract from message

---

## Trust & Results Bar

### Proposed
Add a stats/credentials bar immediately after the hero section:
- "$30M+ raised for clients | 18+ years experience | 40-60% infrastructure cost reduction"

This appears above the fold on desktop, reinforcing credibility immediately.

---

## Services Redesign

### Current State
- 5 services in dense paragraph format
- Engagement models in separate section below

### Proposed State

### Service Cards (Top 3)
1. **MVP Development & Launch** — Icon + bullet points
2. **Technical Architecture & Modernization** — Icon + bullet points  
3. **AI Integration & Strategy** — Icon + bullet points

Each card:
- Icon (use existing or add new)
- Title (h3)
- 2-3 bullet points of key benefits
- "Learn more" link or collapse extra detail

### Secondary Services
- Engineering Team Enablement
- Fractional CTO & Technical Leadership

Option: Combine or de-emphasize with "and more" treatment

### Engagement Models Section
- **Project Based**
- **Strategic Advisory**
- **Contractor Engagement**

Cards side-by-side with clear differentiation. Add "Not sure which fits?" CTA linking to Calendly.

---

## Conversion Elements

### CTAs Throughout Page
Add CTA button after every major section:
- After About/Hero
- After Services (already has, make more prominent)
- After Featured Work
- After Testimonials
- At Contact section

### CTA Style
- Prominent button style (not text link)
- "Book Free Consultation" or "Let's Talk"

---

## Visual Hierarchy Improvements

### Section Differentiation
- Each major section gets distinct background (subtle color variation)
- Services section: cards on alternating backgrounds
- Testimonials: distinct from hero/About sections (currently uses same hero--primary)

### Spacing
- Increase whitespace between sections (3-4rem)
- More padding within service cards

### Typography
- Ensure headline hierarchy: H1 > H2 > H3
- Services: scannable format (bullets, not paragraphs)

---

## Mobile Considerations

- Reduce header title font size below 996px breakpoint
- Full-width CTA buttons on mobile
- Stack service cards vertically on mobile

---

## Content Summary

### Hero
- Headline: "18+ Years Building Tech Companies. I Help You Launch Faster, Scale Smarter."
- Subheadline: "From MVP to enterprise — get senior technical leadership without the full-time cost."
- Trust bullets: "$30M+ raised", "40-60% cost reduction", "Built teams 2-50"

### Services (3 cards + 2 secondary)
1. MVP Development & Launch
2. Technical Architecture & Modernization
3. AI Integration & Strategy
4. Engineering Team Enablement (secondary)
5. Fractional CTO (secondary)

### Engagement Models
- Project Based
- Strategic Advisory
- Contractor Engagement

---

## Files to Modify

1. `src/components/Header/index.js` — Update headline, CTAs, trust indicators
2. `src/pages/index.tsx` — Redesign Services, add stats bar, add CTAs throughout
3. `src/components/Header/header.css` — Adjust styling for new layout
4. `src/css/custom.css` — Add any new section styles if needed

---

## Success Criteria

- Value proposition clear within 3 seconds of page load
- Services scannable in 10 seconds
- CTA visible at all scroll positions (or at least after each section)
- 18+ years and $30M+ differentiation prominent
- Mobile-friendly with no horizontal scroll
