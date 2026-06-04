# Google Search Console Monitoring Guide
## Hello Beauty Lounge - Performance Tracking

---

## Table of Contents
1. [Setup & Verification](#setup--verification)
2. [Key Metrics to Monitor](#key-metrics-to-monitor)
3. [Dashboard Overview](#dashboard-overview)
4. [Performance Analysis](#performance-analysis)
5. [Indexing & Coverage](#indexing--coverage)
6. [Mobile Usability](#mobile-usability)
7. [Core Web Vitals](#core-web-vitals)
8. [Structured Data](#structured-data)
9. [Links & Authority](#links--authority)
10. [Troubleshooting & Optimization](#troubleshooting--optimization)
11. [Monthly Reporting](#monthly-reporting)

---

## Setup & Verification

### Step 1: Access Google Search Console
1. Go to https://search.google.com/search-console
2. Sign in with your Google account (use business account if available)
3. Click "Add Property"

### Step 2: Add Your Website
**For hello-beauty-lounge.manus.space:**
- Select "URL prefix" property type
- Enter: `https://hellobeautylounge.com` (or your custom domain)
- Click "Continue"

**For custom domains (hellobeautylounge.com, www.hellobeautylounge.com):**
- Add both versions as separate properties
- Set one as primary

### Step 3: Verify Ownership
**Recommended method: DNS verification**
1. Click "HTML tag" verification method
2. Copy the meta tag provided
3. Add to your website's `<head>` section
4. Click "Verify"

**Alternative methods:**
- Google Analytics (if already connected)
- Google Tag Manager
- Sitemap submission

### Step 4: Submit Sitemap
1. Go to "Sitemaps" in left menu
2. Enter: `https://hellobeautylounge.com/sitemap.xml`
3. Click "Submit"
4. Verify it shows "Success"

---

## Key Metrics to Monitor

### 1. **Click-Through Rate (CTR)**
**What it measures:** % of impressions that result in clicks

**Target:** 3-5% for local business websites

**How to improve:**
- Optimize meta descriptions (already done!)
- Add compelling headlines
- Include location in title tags
- Use schema markup for rich snippets (already done!)

**Where to find:** Performance → Filter by "CTR"

---

### 2. **Impressions**
**What it measures:** How many times your site appears in search results

**Target:** 500+ impressions/month (initial), 2000+ (mature)

**How to improve:**
- Target more keywords
- Create more content
- Build backlinks
- Optimize for local search

**Where to find:** Performance → Main graph

---

### 3. **Average Position**
**What it measures:** Average ranking position in search results

**Target:** Position 1-3 for main keywords, 1-10 for secondary

**Current targets for Hello Beauty Lounge:**
- "hair salon Red Deer" → Target: Position 3-5
- "beauty salon Alberta" → Target: Position 5-10
- "balayage Red Deer" → Target: Position 1-3
- "bridal hair Red Deer" → Target: Position 1-3

**How to improve:**
- Create more content
- Build backlinks
- Improve on-page SEO
- Increase reviews

**Where to find:** Performance → Filter by "Average position"

---

### 4. **Organic Traffic**
**What it measures:** Visitors coming from Google search

**Target:** 20-30% of total website traffic

**How to improve:**
- Increase rankings
- Improve CTR
- Target more keywords
- Create more content

**Where to find:** Google Analytics (integrated with GSC)

---

## Dashboard Overview

### Main Performance Report
**Location:** Performance tab

**Key sections:**
1. **Total Clicks** - How many people clicked your link
2. **Total Impressions** - How many times you appeared
3. **Average CTR** - Click-through rate percentage
4. **Average Position** - Your average ranking

**Time period:** Last 28 days (default)

### Recommended Dashboard Setup
1. **Weekly view:** Filter by last 7 days
2. **Monthly view:** Filter by last 28 days
3. **Quarterly view:** Filter by last 90 days

---

## Performance Analysis

### Step 1: Access Performance Report
1. Click "Performance" in left menu
2. Select date range (default: last 28 days)
3. View main metrics graph

### Step 2: Analyze by Query
**To see which search terms drive traffic:**
1. Click "Queries" tab
2. Sort by "Clicks" (highest first)
3. Identify top-performing keywords

**Expected top queries for Hello Beauty Lounge:**
- "hair salon Red Deer"
- "balayage Red Deer"
- "hair extensions Red Deer"
- "bridal hair Red Deer"
- "beauty salon Alberta"

### Step 3: Analyze by Page
**To see which pages get the most traffic:**
1. Click "Pages" tab
2. Sort by "Clicks" (highest first)
3. Identify top-performing pages

**Expected top pages:**
- Homepage (/)
- Services page (/services)
- Team page (/team)
- Gallery page (/gallery)

### Step 4: Analyze by Country
**To verify local search performance:**
1. Click "Countries" filter
2. Verify "Canada" is top country
3. Check "Alberta" if available

### Step 5: Analyze by Device
**To see mobile vs. desktop performance:**
1. Click "Devices" filter
2. Compare mobile vs. desktop metrics
3. Identify optimization opportunities

---

## Indexing & Coverage

### What to Monitor
**Location:** Coverage tab

**Key metrics:**
- **Valid** - Pages successfully indexed ✓
- **Excluded** - Pages not indexed (usually OK)
- **Error** - Pages with indexing problems ✗
- **Valid with warnings** - Pages indexed but with issues ⚠️

### Expected Results
- Homepage: ✓ Valid
- Services pages: ✓ Valid
- Team pages: ✓ Valid
- Gallery: ✓ Valid
- Contact: ✓ Valid
- Robots.txt: ✓ Valid
- Sitemap.xml: ✓ Valid

### How to Fix Issues
**If you see errors:**
1. Click on the error type
2. Note affected URLs
3. Fix the issue (usually 404 errors or robots.txt blocks)
4. Request re-indexing

**To request indexing:**
1. Go to "URL Inspection"
2. Paste URL
3. Click "Request Indexing"
4. Google will crawl within 24-48 hours

---

## Mobile Usability

### Why It Matters
- 60%+ of searches are mobile
- Mobile-friendly is a ranking factor
- Poor mobile experience = lower rankings

### What to Check
**Location:** Mobile Usability tab

**Expected status:** "No issues detected" ✓

**Common issues to fix:**
- Text too small to read
- Clickable elements too close
- Content wider than screen
- Viewport not configured

### Your Website Status
Hello Beauty Lounge should show:
- ✓ Responsive design
- ✓ Mobile-optimized
- ✓ Touch-friendly buttons
- ✓ No mobile usability issues

---

## Core Web Vitals

### What They Are
Three metrics Google uses to rank websites:

1. **Largest Contentful Paint (LCP)**
   - How fast the main content loads
   - Target: < 2.5 seconds
   - Your site: Should be < 1 second (static site)

2. **First Input Delay (FID)**
   - How responsive the site is to user input
   - Target: < 100 milliseconds
   - Your site: Should be < 50ms

3. **Cumulative Layout Shift (CLS)**
   - How stable the layout is while loading
   - Target: < 0.1
   - Your site: Should be < 0.05

### How to Monitor
**Location:** Core Web Vitals tab

**Expected status:** All green ✓

**If issues appear:**
1. Note the affected pages
2. Check Google PageSpeed Insights
3. Optimize images and code
4. Reduce JavaScript

### Your Website Performance
Hello Beauty Lounge (static site) should have:
- ✓ Excellent LCP (< 1s)
- ✓ Excellent FID (< 50ms)
- ✓ Excellent CLS (< 0.05)

---

## Structured Data

### What to Monitor
**Location:** Enhancement → Rich Results tab

**Expected results:**
- ✓ LocalBusiness schema
- ✓ Organization schema
- ✓ Service schema
- ✓ Review schema
- ✓ Breadcrumb schema
- ✓ Website schema

### How to Verify
1. Go to "Rich Results" tab
2. Check for "Valid" status
3. View sample rich results
4. Verify all structured data is recognized

### Your Website Status
All schemas should show:
- ✓ Valid
- ✓ Eligible for rich results
- ✓ No errors or warnings

---

## Links & Authority

### What to Monitor
**Location:** Links tab

**Key metrics:**
- **Top linking sites** - Which domains link to you
- **Top linked pages** - Which of your pages get linked to most
- **Top linked text** - What anchor text is used

### Expected Results
- Links from local directories
- Links from partner websites
- Links from social media
- Links from review sites

### How to Build More Links
1. Get listed on local directories
2. Partner with local businesses
3. Get featured in local media
4. Build relationships with influencers

---

## Troubleshooting & Optimization

### Common Issues & Solutions

#### Issue 1: Low Impressions
**Symptoms:** Few search impressions, low visibility

**Solutions:**
1. Create more content (blog posts)
2. Target more keywords
3. Build backlinks
4. Improve on-page SEO
5. Increase review count

**Timeline:** 2-3 months to see improvement

---

#### Issue 2: Low CTR
**Symptoms:** Impressions are good, but few clicks

**Solutions:**
1. Improve meta descriptions ✓ (already done)
2. Improve title tags
3. Add schema markup ✓ (already done)
4. Include location in titles
5. Add compelling CTAs

**Timeline:** 1-2 weeks to see improvement

---

#### Issue 3: Low Rankings
**Symptoms:** Appearing in search but position 10+

**Solutions:**
1. Improve page content
2. Add more backlinks
3. Increase review count
4. Improve Core Web Vitals
5. Optimize for local search

**Timeline:** 3-6 months to see improvement

---

#### Issue 4: Indexing Errors
**Symptoms:** Pages not appearing in search results

**Solutions:**
1. Check robots.txt (should allow all)
2. Check meta robots tag (should be "index, follow")
3. Request indexing manually
4. Fix any 404 errors
5. Check for noindex tags

**Timeline:** 24-48 hours after fix

---

#### Issue 5: Mobile Issues
**Symptoms:** Mobile usability errors

**Solutions:**
1. Test on mobile device
2. Use Google Mobile-Friendly Test
3. Fix viewport settings
4. Increase touch target size
5. Remove intrusive interstitials

**Timeline:** Immediate

---

## Monthly Reporting

### Create a Monthly Report

**Report Template:**

```
HELLO BEAUTY LOUNGE - SEO PERFORMANCE REPORT
Month: [Month/Year]

OVERVIEW
- Total Clicks: [#]
- Total Impressions: [#]
- Average CTR: [%]
- Average Position: [#]

TOP PERFORMING QUERIES
1. [Query] - [Clicks] clicks, Position [#]
2. [Query] - [Clicks] clicks, Position [#]
3. [Query] - [Clicks] clicks, Position [#]

TOP PERFORMING PAGES
1. [Page URL] - [Clicks] clicks
2. [Page URL] - [Clicks] clicks
3. [Page URL] - [Clicks] clicks

IMPROVEMENTS THIS MONTH
- [Improvement 1]
- [Improvement 2]
- [Improvement 3]

ISSUES TO ADDRESS
- [Issue 1]
- [Issue 2]
- [Issue 3]

NEXT MONTH GOALS
- [Goal 1]
- [Goal 2]
- [Goal 3]
```

### Monthly Check-In Schedule
- **Week 1:** Review previous month's data
- **Week 2:** Identify optimization opportunities
- **Week 3:** Implement improvements
- **Week 4:** Plan next month's strategy

---

## Recommended Monitoring Schedule

### Daily (5 minutes)
- Check for critical errors
- Monitor Core Web Vitals status

### Weekly (15 minutes)
- Review top queries
- Check average position trends
- Monitor CTR changes

### Monthly (30 minutes)
- Comprehensive performance review
- Create monthly report
- Plan optimization strategy
- Review competitor performance

### Quarterly (1 hour)
- Deep dive analysis
- Identify seasonal trends
- Set new goals
- Review backlink profile

---

## Integration with Google Analytics

### Connect GSC to Analytics
1. Go to Google Analytics
2. Admin → Property Settings
3. Search Console → Link
4. Select your GSC property
5. Save

### Benefits
- See which queries drive conversions
- Track user behavior from search
- Identify high-value keywords
- Measure ROI of SEO efforts

### Key Reports to Create
1. **Organic Search Performance** - Clicks, impressions, conversions
2. **Landing Page Performance** - Which pages convert best
3. **User Journey** - How users navigate from search
4. **Conversion Tracking** - Phone calls, form submissions, bookings

---

## Goals & Targets

### 3-Month Goals
- **Impressions:** 1,000+ per month
- **Clicks:** 50+ per month
- **Average Position:** 5-8 for main keywords
- **CTR:** 3-5%

### 6-Month Goals
- **Impressions:** 2,000+ per month
- **Clicks:** 100+ per month
- **Average Position:** 3-5 for main keywords
- **CTR:** 5-8%

### 12-Month Goals
- **Impressions:** 5,000+ per month
- **Clicks:** 250+ per month
- **Average Position:** 1-3 for main keywords
- **CTR:** 8-12%

---

## Tools & Resources

### Free Tools
- Google Search Console (GSC) - https://search.google.com/search-console
- Google Analytics - https://analytics.google.com
- Google PageSpeed Insights - https://pagespeed.web.dev
- Google Mobile-Friendly Test - https://search.google.com/test/mobile-friendly

### Paid Tools (Optional)
- Semrush - Rank tracking, competitor analysis
- Ahrefs - Backlink analysis, keyword research
- Moz - Authority metrics, rank tracking
- SE Ranking - Affordable all-in-one platform

### Documentation
- Google Search Console Help - https://support.google.com/webmasters
- Google Search Central Blog - https://developers.google.com/search/blog
- Google SEO Starter Guide - https://developers.google.com/search/docs/beginner/seo-starter-guide

---

## Troubleshooting Checklist

- [ ] GSC property verified
- [ ] Sitemap submitted
- [ ] Robots.txt accessible
- [ ] No indexing errors
- [ ] Mobile usability: No issues
- [ ] Core Web Vitals: All green
- [ ] Structured data: All valid
- [ ] Meta descriptions: 50-160 characters
- [ ] Title tags: Optimized
- [ ] Images: Alt text added
- [ ] Internal links: Proper structure
- [ ] External links: Quality sources

---

## Next Steps

1. **This week:** Set up GSC and verify property
2. **Next week:** Submit sitemap and request indexing
3. **Week 3:** Create baseline report
4. **Week 4:** Plan optimization strategy

---

*Last Updated: June 4, 2026*
*Next Review: July 4, 2026*
*Monitoring Period: Ongoing*
