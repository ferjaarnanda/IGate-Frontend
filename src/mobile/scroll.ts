import Lenis from 'lenis';

/**
 * SCROLL_GAP_MOBILE:
 * Jarak ekstra (dalam px) antara bagian bawah navbar mobile yang fixed
 * dan bagian paling atas dari bounding box kartu target (About, Ticket, dll).
 */
export const SCROLL_GAP_MOBILE = 36;

let mobileLenisInstance: Lenis | null = null;

export function initMobileLenis(): Lenis {
  if (mobileLenisInstance) {
    return mobileLenisInstance;
  }

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null as any;
  }

  const lenis = new Lenis({
    duration: 1.0,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  mobileLenisInstance = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // Store cleanup helper
  (lenis as any)._cleanup = () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    mobileLenisInstance = null;
  };

  return lenis;
}

export function getMobileLenis(): Lenis | null {
  return mobileLenisInstance;
}

export function destroyMobileLenis(): void {
  if (mobileLenisInstance && (mobileLenisInstance as any)._cleanup) {
    (mobileLenisInstance as any)._cleanup();
  }
  mobileLenisInstance = null;
}

/**
 * Resolves the destination element based on section id:
 * - 'about' -> '#about-card' (the wrapper representing the topmost edge of the card bounding box)
 * - 'ticket' -> '#ticket-card' (the wrapper representing the topmost edge of the ticket card visual)
 * - 'hero' -> '#hero'
 */
export function getTargetElement(id: string): HTMLElement | null {
  const cleanId = id.replace('#', '');
  if (cleanId === 'about') {
    return document.getElementById('about-card') || document.getElementById('about');
  }
  if (cleanId === 'ticket') {
    return document.getElementById('ticket-card') || document.getElementById('ticket');
  }
  if (cleanId === 'hero') {
    return document.getElementById('hero');
  }
  return document.getElementById(cleanId);
}

/**
 * Unified scroll-to-section function for mobile.
 * Used by navbar, footer, CTA buttons, and any other links in mobile.
 */
export function scrollToMobile(
  e: React.MouseEvent | Event | null,
  targetId: string,
  onFinished?: () => void
): void {
  if (e && 'preventDefault' in e) {
    e.preventDefault();
  }

  const cleanId = targetId.replace('#', '');

  // Special case: Home / Hero -> scroll to 0
  if (cleanId === 'hero' || cleanId === 'home') {
    const lenis = getMobileLenis();
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 0.8,
        onComplete: () => {
          if (window.scrollY > 2) {
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
          }
          if (onFinished) onFinished();
        },
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        if (onFinished) onFinished();
      }, 500);
    }
    return;
  }

  const targetEl = getTargetElement(cleanId);
  if (!targetEl) return;

  const nav = document.getElementById('navbar');
  const navHeight = nav ? nav.getBoundingClientRect().height : 70;
  const targetOffset = navHeight + SCROLL_GAP_MOBILE; // Card top should be navbarHeight + SCROLL_GAP_MOBILE (36px)

  const lenis = getMobileLenis();

  function performScroll(attempt = 0) {
    const currentTop = targetEl!.getBoundingClientRect().top;
    const diff = currentTop - targetOffset;

    if (Math.abs(diff) <= 2 && attempt > 0) {
      if (onFinished) onFinished();
      return;
    }

    if (lenis) {
      // Lenis offset is negative of the desired distance from top
      lenis.scrollTo(targetEl!, {
        offset: -targetOffset,
        duration: attempt === 0 ? 0.9 : 0.3,
        immediate: attempt > 1,
        onComplete: () => {
          // Verification
          const newTop = targetEl!.getBoundingClientRect().top;
          const newDiff = Math.abs(newTop - targetOffset);
          if (newDiff > 2 && attempt < 3) {
            // Readjust scroll position
            performScroll(attempt + 1);
          } else {
            if (onFinished) onFinished();
          }
        },
      });
    } else {
      // Fallback without Lenis
      const scrollY = window.pageYOffset + diff;
      window.scrollTo({
        top: Math.max(0, scrollY),
        behavior: attempt === 0 ? 'smooth' : 'auto',
      });

      setTimeout(() => {
        const newTop = targetEl!.getBoundingClientRect().top;
        const newDiff = Math.abs(newTop - targetOffset);
        if (newDiff > 2 && attempt < 3) {
          performScroll(attempt + 1);
        } else {
          if (onFinished) onFinished();
        }
      }, attempt === 0 ? 800 : 200);
    }
  }

  performScroll(0);
}
