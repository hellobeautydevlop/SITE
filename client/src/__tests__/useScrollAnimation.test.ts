import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

describe('useScrollAnimation Hook', () => {
  let mockIntersectionObserver: any;
  let observerCallback: IntersectionObserverCallback;

  beforeEach(() => {
    // Mock IntersectionObserver
    mockIntersectionObserver = vi.fn((callback: IntersectionObserverCallback) => {
      observerCallback = callback;
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    window.IntersectionObserver = mockIntersectionObserver as any;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return ref and isVisible state', () => {
    const { result } = renderHook(() => useScrollAnimation());
    
    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('isVisible');
    expect(result.current.isVisible).toBe(false);
  });

  it('should set isVisible to true when element intersects', () => {
    const { result, rerender } = renderHook(() => useScrollAnimation());
    
    // Simulate intersection
    observerCallback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );

    rerender();
    expect(result.current.isVisible).toBe(true);
  });

  it('should set isVisible to false when element leaves viewport (triggerOnce: false)', () => {
    const { result, rerender } = renderHook(() => 
      useScrollAnimation({ triggerOnce: false })
    );
    
    // Simulate intersection
    observerCallback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
    rerender();
    expect(result.current.isVisible).toBe(true);

    // Simulate leaving viewport
    observerCallback(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
    rerender();
    expect(result.current.isVisible).toBe(false);
  });

  it('should respect prefers-reduced-motion preference', () => {
    // Mock matchMedia for prefers-reduced-motion
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useScrollAnimation());
    
    // When prefers-reduced-motion is enabled, isVisible should be true immediately
    expect(result.current.isVisible).toBe(true);
  });

  it('should accept custom threshold option', () => {
    renderHook(() => useScrollAnimation({ threshold: 0.5 }));
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5,
      })
    );
  });

  it('should accept custom rootMargin option', () => {
    renderHook(() => useScrollAnimation({ rootMargin: '100px' }));
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        rootMargin: '100px',
      })
    );
  });

  it('should use default options when not provided', () => {
    renderHook(() => useScrollAnimation());
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      })
    );
  });
});
