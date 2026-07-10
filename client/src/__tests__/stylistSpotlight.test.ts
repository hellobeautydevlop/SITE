import { describe, it, expect } from 'vitest';
import { stylistSpotlights } from '@/const/stylistSpotlightData';
import { blogPosts } from '@/const/blogData';

describe('Stylist Spotlight Blog Posts', () => {
  describe('Data Structure', () => {
    it('should have 4 stylist spotlight posts', () => {
      expect(stylistSpotlights).toHaveLength(4);
    });

    it('should have correct stylist names', () => {
      const names = stylistSpotlights.map(s => s.stylistName);
      expect(names).toContain('Keltie Cummins');
      expect(names).toContain('Melissa Mitchell');
      expect(names).toContain('Tiara Black');
      expect(names).toContain('Noon K');
    });

    it('should have unique slugs', () => {
      const slugs = stylistSpotlights.map(s => s.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('should have unique IDs', () => {
      const ids = stylistSpotlights.map(s => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should all have category "Stylist Spotlight"', () => {
      stylistSpotlights.forEach(post => {
        expect(post.category).toBe('Stylist Spotlight');
      });
    });
  });

  describe('Post Content', () => {
    it('should have title for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.title).toBeTruthy();
        expect(post.title.length).toBeGreaterThan(10);
      });
    });

    it('should have excerpt for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.excerpt).toBeTruthy();
        expect(post.excerpt.length).toBeGreaterThan(20);
      });
    });

    it('should have substantial content for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.content).toBeTruthy();
        expect(post.content.length).toBeGreaterThan(1000);
      });
    });

    it('should have read time for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.readTime).toBeTruthy();
        expect(post.readTime).toMatch(/\d+ min read/);
      });
    });

    it('should have author for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.author).toBeTruthy();
        expect(post.author).toBe('Hello Beauty Lounge');
      });
    });

    it('should have date for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.date).toBeTruthy();
        expect(post.date).toMatch(/\w+ \d+, \d{4}/);
      });
    });
  });

  describe('Stylist-Specific Content', () => {
    it('Keltie post should mention balayage and color', () => {
      const keltie = stylistSpotlights.find(s => s.stylistName === 'Keltie Cummins');
      expect(keltie).toBeDefined();
      expect(keltie?.content.toLowerCase()).toContain('balayage');
      expect(keltie?.content.toLowerCase()).toContain('color');
    });

    it('Melissa post should mention cuts and styling', () => {
      const melissa = stylistSpotlights.find(s => s.stylistName === 'Melissa Mitchell');
      expect(melissa).toBeDefined();
      expect(melissa?.content.toLowerCase()).toContain('cut');
      expect(melissa?.content.toLowerCase()).toContain('styling');
    });

    it('Tiara post should mention creative color', () => {
      const tiara = stylistSpotlights.find(s => s.stylistName === 'Tiara Black');
      expect(tiara).toBeDefined();
      expect(tiara?.content.toLowerCase()).toContain('color');
      expect(tiara?.content.toLowerCase()).toContain('creative');
    });

    it('Noon post should mention bridal hair', () => {
      const noon = stylistSpotlights.find(s => s.stylistName === 'Noon K');
      expect(noon).toBeDefined();
      expect(noon?.content.toLowerCase()).toContain('bridal');
    });
  });

  describe('Blog Integration', () => {
    it('should not conflict with existing blog posts', () => {
      const blogSlugs = blogPosts.map(p => p.slug);
      const spotlightSlugs = stylistSpotlights.map(s => s.slug);
      
      const conflicts = spotlightSlugs.filter(slug => blogSlugs.includes(slug));
      expect(conflicts).toHaveLength(0);
    });

    it('should have proper slug format', () => {
      stylistSpotlights.forEach(post => {
        expect(post.slug).toMatch(/^stylist-spotlight-/);
      });
    });

    it('should have proper ID format', () => {
      stylistSpotlights.forEach(post => {
        expect(post.id).toMatch(/^spotlight-/);
      });
    });
  });

  describe('Stylist Profile Information', () => {
    it('should have stylist role for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.stylistRole).toBeTruthy();
        expect(post.stylistRole.length).toBeGreaterThan(5);
      });
    });

    it('should have stylist image path for each post', () => {
      stylistSpotlights.forEach(post => {
        expect(post.stylistImage).toBeTruthy();
        expect(post.stylistImage).toMatch(/^\/manus-storage\//);
      });
    });

    it('should have correct role descriptions', () => {
      const roles = {
        'Keltie Cummins': 'Master Colorist & Hair Specialist',
        'Melissa Mitchell': 'Master Stylist & Cuts Specialist',
        'Tiara Black': 'Creative Colorist & Stylist',
        'Noon K': 'Senior Stylist & Bridal Specialist'
      };

      stylistSpotlights.forEach(post => {
        expect(roles[post.stylistName as keyof typeof roles]).toBe(post.stylistRole);
      });
    });
  });

  describe('Content Quality', () => {
    it('should have headings in content', () => {
      stylistSpotlights.forEach(post => {
        expect(post.content).toMatch(/^#/m);
      });
    });

    it('should have multiple sections', () => {
      stylistSpotlights.forEach(post => {
        const headingCount = (post.content.match(/^##/gm) || []).length;
        expect(headingCount).toBeGreaterThan(3);
      });
    });

    it('should mention Kevin Murphy products', () => {
      // Keltie, Melissa, and Tiara mention Kevin Murphy
      const kevinMurphyPosts = stylistSpotlights.filter(s => 
        ['Keltie Cummins', 'Melissa Mitchell', 'Tiara Black'].includes(s.stylistName)
      );
      kevinMurphyPosts.forEach(post => {
        expect(post.content).toContain('Kevin Murphy');
      });
    });

    it('should have booking/CTA information', () => {
      stylistSpotlights.forEach(post => {
        const hasBooking = post.content.includes('Book') || post.content.includes('Appointment');
        expect(hasBooking).toBe(true);
      });
    });
  });
});
