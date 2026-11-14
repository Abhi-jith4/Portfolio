import { useScrollSpy } from '../hooks/useScrollSpy';

interface SectionNavProps {
  sections: { id: string; label: string }[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const ids = sections.map((s) => s.id);
  const activeId = useScrollSpy(ids, 120);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      className="hidden lg:block sticky top-28 w-56 xl:w-64 shrink-0 pl-6 border-l border-black/[0.08] dark:border-white/[0.1] h-fit"
      aria-label="Table of contents"
    >
      <span className="text-[11px] font-bold tracking-[0.18em] text-[#888888] dark:text-[#777777] uppercase block mb-3.5">
        Contents
      </span>
      <nav className="flex flex-col space-y-1">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-left text-[13px] py-1.5 transition-all duration-200 flex items-center group ${
                isActive
                  ? 'text-[#171717] dark:text-[#F5F5F3] font-semibold translate-x-1'
                  : 'text-[#737373] dark:text-[#A5A5A5] hover:text-[#171717] dark:hover:text-[#F5F5F3]'
              }`}
            >
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mr-2.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-[#171717] dark:bg-[#F5F5F3] scale-100'
                    : 'bg-transparent scale-0 group-hover:scale-75 group-hover:bg-[#888888]'
                }`}
              />
              {s.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
