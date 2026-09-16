/**
 * Precise Smooth Scroll Utility with Dynamic Sticky Header Offset & Visual Content Framing
 */

export const getNavbarHeight = (): number => {
  if (typeof document === 'undefined') return 84;
  const nav = document.getElementById('main-navigation');
  if (nav) {
    const rect = nav.getBoundingClientRect();
    if (rect.height > 0) return Math.round(rect.height);
  }
  return 84;
};

/**
 * Calculates the exact scroll Y position for a target section or card,
 * adjusting for the sticky navigation header and container padding
 * so that the actual visual card / heading frames neatly below the navbar.
 */
export const getTargetScrollPosition = (
  targetId: string,
  options?: { extraOffset?: number }
): number | null => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;

  if (targetId === 'hero-section' || targetId === 'top' || targetId === 'home') {
    return 0;
  }

  let element = document.getElementById(targetId);
  if (!element) {
    const idMap: Record<string, string> = {
      services: 'services-section',
      'services-section': 'services',
      about: 'about-section',
      'about-section': 'about',
      'case-studies': 'experience-section',
      'experience-section': 'case-studies',
      contact: 'contact-section',
      'contact-section': 'contact',
    };
    const altId = idMap[targetId];
    if (altId) {
      element = document.getElementById(altId);
    }
  }

  if (!element) return null;

  const navHeight = getNavbarHeight();
  const extraOffset = options?.extraOffset ?? 0;

  // Find the primary visual content container or card inside the section
  // to avoid stopping at the outer section wrapper's top padding (py-16 / py-24).
  let targetVisualElement: HTMLElement = element;

  // Look for the inner max-w-7xl wrapper or primary prominent card inside the section
  const contentWrapper =
    element.querySelector<HTMLElement>('.max-w-7xl') ||
    (element.firstElementChild as HTMLElement | null);

  const cardElement = element.querySelector<HTMLElement>(
    '.rounded-\\[24px\\], .rounded-\\[22px\\], .rounded-\\[20px\\], .rounded-2xl'
  );

  // If the section has top padding (>= 20px), measure from the actual visual card/wrapper
  const computedStyle = window.getComputedStyle(element);
  const paddingTop = parseFloat(computedStyle.paddingTop) || 0;

  if (paddingTop >= 20) {
    if (
      cardElement &&
      (targetId === 'contact-section' ||
        targetId === 'contact' ||
        targetId === 'about-section' ||
        targetId === 'about' ||
        targetId === 'engagement-section')
    ) {
      targetVisualElement = cardElement;
    } else if (contentWrapper) {
      targetVisualElement = contentWrapper;
    }
  }

  const targetRect = targetVisualElement.getBoundingClientRect();
  const visualTop = targetRect.top + window.scrollY;

  // 16px pleasant optical breathing room beneath the bottom of the sticky header
  const opticalGap = 16;
  const isContact = targetId === 'contact' || targetId === 'contact-section';
  // Advance the anchor slightly forward for contact section so the meeting card and form sit perfectly in full view
  const forwardOffset = isContact ? 35 : 0;
  const targetY = Math.max(0, Math.round(visualTop - navHeight - opticalGap - extraOffset + forwardOffset));

  return targetY;
};

/**
 * Smoothly scrolls to the target section with precise sticky header offset and visual framing.
 */
export const scrollToSection = (
  targetId: string,
  options?: { smooth?: boolean; extraOffset?: number }
): boolean => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const smooth = prefersReducedMotion ? false : options?.smooth !== false;
  const targetY = getTargetScrollPosition(targetId, options);

  if (targetY === null) {
    return false;
  }

  window.scrollTo({
    top: targetY,
    behavior: smooth ? 'smooth' : 'auto',
  });

  return true;
};
