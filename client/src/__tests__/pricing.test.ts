import { describe, it, expect } from "vitest";
import {
  pricingCategories,
  pricingPackages,
  pricingAddOns,
  pricingNotes,
} from "@/data/pricingData";

describe("Pricing Data Structure", () => {
  describe("Pricing Categories", () => {
    it("should have 5 pricing categories", () => {
      expect(pricingCategories).toHaveLength(5);
    });

    it("should have correct category IDs", () => {
      const categoryIds = pricingCategories.map((c) => c.id);
      expect(categoryIds).toEqual([
        "hair-coloring",
        "cuts-styling",
        "hair-extensions",
        "bridal-services",
        "specialty-services",
      ]);
    });

    it("each category should have name, description, icon, and services", () => {
      pricingCategories.forEach((category) => {
        expect(category.name).toBeTruthy();
        expect(category.description).toBeTruthy();
        expect(category.icon).toBeTruthy();
        expect(Array.isArray(category.services)).toBe(true);
        expect(category.services.length).toBeGreaterThan(0);
      });
    });

    it("each service should have required fields", () => {
      pricingCategories.forEach((category) => {
        category.services.forEach((service) => {
          expect(service.id).toBeTruthy();
          expect(service.name).toBeTruthy();
          expect(service.description).toBeTruthy();
          expect(typeof service.basePrice).toBe("number");
          expect(service.duration).toBeTruthy();
        });
      });
    });

    it("should have pricing details for services", () => {
      const servicesWithDetails = pricingCategories.flatMap((c) =>
        c.services.filter((s) => s.details && s.details.length > 0)
      );
      expect(servicesWithDetails.length).toBeGreaterThan(0);
    });
  });

  describe("Pricing Packages", () => {
    it("should have 4 pricing packages", () => {
      expect(pricingPackages).toHaveLength(4);
    });

    it("should have one popular package", () => {
      const popularPackages = pricingPackages.filter((p) => p.popular);
      expect(popularPackages).toHaveLength(1);
    });

    it("each package should have required fields", () => {
      pricingPackages.forEach((pkg) => {
        expect(pkg.id).toBeTruthy();
        expect(pkg.name).toBeTruthy();
        expect(pkg.description).toBeTruthy();
        expect(typeof pkg.price).toBe("number");
        expect(Array.isArray(pkg.includes)).toBe(true);
        expect(pkg.includes.length).toBeGreaterThan(0);
      });
    });

    it("packages with savings should have originalPrice", () => {
      pricingPackages.forEach((pkg) => {
        if (pkg.savings) {
          expect(pkg.originalPrice).toBeTruthy();
          expect(pkg.originalPrice).toBeGreaterThan(pkg.price);
        }
      });
    });

    it("popular package should be bridal experience", () => {
      const popularPackage = pricingPackages.find((p) => p.popular);
      expect(popularPackage?.id).toBe("hello-beauty-bridal-experience");
    });

    it("each package should include at least 4 items", () => {
      pricingPackages.forEach((pkg) => {
        expect(pkg.includes.length).toBeGreaterThanOrEqual(4);
      });
    });
  });

  describe("Add-On Services", () => {
    it("should have 6 add-on services", () => {
      expect(pricingAddOns).toHaveLength(6);
    });

    it("each add-on should have required fields", () => {
      pricingAddOns.forEach((addOn) => {
        expect(addOn.id).toBeTruthy();
        expect(addOn.name).toBeTruthy();
        expect(addOn.description).toBeTruthy();
        expect(typeof addOn.price).toBe("number");
        expect(addOn.price).toBeGreaterThan(0);
      });
    });

    it("add-on prices should be reasonable", () => {
      pricingAddOns.forEach((addOn) => {
        expect(addOn.price).toBeLessThan(200);
      });
    });
  });

  describe("Pricing Notes", () => {
    it("should have pricing notes", () => {
      expect(Array.isArray(pricingNotes)).toBe(true);
      expect(pricingNotes.length).toBeGreaterThan(0);
    });

    it("should have at least 5 pricing notes", () => {
      expect(pricingNotes.length).toBeGreaterThanOrEqual(5);
    });

    it("each note should be a non-empty string", () => {
      pricingNotes.forEach((note) => {
        expect(typeof note).toBe("string");
        expect(note.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Service Pricing Consistency", () => {
    it("should have consistent pricing for hair coloring services", () => {
      const coloringCategory = pricingCategories.find(
        (c) => c.id === "hair-coloring"
      );
      const fullColor = coloringCategory?.services.find(
        (s) => s.id === "full-color"
      );
      const balayage = coloringCategory?.services.find(
        (s) => s.id === "balayage"
      );

      expect(fullColor?.basePrice).toBeLessThan(balayage?.basePrice || 0);
    });

    it("should have bridal services with appropriate pricing", () => {
      const bridalCategory = pricingCategories.find(
        (c) => c.id === "bridal-services"
      );
      const bridalTrial = bridalCategory?.services.find(
        (s) => s.id === "bridal-trial"
      );
      const bridalDayOf = bridalCategory?.services.find(
        (s) => s.id === "bridal-day-of"
      );

      expect(bridalTrial?.basePrice).toBe(150);
      expect(bridalDayOf?.basePrice).toBe(160);
    });

    it("should have extension services with higher pricing", () => {
      const extensionCategory = pricingCategories.find(
        (c) => c.id === "hair-extensions"
      );
      const extensionInstall = extensionCategory?.services.find(
        (s) => s.id === "extension-install"
      );

      expect(extensionInstall?.basePrice).toBe(300);
    });
  });

  describe("Package Value Proposition", () => {
    it("bridal experience package should offer savings", () => {
      const bridalPackage = pricingPackages.find(
        (p) => p.id === "hello-beauty-bridal-experience"
      );
      expect(bridalPackage?.savings).toBe(95);
      expect(bridalPackage?.price).toBe(450);
    });

    it("bridal party package should be most expensive", () => {
      const bridalPartyPackage = pricingPackages.find(
        (p) => p.id === "bridal-party-package"
      );
      const maxPrice = Math.max(...pricingPackages.map((p) => p.price));
      expect(bridalPartyPackage?.price).toBe(maxPrice);
    });

    it("all packages should have positive savings", () => {
      pricingPackages.forEach((pkg) => {
        if (pkg.savings) {
          expect(pkg.savings).toBeGreaterThan(0);
        }
      });
    });
  });

  describe("Data Integrity", () => {
    it("should have no duplicate service IDs within categories", () => {
      pricingCategories.forEach((category) => {
        const serviceIds = category.services.map((s) => s.id);
        const uniqueIds = new Set(serviceIds);
        expect(serviceIds.length).toBe(uniqueIds.size);
      });
    });

    it("should have no duplicate category IDs", () => {
      const categoryIds = pricingCategories.map((c) => c.id);
      const uniqueIds = new Set(categoryIds);
      expect(categoryIds.length).toBe(uniqueIds.size);
    });

    it("should have no duplicate add-on IDs", () => {
      const addOnIds = pricingAddOns.map((a) => a.id);
      const uniqueIds = new Set(addOnIds);
      expect(addOnIds.length).toBe(uniqueIds.size);
    });

    it("should have no duplicate package IDs", () => {
      const packageIds = pricingPackages.map((p) => p.id);
      const uniqueIds = new Set(packageIds);
      expect(packageIds.length).toBe(uniqueIds.size);
    });
  });
});
