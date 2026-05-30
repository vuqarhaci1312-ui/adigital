"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useBlurReveal } from "@/hooks/useBlurReveal";
import Logo from "@/components/ui/Logo";
import { homeData, siteContact } from "@/lib/data/home";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const logoRef = useRef<HTMLDivElement>(null);
  const { footer } = homeData;

  const { ref: sitemapRef } = useBlurReveal({
    mode: "list",
    childSelector: "[data-anim-sitemap]",
    blur: 1.5,
    opacity: 0.5,
  });

  const { ref: socialsRef } = useBlurReveal({
    mode: "list",
    childSelector: "[data-anim-socials]",
    blur: 1.5,
    opacity: 0.5,
  });

  useGSAP(
    () => {
      registerGsap();
      gsap.from(gsap.utils.toArray("[data-scroll-letter]"), {
        yPercent: 120,
        duration: 1.5,
        stagger: 0.05,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: logoRef }
  );

  return (
    <footer className="bg-blue pt-15 pb-8 text-white sm:pt-30">
      <div className="container flex flex-col gap-15 sm:gap-30">
        <div className="custom-grid">
          <p className="h2 col-span-4 sm:col-span-5">
            {footer.title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="p2 col-span-4 col-start-1 mt-3 sm:col-start-7 sm:col-span-3">
            {footer.description}
          </p>
        </div>

        <div ref={sitemapRef as React.RefObject<HTMLDivElement>}>
          <div className="block sm:hidden">
            <div className="border-light-gray border-t border-b pt-4 pb-8">
              <p className="label text-gray mb-2">Sitemap</p>
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    data-anim-sitemap="true"
                    className="w-fit text-(length:--font-size-h3) leading-(--font-leading-h3)"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="block sm:hidden">
            <div className="border-light-gray flex justify-between border-b pt-4 pb-8">
              <div>
                <p className="label text-gray mb-2">Visit</p>
                <a
                  className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.address.url}
                >
                  <span className="wrapper">
                    {footer.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </div>
              <div>
                <p className="label text-gray mb-2">Work With Us</p>
                <div className="flex flex-col">
                  <a
                    className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${footer.email}`}
                  >
                    <span className="wrapper">{footer.email}</span>
                  </a>
                  <a
                    className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={footer.scheduleUrl}
                  >
                    <span className="wrapper">{siteContact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="custom-grid border-light-gray border-t border-b pt-8 pb-12">
              <p className="p1 text-gray col-span-2">Sitemap</p>
              <div className="col-span-6 col-start-7 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    data-anim-sitemap="true"
                    className="p2 w-fit"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="custom-grid border-light-gray border-b pt-8 pb-12">
              <p className="p1 text-gray col-span-2">Visit</p>
              <div className="col-span-6 col-start-7">
                <a
                  className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.address.url}
                >
                  <span className="wrapper">
                    {footer.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="custom-grid border-light-gray border-b pt-8 pb-12">
              <p className="p1 text-gray col-span-2">Work With Us</p>
              <div className="col-span-6 col-start-7 flex flex-col">
                <a
                  className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${footer.email}`}
                >
                  <span className="wrapper">{footer.email}</span>
                </a>
                <a
                  className="w-fit block [&>.wrapper]:transition-opacity [&>.wrapper]:hover:opacity-40 p2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.scheduleUrl}
                >
                  <span className="wrapper">{siteContact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8">
          <div ref={logoRef} style={{ clipPath: "inset(-60% 0 0 0)" }}>
            <Logo data-anim-logo="true" className="w-full h-auto" />
          </div>
          <div
            ref={socialsRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col justify-between gap-y-4 md:flex-row md:items-center"
          >
            <div className="flex gap-6">
              {footer.socials.map((social) => (
                <a
                  key={social.href}
                  data-anim-socials="true"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p2"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="p2">© {new Date().getFullYear()} AysDigital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
