/**
 * Accessibility Utilities
 * Ensures WCAG 2.1 AA compliance across the website
 */

/**
 * Check color contrast ratio between two colors
 * Returns true if contrast meets WCAG AA standards (4.5:1 for text)
 */
export const checkColorContrast = (foreground: string, background: string): boolean => {
  const getLuminance = (color: string): number => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance <= 0.03928 ? luminance / 12.92 : Math.pow((luminance + 0.055) / 1.055, 2.4);
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  const contrast = (lighter + 0.05) / (darker + 0.05);
  return contrast >= 4.5; // WCAG AA standard for normal text
};

/**
 * Add ARIA labels to interactive elements
 */
export const addAriaLabel = (element: HTMLElement, label: string): void => {
  element.setAttribute('aria-label', label);
};

/**
 * Announce dynamic content changes to screen readers
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only'; // Visually hidden but accessible to screen readers
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    announcement.remove();
  }, 1000);
};

/**
 * Ensure keyboard navigation support
 */
export const makeKeyboardAccessible = (element: HTMLElement, callback: () => void): void => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  });
};

/**
 * Focus management for modals and dialogs
 */
export const manageFocus = (container: HTMLElement, returnFocus?: HTMLElement): (() => void) => {
  const previouslyFocused = document.activeElement as HTMLElement;
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  firstElement?.focus();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
    (returnFocus || previouslyFocused)?.focus();
  };
};

/**
 * Skip to main content link for keyboard navigation
 */
export const createSkipLink = (): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
  `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  return skipLink;
};

/**
 * Validate form accessibility
 */
export const validateFormAccessibility = (form: HTMLFormElement): string[] => {
  const errors: string[] = [];
  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach((input) => {
    const inputElement = input as HTMLInputElement;

    // Check for associated label
    const label = form.querySelector(`label[for="${inputElement.id}"]`);
    if (!label && !inputElement.getAttribute('aria-label')) {
      errors.push(`Input ${inputElement.name || inputElement.id} missing label or aria-label`);
    }

    // Check for required attribute
    if (inputElement.required && !inputElement.getAttribute('aria-required')) {
      inputElement.setAttribute('aria-required', 'true');
    }
  });

  return errors;
};

/**
 * Ensure images have alt text
 */
export const validateImageAccessibility = (): string[] => {
  const errors: string[] = [];
  const images = document.querySelectorAll('img');

  images.forEach((img) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      errors.push(`Image ${img.src} missing alt text or aria-label`);
    }
  });

  return errors;
};

/**
 * Reduce motion support for users with vestibular disorders
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * High contrast mode support
 */
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: more)').matches;
};

/**
 * Dark mode preference
 */
export const prefersDarkMode = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
