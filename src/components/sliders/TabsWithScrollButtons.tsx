import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@components/icons';

type Tab = {
  label: string;
  content?: React.ReactNode;
};

interface TabsWithScrollButtonsProps {
  tabs: Tab[];
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
}

export const TabsWithScrollButtons = ({
  tabs,
  activeIdx,
  setActiveIdx,
}: TabsWithScrollButtonsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Track if we need to show left/right chevrons
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Helper to check chevron visibility
  const updateChevronVisibility = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    // Use Math.ceil to prevent subpixel rounding errors
    setShowRight(
      Math.ceil(el.scrollLeft + el.clientWidth) < Math.ceil(el.scrollWidth - 1),
    );
  };

  // Update chevron visibility on mount and when tabs change
  useLayoutEffect(() => {
    updateChevronVisibility();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateChevronVisibility);
    window.addEventListener('resize', updateChevronVisibility);
    return () => {
      el.removeEventListener('scroll', updateChevronVisibility);
      window.removeEventListener('resize', updateChevronVisibility);
    };
    // eslint-disable-next-line
  }, [tabs.length]);

  // Scroll so selected tab is fully visible
  useLayoutEffect(() => {
    const el = scrollRef.current;
    const tabEl = tabRefs.current[activeIdx];
    if (el && tabEl) {
      const elRect = el.getBoundingClientRect();
      const tabRect = tabEl.getBoundingClientRect();
      if (tabRect.left < elRect.left) {
        // Scroll left to reveal tab
        el.scrollBy({ left: tabRect.left - elRect.left, behavior: 'smooth' });
      } else if (tabRect.right > elRect.right) {
        // Scroll right to reveal tab
        el.scrollBy({ left: tabRect.right - elRect.right, behavior: 'smooth' });
      }
    }
  }, [activeIdx, tabs.length]);

  // Scroll by one tab (variable width) when chevron is clicked
  const scrollByTab = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;

    const elRect = el.getBoundingClientRect();

    if (dir === 1) {
      // Scroll right: find the first tab that's partially or fully out of view on the right
      for (let i = 0; i < tabs.length; i++) {
        const tabEl = tabRefs.current[i];
        if (!tabEl) continue;
        const tabRect = tabEl.getBoundingClientRect();
        if (tabRect.right > elRect.right) {
          el.scrollBy({
            left: tabRect.right - elRect.right,
            behavior: 'smooth',
          });
          return;
        }
      }
    } else {
      // Scroll left: find the last tab that's partially or fully out of view on the left
      let found = false;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const tabEl = tabRefs.current[i];
        if (!tabEl) continue;
        const tabRect = tabEl.getBoundingClientRect();
        if (tabRect.left < elRect.left - 1) {
          el.scrollBy({ left: tabRect.left - elRect.left, behavior: 'smooth' });
          found = true;
          break;
        }
      }
      if (!found && tabs.length > 0) {
        // If not found, scroll to the very start
        el.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="w-full mx-auto flex flex-row items-center gap-1 mb-3  ">
      {showLeft && (
        <button
          onClick={() => scrollByTab(-1)}
          className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-50 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {/* Mask/clip to show only 4 tabs */}
      <div className="relative w-full overflow-hidden">
        {/* Flex row for all tabs, move left/right using translate */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto gap-x-1 sm:gap-x-1 w-full scrollbar-hide px-10 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              ref={el => {
                tabRefs.current[idx] = el;
              }}
              className={`whitespace-nowrap px-3 py-2 sm:px-3 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all
              ${
                activeIdx === idx
                  ? 'bg-secondary-dark text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-secondary-light/20'
              }
              mx-1
            `}
              onClick={() => setActiveIdx(idx)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {showRight && (
        <button
          onClick={() => scrollByTab(1)}
          className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition-all z-10"
          aria-label="Scroll right"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};
