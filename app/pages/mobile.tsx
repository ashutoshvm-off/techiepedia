'use strict';

import { useEffect, useState } from 'react';

export const mobileDropdownStyle = {
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '1.5rem',
  alignItems: 'center',
  zIndex: 999,
  position: 'absolute' as const,
  left: 0,
  right: 0,
  top: '100%',
  isolation: 'isolate',
  willChange: 'backdrop-filter, transform',
  WebkitTransform: 'translateZ(0)',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
} as const;

export default function MobileResponsive({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileStyles = {
    wrapper: {
      width: '100%',
      maxWidth: '100%',
      padding: '0',
      overflow: 'hidden',
      margin: 'auto',
      boxSizing: 'border-box' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem',
      position: 'relative' as const,
      height: isMobile ? '100vh' : 'auto',
      overflowY: isMobile ? 'auto' : 'visible',
    },
    navbar: {
      flexDirection: 'column' as const,
      padding: '0.75rem',
      gap: '0.5rem',
      width: '100%',
      backgroundColor: '#fff',
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    menu: {
      display: isMobile ? 'flex' : 'flex',
      flexDirection: 'column' as const,
      width: '100%',
      gap: '0.5rem',
      padding: '0.25rem 0',
    },
    content: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: isMobile ? '1rem' : '2rem',
      width: '100%',
      maxWidth: '100%',
      padding: isMobile ? '0 auto' : '0.5rem',
      margin: '0 auto',
      overflow: isMobile ? 'auto' : 'visible',
      position: 'relative' as const,
      flex: '1 1 auto',
    },
    descriptionSection: {
      width: '100%',
      padding: '2rem 1rem',
      margin: '2rem 0',
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '16px',
      position: 'relative' as const,
      zIndex: 2,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
    description: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#fff',
      textAlign: 'left' as const,
      '& span': {
        color: '#9C80F4',
        fontWeight: '500',
      },
      margin: '0',
      padding: '0',
    },
    eventsSection: {
      width: '100%',
      maxWidth: '100%',
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: '1fr',
      overflow: 'hidden',
      contain: 'layout paint',
      margin: 'auto',
      padding: isMobile ? '0.75rem auto' : '1rem',
    },
    eventCard: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
      padding: '1rem',
      backgroundColor: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      border: '1px solid rgba(255,255,255,0.05)',
      margin: '0',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.5rem',
      width: '100%',
    },
    eventDate: {
      fontSize: '0.85rem',
      color: '#7ee6ff',
      fontWeight: '500',
    },
    eventTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#fff',
    },
    eventDescription: {
      fontSize: '0.9rem',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: '1.4',
    },
    registerButton: {
      alignSelf: 'flex-start',
      padding: '0.5rem 1.2rem',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)',
      backgroundColor: 'rgba(126,230,255,0.1)',
      color: '#fff',
      fontSize: '0.9rem',
      marginTop: '0.5rem',
    },
    statisticsSection: {
      width: '100%',
      maxWidth: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem',
      overflow: 'hidden',
      contain: 'layout paint',
      margin: 'auto',
      padding: isMobile ? '1rem auto' : '1.5rem',
    },
    aboutSection: {
      width: '100%',
      padding: isMobile ? '1rem auto' : '1.5rem',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isMobile ? '0.75rem' : '1rem',
      backgroundColor: 'rgba(255,255,255,0.02)',
      fontSize: '0.9rem',
      margin: 'auto',
    },
    section: {
      width: '100%',
      padding: isMobile ? '0.5rem auto' : '1rem',
      boxSizing: 'border-box' as const,
      margin: 'auto',
      marginBottom: isMobile ? '0.5rem' : '1rem',
    },
    
    footer: {
      flexDirection: 'column' as const,
      textAlign: 'center' as const,
      padding: '2rem 1rem',
      fontSize: '0.9rem',
    }
  };

  const desktopStyles = {
    wrapper: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 1rem',
    },
    navbar: {},
    menu: {
      display: 'flex',
    },
    content: {},
    eventCard: {},
    blogCard: {},
    footer: {}
  };

  return (
    <div style={{
      ...isMobile ? mobileStyles.wrapper : desktopStyles.wrapper,
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
      contain: 'layout paint',
    }}>
      {children}
    </div>
  );
}

// Media query breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
};

// Helper function to generate media queries
export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};

// Utility function to check if current viewport is mobile
export function isMobileViewport() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= parseInt(breakpoints.mobile);
}

// Utility function to apply mobile-specific styles
export function getMobileStyles(defaultStyles: any, mobileStyles: any) {
  return isMobileViewport() ? { ...defaultStyles, ...mobileStyles } : defaultStyles;
}
