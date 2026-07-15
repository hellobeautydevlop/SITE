import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * AutoScrollToTop Component
 * Automatically scrolls to the top of the page when the route changes
 * This ensures users always see the top of the page when navigating
 */
export default function AutoScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use instant for immediate scroll on page change
    });
  }, [location]);

  // This component doesn't render anything
  return null;
}
