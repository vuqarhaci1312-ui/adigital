"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/birbank-footer.css";
import {
  birbankFooterAssets,
  birbankFooterData,
} from "@/lib/data/birbankFooter";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 320 512" aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91V127.77c0-25.35 12.42-50.06 52.24-50.06h40.08V6.26S260.43 0 225.36 0C141.09 0 89.09 54.42 89.09 153.17v102.5H0V288h89.09v224h100.17V288z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 576 512" aria-hidden="true">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  );
}

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
} as const;

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const { copyright, privacyLabel, privacyHref, links, apps, socials } =
    birbankFooterData;

  return (
    <div className="birbank-footer">
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__logo">
              <Link href="/" className="footer__logo-text" aria-label="AysDigital">
                AysDigital
              </Link>
            </div>

            <div className="footer__links">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`footer__links__categories__item${isActive ? " footer__links__categories__item--active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="footer__apps">
              <div>
                {apps.map((app) => (
                  <a
                    key={app.id}
                    className="footer__apps__item"
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={app.icon} alt="" width={24} height={24} />
                    <div className="footer__apps__item__info">
                      <div className="footer__apps__item__info__name">{app.name}</div>
                      <div className="footer__apps__item__info__description">
                        {app.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <img
                className="footer__apps__qr"
                src={birbankFooterAssets.qr}
                alt="AysDigital əlaqə QR kodu"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="footer__container">
          <div className="footer__bottom">
            <p className="footer__bottom__desktopCopyright">
              © {year} {copyright}
            </p>

            <div className="footer__links__socials">
              <Link href={privacyHref} className="footer__links__privacy">
                {privacyLabel}
              </Link>

              {socials.map((social) => {
                const Icon = socialIcons[social.id as keyof typeof socialIcons];
                return (
                  <a
                    key={social.id}
                    className="footer__links__socials__item"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>

            <div className="footer__bottom__mobileInfo">
              <Link href={privacyHref} className="footer__links__privacy__mobile">
                {privacyLabel}
              </Link>
              <p>
                © {year} {copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
