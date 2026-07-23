import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  offset?: number; // Parallax offset multiplier (0-1, where 1 is no parallax)
  speed?: number; // Speed of parallax effect (default 0.5)
}

/**
 * useParallax Hook
 * Creates a parallax scrolling effect where elements move at different speeds
 * based on scroll position, creating depth and visual interest
 */
export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      // Get element position relative to viewport
      const elementRect = ref.current.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset based on scroll position
      // Only apply parallax when element is in view
      if (elementTop < windowHeight && elementTop > -elementRect.height) {
        const scrolled = window.scrollY;
        const parallaxOffset = scrolled * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * useTextReveal Hook
 * Creates a text reveal animation where text fades in and slides up
 * as it scrolls into view
 */
export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after animation completes
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}
