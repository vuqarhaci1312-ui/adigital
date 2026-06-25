"use client";

import Link from "next/link";
import { Alignment, Fit } from "@rive-app/react-canvas";
import RiveCanvas from "@/components/ui/RiveCanvas";
import SectionTitle from "@/components/ui/SectionTitle";
import { homeData } from "@/lib/data/home";

export default function FinanceSection() {
  const { finance } = homeData;

  return (
    <section id="finance" className="finance-section">
      <SectionTitle
        subtitle={finance.subtitle}
        title={
          <>
            {finance.titleLine1}
            <br className="hidden sm:inline" />
            <span className="inline sm:hidden"> </span>
            {finance.titleLine2}
          </>
        }
        animate="scroll"
        threshold={0.2}
        className="finance-section__title"
      />

      <div className="finance-rive-wrapper">
        <div className="finance-rive-overlay">
          <div className="finance-rive-overlay__heading">{finance.heroHeading}</div>
          <div className="finance-rive-overlay__card">
            <p className="finance-rive-overlay__card-title">{finance.heroTitle}</p>
            <p className="finance-rive-overlay__card-body">{finance.heroDescription}</p>
            <Link href={finance.heroCta.href} className="finance-rive-overlay__cta">
              {finance.heroCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="finance-hero-interaction">
          <RiveCanvas
            className="finance-rive-desktop"
            src="https://cdn.prod.website-files.com/6965e6515fb6b18e928e6d0f/69a7fae012ab294a01b0a699_af3d5e385b0cbdbb16fae0013a8aa054_payroll_fix.riv"
            stateMachine="State Machine 1"
            artboard="Artboard"
            fit={Fit.Contain}
            alignment={Alignment.Center}
            interactive
          />
          <RiveCanvas
            className="finance-rive-mobile"
            src="https://cdn.prod.website-files.com/6965e6515fb6b18e928e6d0f/69aec72ab28e4e04c6587739_599c94f45c6dd34ecc17e3edd9d12a21_payroll_fix_mobile.riv"
            stateMachine="State Machine 1"
            artboard="Artboard"
            fit={Fit.Contain}
            alignment={Alignment.Center}
            interactive
          />
        </div>
      </div>
    </section>
  );
}
