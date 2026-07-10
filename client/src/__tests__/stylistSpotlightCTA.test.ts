import { describe, it, expect } from 'vitest';
import { teamMembers } from '@/data/teamPortfolioData';

describe('Stylist Spotlight CTA Integration', () => {
  describe('Team Member Spotlight Metadata', () => {
    it('should have spotlight data for all 4 stylists', () => {
      const stylistsWithSpotlight = teamMembers.filter(member => member.spotlightSlug);
      expect(stylistsWithSpotlight).toHaveLength(4);
    });

    it('should have unique spotlight slugs', () => {
      const slugs = teamMembers
        .filter(m => m.spotlightSlug)
        .map(m => m.spotlightSlug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('should have spotlight slug for Keltie Cummins', () => {
      const keltie = teamMembers.find(m => m.id === 'keltie-cummins');
      expect(keltie?.spotlightSlug).toBe('stylist-spotlight-keltie-cummins');
    });

    it('should have spotlight slug for Melissa Mitchell', () => {
      const melissa = teamMembers.find(m => m.id === 'melissa-mitchell');
      expect(melissa?.spotlightSlug).toBe('stylist-spotlight-melissa-mitchell');
    });

    it('should have spotlight slug for Tiara Black', () => {
      const tiara = teamMembers.find(m => m.id === 'tiara-black');
      expect(tiara?.spotlightSlug).toBe('stylist-spotlight-tiara-black');
    });

    it('should have spotlight slug for Noon K', () => {
      const noon = teamMembers.find(m => m.id === 'noon-k');
      expect(noon?.spotlightSlug).toBe('stylist-spotlight-noon-k');
    });
  });

  describe('Spotlight Title Metadata', () => {
    it('should have spotlight title for all stylists with spotlight slug', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          expect(member.spotlightTitle).toBeTruthy();
          expect(member.spotlightTitle?.length).toBeGreaterThan(20);
        }
      });
    });

    it('should have descriptive spotlight titles', () => {
      const keltie = teamMembers.find(m => m.id === 'keltie-cummins');
      expect(keltie?.spotlightTitle).toContain('Keltie Cummins');
      expect(keltie?.spotlightTitle).toContain('Balayage');

      const melissa = teamMembers.find(m => m.id === 'melissa-mitchell');
      expect(melissa?.spotlightTitle).toContain('Melissa Mitchell');
      expect(melissa?.spotlightTitle).toContain('Cuts');

      const tiara = teamMembers.find(m => m.id === 'tiara-black');
      expect(tiara?.spotlightTitle).toContain('Tiara Black');
      expect(tiara?.spotlightTitle).toContain('Creative');

      const noon = teamMembers.find(m => m.id === 'noon-k');
      expect(noon?.spotlightTitle).toContain('Noon K');
      expect(noon?.spotlightTitle).toContain('Bridal');
    });
  });

  describe('Spotlight URL Format', () => {
    it('should have valid blog URL format for all spotlight slugs', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          expect(member.spotlightSlug).toMatch(/^stylist-spotlight-/);
          expect(member.spotlightSlug).not.toContain(' ');
          expect(member.spotlightSlug).not.toContain('_');
        }
      });
    });

    it('should have lowercase slugs', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          expect(member.spotlightSlug).toBe(member.spotlightSlug.toLowerCase());
        }
      });
    });
  });

  describe('CTA Button Routing', () => {
    it('should have correct route paths for all spotlights', () => {
      const expectedRoutes = [
        '/blog/stylist-spotlight-keltie-cummins',
        '/blog/stylist-spotlight-melissa-mitchell',
        '/blog/stylist-spotlight-tiara-black',
        '/blog/stylist-spotlight-noon-k'
      ];

      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          const route = `/blog/${member.spotlightSlug}`;
          expect(expectedRoutes).toContain(route);
        }
      });
    });
  });

  describe('Profile Integration', () => {
    it('should have spotlight data for all team members with profiles', () => {
      const profileIds = ['keltie-cummins', 'melissa-mitchell', 'tiara-black', 'noon-k'];
      profileIds.forEach(id => {
        const member = teamMembers.find(m => m.id === id);
        expect(member).toBeDefined();
        expect(member?.spotlightSlug).toBeTruthy();
        expect(member?.spotlightTitle).toBeTruthy();
      });
    });

    it('should have consistent naming between ID and spotlight slug', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          // Extract name from ID and slug to verify consistency
          const idParts = member.id.split('-');
          const slugParts = member.spotlightSlug.split('-');
          
          // Both should reference the same stylist
          expect(member.spotlightSlug).toContain(member.id.split('-').slice(-1)[0]);
        }
      });
    });
  });

  describe('Data Completeness', () => {
    it('should not have orphaned spotlight slugs without titles', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          expect(member.spotlightTitle).toBeTruthy();
        }
        if (member.spotlightTitle) {
          expect(member.spotlightSlug).toBeTruthy();
        }
      });
    });

    it('should have all required fields for CTA rendering', () => {
      teamMembers.forEach(member => {
        if (member.spotlightSlug) {
          expect(member.name).toBeTruthy();
          expect(member.image).toBeTruthy();
          expect(member.instagram).toBeTruthy();
        }
      });
    });
  });
});
