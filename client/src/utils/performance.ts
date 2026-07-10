/**
 * Performance Optimization Utilities
 * Handles lazy loading, image optimization, and performance monitoring
 */

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Prefetch resources for faster navigation
 */
export const prefetchResource = (url: string, type: 'script' | 'style' | 'image' = 'script') => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  if (type === 'script') link.as = 'script';
  if (type === 'style') link.as = 'style';
  if (type === 'image') link.as = 'image';
  document.head.appendChild(link);
};

/**
 * Preload critical resources
 */
export const preloadResource = (url: string, type: 'script' | 'style' | 'font' = 'script') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  if (type === 'script') link.as = 'script';
  if (type === 'style') link.as = 'style';
  if (type === 'font') {
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

/**
 * Optimize image for web delivery
 */
export const getOptimizedImageUrl = (url: string, width: number, quality: number = 80): string => {
  // If using a CDN with image optimization, apply transformations
  if (url.includes('manus-storage')) {
    return `${url}?w=${width}&q=${quality}&auto=format`;
  }
  return url;
};

/**
 * Monitor Core Web Vitals
 */
export const monitorWebVitals = () => {
  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }

    // First Input Delay (FID) / Interaction to Next Paint (INP)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          console.log('FID:', entry.processingDuration);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }

    // Cumulative Layout Shift (CLS)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
  }
};

/**
 * Debounce function for performance-sensitive operations
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for high-frequency events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
