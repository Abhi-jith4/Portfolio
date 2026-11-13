import { useEffect, useState, useRef } from 'react';

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [ids, offset]);

  return activeId;
}

