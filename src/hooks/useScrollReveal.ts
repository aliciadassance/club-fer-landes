import { useEffect } from 'react';

export function useScrollReveal(route: string) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('[data-rv]').forEach((el) => {
        if (el.hasAttribute('data-rv-done')) return;
        el.setAttribute('data-rv-done', '1');
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.9) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(22px)';
        io.observe(el);
      });
    });

    return () => {
      io.disconnect();
      // Reset data-rv-done on unmount so the next route works
      document.querySelectorAll<HTMLElement>('[data-rv-done]').forEach((el) => {
        el.removeAttribute('data-rv-done');
        el.style.opacity = '';
        el.style.transform = '';
      });
    };
  }, [route]);
}
