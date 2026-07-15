import { describe, it, expect } from "vitest";
import { teamMembers } from "@/data/teamPortfolioData";
import { testimonials } from "@/data/testimonialsData";

describe("Melissa Reviews Page", () => {
  // Setup
  const melissa = teamMembers.find(member => member.id === "melissa-mitchell");
  const melissaTestimonials = testimonials.filter(t => 
    t.clientName === "Jessica Chen" || t.clientName === "Lauren Brooks"
  );

  describe("Data Structure", () => {
    it("should find Melissa in team members", () => {
      expect(melissa).toBeDefined();
      expect(melissa?.name).toBe("Melissa Mitchell");
    });

    it("should have correct Melissa profile data", () => {
      expect(melissa?.title).toBe("Master Stylist & Cuts Specialist");
      expect(melissa?.specialties).toContain("Precision Cuts");
      expect(melissa?.specialties).toContain("Styling");
      expect(melissa?.rating).toBe(5);
      expect(melissa?.reviews).toBeGreaterThan(0);
    });

    it("should have Melissa's bio", () => {
      expect(melissa?.bio).toBeDefined();
      expect(melissa?.bio.length).toBeGreaterThan(50);
    });

    it("should have Melissa's Instagram handle", () => {
      expect(melissa?.instagramHandle).toBeDefined();
      expect(melissa?.instagramHandle).toMatch(/^@?[\w.]+$/);
    });
  });

  describe("Testimonials Data", () => {
    it("should find at least 2 testimonials mentioning Melissa", () => {
      expect(melissaTestimonials.length).toBeGreaterThanOrEqual(2);
    });

    it("should have Jessica Chen's balayage review", () => {
      const jessicaReview = melissaTestimonials.find(t => t.clientName === "Jessica Chen");
      expect(jessicaReview).toBeDefined();
      expect(jessicaReview?.service).toBe("Custom Balayage");
      expect(jessicaReview?.rating).toBe(5);
      expect(jessicaReview?.review).toContain("Melissa");
    });

    it("should have Lauren Brooks' precision cut review", () => {
      const laurenReview = melissaTestimonials.find(t => t.clientName === "Lauren Brooks");
      expect(laurenReview).toBeDefined();
      expect(laurenReview?.service).toBe("Precision Haircut & Styling");
      expect(laurenReview?.rating).toBe(5);
      expect(laurenReview?.review).toContain("Melissa");
    });

    it("should have verified testimonials", () => {
      melissaTestimonials.forEach(testimonial => {
        expect(testimonial.verified).toBe(true);
      });
    });

    it("should have testimonial images", () => {
      melissaTestimonials.forEach(testimonial => {
        expect(testimonial.imageUrl).toBeDefined();
        expect(testimonial.imageUrl).toMatch(/\.(jpg|png|webp)$/i);
      });
    });

    it("should have testimonial dates", () => {
      melissaTestimonials.forEach(testimonial => {
        expect(testimonial.date).toBeDefined();
        expect(testimonial.date).toMatch(/\d{4}$/);
      });
    });
  });

  describe("Review Content Quality", () => {
    it("should have detailed review text", () => {
      melissaTestimonials.forEach(testimonial => {
        expect(testimonial.review.length).toBeGreaterThan(100);
      });
    });

    it("should mention Melissa's expertise", () => {
      const jessicaReview = melissaTestimonials.find(t => t.clientName === "Jessica Chen");
      expect(jessicaReview?.review).toMatch(/balayage|color|expertise/i);
    });

    it("should mention precision and styling", () => {
      const laurenReview = melissaTestimonials.find(t => t.clientName === "Lauren Brooks");
      expect(laurenReview?.review).toMatch(/precision|haircut|styling/i);
    });

    it("should have positive language in reviews", () => {
      melissaTestimonials.forEach(testimonial => {
        const positiveWords = ["perfect", "incredible", "love", "amazing", "nailed", "best"];
        const hasPositiveLanguage = positiveWords.some(word => 
          testimonial.review.toLowerCase().includes(word)
        );
        expect(hasPositiveLanguage).toBe(true);
      });
    });
  });

  describe("Melissa's Specialties", () => {
    it("should include precision cuts specialty", () => {
      expect(melissa?.specialties).toContain("Precision Cuts");
    });

    it("should include color specialty", () => {
      expect(melissa?.specialties).toContain("Color");
    });

    it("should include styling specialty", () => {
      expect(melissa?.specialties).toContain("Styling");
    });

    it("should have at least 3 specialties", () => {
      expect(melissa?.specialties.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("Profile Image", () => {
    it("should have profile image URL", () => {
      expect(melissa?.image).toBeDefined();
      expect(melissa?.image).toMatch(/\.(jpg|png|webp)$/i);
    });

    it("should have valid S3 storage path", () => {
      expect(melissa?.image).toMatch(/manus-storage|cloudfront/i);
    });
  });

  describe("Instagram Integration", () => {
    it("should have Instagram handle", () => {
      expect(melissa?.instagramHandle).toBeDefined();
      expect(melissa?.instagramHandle.length).toBeGreaterThan(0);
    });

    it("should have Instagram profile URL", () => {
      expect(melissa?.instagram).toBeDefined();
      expect(melissa?.instagram).toMatch(/instagram\.com/);
    });

    it("should have portfolio posts", () => {
      expect(melissa?.portfolio).toBeDefined();
      expect(melissa?.portfolio.length).toBeGreaterThan(0);
    });

    it("should have portfolio posts with images", () => {
      melissa?.portfolio.forEach(post => {
        expect(post.image).toBeDefined();
        expect(post.image).toMatch(/\.(jpg|png|webp)$/i);
      });
    });

    it("should have portfolio posts with captions", () => {
      melissa?.portfolio.forEach(post => {
        expect(post.caption).toBeDefined();
        expect(post.caption.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Spotlight Integration", () => {
    it("should have spotlight slug", () => {
      expect(melissa?.spotlightSlug).toBeDefined();
      expect(melissa?.spotlightSlug).toMatch(/stylist-spotlight-melissa/);
    });

    it("should have spotlight title", () => {
      expect(melissa?.spotlightTitle).toBeDefined();
      expect(melissa?.spotlightTitle).toContain("Melissa");
    });
  });

  describe("Rating and Reviews Count", () => {
    it("should have 5-star rating", () => {
      expect(melissa?.rating).toBe(5);
    });

    it("should have review count", () => {
      expect(melissa?.reviews).toBeGreaterThan(0);
    });

    it("should have reasonable review count", () => {
      expect(melissa?.reviews).toBeGreaterThanOrEqual(10);
    });
  });
});
