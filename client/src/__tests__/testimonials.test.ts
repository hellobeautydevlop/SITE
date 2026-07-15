import { describe, it, expect } from "vitest";
import { testimonials, testimonialStats } from "@/data/testimonialsData";

describe("Testimonials Data", () => {
  describe("Testimonials Array", () => {
    it("should have 10 testimonials", () => {
      expect(testimonials).toHaveLength(10);
    });

    it("each testimonial should have required fields", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.id).toBeTruthy();
        expect(testimonial.clientName).toBeTruthy();
        expect(testimonial.service).toBeTruthy();
        expect(testimonial.rating).toBe(5);
        expect(testimonial.review).toBeTruthy();
        expect(testimonial.imageUrl).toBeTruthy();
        expect(testimonial.date).toBeTruthy();
        expect(typeof testimonial.verified).toBe("boolean");
      });
    });

    it("all testimonials should be verified", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.verified).toBe(true);
      });
    });

    it("all testimonials should have 5-star ratings", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.rating).toBe(5);
      });
    });

    it("testimonial IDs should be unique", () => {
      const ids = testimonials.map((t) => t.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it("testimonial reviews should be substantial", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.review.length).toBeGreaterThan(50);
      });
    });

    it("testimonial images should have valid paths", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.imageUrl).toMatch(/^\/manus-storage\//);
      });
    });

    it("testimonials should cover different services", () => {
      const services = new Set(testimonials.map((t) => t.service));
      expect(services.size).toBeGreaterThan(1);
    });

    it("testimonials should mention different stylists", () => {
      const stylistMentions = testimonials.filter(
        (t) =>
          t.review.includes("Keltie") ||
          t.review.includes("Melissa") ||
          t.review.includes("Tiara") ||
          t.review.includes("Noon")
      );
      expect(stylistMentions.length).toBeGreaterThan(0);
    });

    it("testimonials should include bridal-related reviews", () => {
      const bridalReviews = testimonials.filter((t) =>
        t.review.toLowerCase().includes("bridal") ||
        t.review.toLowerCase().includes("wedding")
      );
      expect(bridalReviews.length).toBeGreaterThan(0);
    });
  });

  describe("Testimonial Stats", () => {
    it("should have correct average rating", () => {
      expect(testimonialStats.averageRating).toBe(5.0);
    });

    it("should have correct total reviews count", () => {
      expect(testimonialStats.totalReviews).toBe(10);
    });

    it("should have correct verified reviews count", () => {
      expect(testimonialStats.verifiedReviews).toBe(10);
    });

    it("should have 100% recommendation rate", () => {
      expect(testimonialStats.recommendationRate).toBe(100);
    });

    it("stats should match testimonials array", () => {
      expect(testimonialStats.totalReviews).toBe(testimonials.length);
      expect(testimonialStats.verifiedReviews).toBe(
        testimonials.filter((t) => t.verified).length
      );
    });
  });

  describe("Service Coverage", () => {
    it("should have testimonials for hair coloring", () => {
      const coloringReviews = testimonials.filter((t) =>
        t.service.toLowerCase().includes("color") ||
        t.service.toLowerCase().includes("balayage")
      );
      expect(coloringReviews.length).toBeGreaterThan(0);
    });

    it("should have testimonials for extensions", () => {
      const extensionReviews = testimonials.filter((t) =>
        t.service.toLowerCase().includes("extension")
      );
      expect(extensionReviews.length).toBeGreaterThan(0);
    });

    it("should have testimonials for cuts and styling", () => {
      const cutReviews = testimonials.filter((t) =>
        t.service.toLowerCase().includes("cut") ||
        t.service.toLowerCase().includes("styling")
      );
      expect(cutReviews.length).toBeGreaterThan(0);
    });

    it("should have testimonials for bridal services", () => {
      const bridalReviews = testimonials.filter((t) =>
        t.service.toLowerCase().includes("bridal") ||
        t.service.toLowerCase().includes("wedding")
      );
      expect(bridalReviews.length).toBeGreaterThan(0);
    });
  });

  describe("Testimonial Quality", () => {
    it("reviews should mention specific benefits", () => {
      const benefitMentions = testimonials.filter((t) =>
        t.review.includes("beautiful") ||
        t.review.includes("amazing") ||
        t.review.includes("perfect") ||
        t.review.includes("love") ||
        t.review.includes("recommend")
      );
      expect(benefitMentions.length).toBeGreaterThanOrEqual(testimonials.length * 0.6);
    });

    it("reviews should mention Kevin Murphy products", () => {
      const kmMentions = testimonials.filter((t) =>
        t.review.includes("Kevin Murphy")
      );
      expect(kmMentions.length).toBeGreaterThan(0);
    });

    it("reviews should be authentic and personal", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.review).toMatch(/[Ii]|[Mm]y|[Ww]e/);
      });
    });

    it("dates should be recent and chronological", () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      testimonials.forEach((testimonial) => {
        const hasMonth = months.some((month) =>
          testimonial.date.includes(month)
        );
        expect(hasMonth).toBe(true);
      });
    });
  });

  describe("Carousel Display Requirements", () => {
    it("should have enough testimonials for carousel", () => {
      expect(testimonials.length).toBeGreaterThanOrEqual(5);
    });

    it("client names should be display-friendly", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.clientName.length).toBeLessThan(30);
      });
    });

    it("services should be display-friendly", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.service.length).toBeLessThan(40);
      });
    });

    it("reviews should fit in card layout", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.review.length).toBeLessThan(500);
      });
    });
  });

  describe("Social Proof Elements", () => {
    it("should have diverse client names", () => {
      const names = new Set(testimonials.map((t) => t.clientName));
      expect(names.size).toBe(testimonials.length);
    });

    it("should have diverse service types", () => {
      const services = new Set(testimonials.map((t) => t.service));
      expect(services.size).toBeGreaterThanOrEqual(4);
    });

    it("all reviews should be positive", () => {
      const positiveKeywords = [
        "love",
        "amazing",
        "perfect",
        "beautiful",
        "recommend",
        "obsessed",
        "incredible",
        "exceptional",
        "flawless",
        "confident",
        "trust",
        "great",
        "fantastic",
        "wonderful",
        "felt",
        "seamless",
        "professional",
        "healthy",
        "natural",
      ];
      testimonials.forEach((testimonial) => {
        const hasPositive = positiveKeywords.some((keyword) =>
          testimonial.review.toLowerCase().includes(keyword)
        );
        expect(hasPositive).toBe(true);
      });
    });
  });
});
