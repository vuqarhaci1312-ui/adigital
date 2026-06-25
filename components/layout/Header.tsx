"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { useBlurReveal } from "@/hooks/useBlurReveal";
import { splitNavHideElements } from "@/lib/navSplitText";
import Logo from "@/components/ui/Logo";
import { navData, siteContact } from "@/lib/data/home";

const { links: navLinks, menu: navMenu } = navData;

export default function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const asideRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const navLinksContainerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const splitWordsRef = useRef<HTMLElement[]>([]);
  const splitRevertRef = useRef<(() => void)[]>([]);
  const isCompactRef = useRef(false);
  const isMobileRef = useRef(false);
  const animatingRef = useRef(false);

  const { ref: menuBlurRef } = useBlurReveal({
    mode: "list",
    childSelector: ".nav-menu-item",
    blur: 3,
    opacity: 0.4,
  });

  const { ref: navHideBlurRef } = useBlurReveal({
    mode: "list",
    childSelector: ".nav-hide",
    blur: 2,
    opacity: 0.75,
    split: null,
  });

  const setNavLinksRefs = (node: HTMLDivElement | null) => {
    navLinksContainerRef.current = node;
    navHideBlurRef.current = node;
  };

  const setMenuItemsRefs = (node: HTMLDivElement | null) => {
    menuItemsRef.current = node;
    menuBlurRef.current = node;
  };

  useGSAP(
    () => {
      registerGsap();
      const nav = navRef.current;
      const burger = burgerRef.current;
      const button = buttonRef.current;
      if (!nav || !burger || !button) return;

      const navHideEls = gsap.utils.toArray<HTMLElement>(".nav-hide", nav);
      const splits = splitNavHideElements(navHideEls);
      splitWordsRef.current = splits.flatMap((s) => s.words);
      splitRevertRef.current = splits.map((s) => s.revert);

      const mm = gsap.matchMedia();

      mm.add("(max-width: 39.99rem)", () => {
        isMobileRef.current = true;
        gsap.set(nav, { "--span": 4 });
        gsap.set(".nav-hide", { display: "none" });
        gsap.set(burger, { display: "flex", scaleX: 1 });
        button.classList.add("cursor-pointer");
        button.setAttribute("aria-label", "Naviqasiya menyusu — açmaq üçün klikləyin");
        return () => {
          isMobileRef.current = false;
          gsap.set(nav, { "--span": 12 });
          gsap.set(".nav-hide", { display: "", yPercent: 0 });
          splitWordsRef.current.forEach((word) => gsap.set(word, { yPercent: 0 }));
          gsap.set(burger, { display: "", scaleX: 0 });
          button.classList.remove("cursor-pointer");
          button.removeAttribute("aria-label");
        };
      });

      const compactTimeline = (span: number) =>
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "body",
              start: "top top-=50",
              end: "top top-=51",
              toggleActions: "play none reverse none",
              onEnter: () => {
                isCompactRef.current = true;
                setNavCompact(true);
                button.classList.add("cursor-pointer");
                button.setAttribute("aria-label", "Naviqasiya menyusu — açmaq üçün klikləyin");
              },
              onLeaveBack: () => {
                isCompactRef.current = false;
                setNavCompact(false);
                setMenuOpen(false);
                button.classList.remove("cursor-pointer");
                button.removeAttribute("aria-label");
              },
            },
          })
          .to(nav, { "--span": span, duration: 0.75, ease: "power3.inOut" }, 0)
          .to(splitWordsRef.current, { yPercent: 100, duration: 0.4, ease: "power3.inOut" }, 0)
          .set(".nav-hide", { display: "none" }, 0.4)
          .set(burger, { display: "flex" }, 0.5)
          .to(burger, { scaleX: 1, duration: 0.4, ease: "power3.inOut" }, 0.5);

      mm.add("(min-width: 40rem) and (max-width: 79.99rem)", () => compactTimeline(6));
      mm.add("(min-width: 80rem)", () => compactTimeline(4));

      return () => {
        mm.revert();
        splitRevertRef.current.forEach((revert) => revert());
        splitWordsRef.current = [];
        splitRevertRef.current = [];
      };
    },
    { scope: headerRef }
  );

  useGSAP(
    () => {
      const aside = asideRef.current;
      if (!aside) return;

      const items = aside.querySelectorAll(".nav-menu-item");
      const tl = gsap.timeline({
        onStart: () => {
          animatingRef.current = true;
        },
        onComplete: () => {
          animatingRef.current = false;
        },
      });

      if (menuOpen) {
        tl.to(aside, {
          gridTemplateRows: "1fr",
          duration: 0.5,
          ease: "power3.inOut",
        });
        tl.fromTo(
          items,
          { opacity: 0, filter: "blur(10px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.4,
            stagger: 0.02,
            ease: "power3.out",
          },
          "-=0.3"
        );
      } else {
        tl.to(items, {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: { amount: 0.1, from: "end" },
          ease: "power3.in",
        });
        tl.to(
          aside,
          { gridTemplateRows: "0fr", duration: 0.4, ease: "power3.inOut" },
          "-=0.1"
        );
      }
    },
    { scope: headerRef, dependencies: [menuOpen] }
  );

  useGSAP(
    () => {
      if (!navRef.current) return;
      gsap.fromTo(
        navRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.25, ease: "power2.out" }
      );
    },
    { scope: headerRef }
  );

  const resetNavExpanded = () => {
    const nav = navRef.current;
    const burger = burgerRef.current;
    const button = buttonRef.current;
    if (!nav || !burger || !button) return;

    isCompactRef.current = false;
    setNavCompact(false);
    setMenuOpen(false);

    gsap.set(nav, { "--span": 12 });
    gsap.set(nav.querySelectorAll(".nav-hide"), {
      display: "",
      opacity: "",
      visibility: "",
      width: "",
      maxWidth: "",
    });
    splitWordsRef.current.forEach((word) => gsap.set(word, { yPercent: 0 }));
    gsap.set(burger, { display: "", scaleX: 0 });
    button.classList.remove("cursor-pointer");
    button.removeAttribute("aria-label");
  };

  useEffect(() => {
    resetNavExpanded();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname, lenis]);

  useEffect(() => {
    if (!menuOpen) return;
    let removeScroll: (() => void) | undefined;
    const timeout = setTimeout(() => {
      const closeOnScroll = () => setMenuOpen(false);
      window.addEventListener("scroll", closeOnScroll, { passive: true });
      removeScroll = () => window.removeEventListener("scroll", closeOnScroll);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      removeScroll?.();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const timeout = setTimeout(() => {
      document.addEventListener("click", closeOnOutside);
    }, 0);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", closeOnOutside);
    };
  }, [menuOpen]);

  const handleNavMouseEnter = () => {
    if (!menuOpen && (isCompactRef.current || isMobileRef.current) && navRef.current) {
      gsap.to(navRef.current, { scale: 1.03, duration: 0.2, ease: "power3.out" });
    }
  };

  const handleNavMouseLeave = () => {
    if (!menuOpen && (isCompactRef.current || isMobileRef.current) && navRef.current) {
      gsap.to(navRef.current, { scale: 1, duration: 0.4, ease: "back.out(5)" });
    }
  };

  const handleButtonMouseDown = () => {
    if (!menuOpen && !isCompactRef.current && !isMobileRef.current) return;
    if (!navRef.current) return;
    const scale = (gsap.getProperty(navRef.current, "scale") as number) || 1;
    gsap.to(navRef.current, { scale: scale - 0.01, duration: 0.2, ease: "power3.out" });
  };

  const handleButtonMouseUp = () => {
    if (!navRef.current) return;
    gsap.to(navRef.current, { scale: 1, duration: 0.2, ease: "power3.out" });
  };

  const toggleMenu = () => {
    if (animatingRef.current) return;
    if (isMobileRef.current || isCompactRef.current) {
      setMenuOpen((open) => !open);
    }
  };

  return (
    <header
      ref={headerRef}
      className="custom-flex-grid fixed top-5 left-1/2 z-50 container w-full -translate-x-1/2 justify-center"
    >
      <nav
        ref={navRef}
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
        className={`span bg-light-gray/60 relative rounded-lg shadow-[0_0_60px_0_rgba(255,255,255,0.3)_inset,0_0_60px_0_rgba(255,255,255,0.3)_inset,0_4px_20px_0_rgba(0,0,20,0.2)] ring-2 ring-white/30 backdrop-blur-lg [--span:12]${navCompact ? " nav-is-compact" : ""}`}
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleMenu}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
          onMouseLeave={handleButtonMouseUp}
          className="nav-bar-button"
        >
          <Link
            className="block w-22 shrink-0"
            href="/"
            aria-label="Ana səhifə"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="wrapper">
              <Logo />
            </span>
          </Link>
          <div ref={setNavLinksRefs} className="nav-links-group">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="w-fit block nav-hide"
                href={link.href}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="wrapper">{link.label}</span>
              </Link>
            ))}
            <div
              ref={burgerRef}
              className="absolute right-0 h-7 w-7 origin-right scale-x-0 cursor-pointer flex-col items-center justify-center gap-1.5 p-1"
            >
              <span
                className={`bg-foreground block h-0.5 w-full transition-all duration-300 ease-in-out ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`bg-foreground block h-0.5 w-full transition-all duration-300 ease-in-out ${
                  menuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </div>
        </button>
        <aside
          ref={asideRef}
          className="grid grid-rows-[0fr]"
          aria-hidden={!menuOpen}
          {...(!menuOpen ? { inert: true } : {})}
        >
          <div className="flex flex-col gap-8 overflow-hidden px-4 sm:px-6">
            <div className="mt-4 flex flex-col gap-2 sm:gap-1">
              <p className="caption text-dark-gray nav-menu-item">{navMenu.title}</p>
              <div ref={setMenuItemsRefs} className="flex flex-col gap-0">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      className="h3 nav-menu-item hidden w-fit cursor-pointer sm:block"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="wrapper">{link.label}</span>
                    </Link>
                    <Link
                      className="nav-menu-item block w-fit cursor-pointer text-(length:--font-size-h2) leading-(--font-leading-h2) sm:hidden"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="wrapper">{link.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 flex justify-between sm:mb-6">
              <div className="flex flex-col gap-2 sm:gap-1">
                <p className="caption text-dark-gray nav-menu-item">{navMenu.visit}</p>
                <a
                  className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2 nav-menu-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteContact.address.url}
                >
                  <span className="wrapper">
                    {siteContact.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-2 sm:gap-1">
                <p className="caption text-dark-gray nav-menu-item">{navMenu.workWithUs}</p>
                <div className="flex flex-col">
                  <a
                    className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2 nav-menu-item"
                    href={siteContact.phoneHref}
                  >
                    <span className="wrapper">
                      <span>{siteContact.phone}</span>
                    </span>
                  </a>
                  <a
                    className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2 nav-menu-item"
                    href={`mailto:${siteContact.email}`}
                  >
                    <span className="wrapper">
                      <span>{siteContact.email}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
}
