import Link from "next/link";
import type { TechnologyBenefitBlock } from "@/lib/data/serviceDetailTypes";

type Props = {
  block: TechnologyBenefitBlock;
};

export default function TechnologyBenefitSection({ block }: Props) {
  const { bgcolor, dark, headingHtml, intro, cards, contact } = block;
  const sectionClass = dark
    ? "dark-bg technology-benefit"
    : "technology-benefit";

  return (
    <section
      data-bgcolor={bgcolor}
      className={sectionClass}
      data-technology-benefit
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <div className="technology-benefit--heading">
              <h2
                data-title
                dangerouslySetInnerHTML={{ __html: headingHtml }}
              />
              <p data-title>{intro}</p>
            </div>
            <div className="technology-benefit--wrapper">
              {cards.map((card) => (
                <div
                  key={card.titleHtml}
                  className="technology-benefit--wrapper-card"
                >
                  <div className="technology-benefit--wrapper-card-img">
                    <div className="technology-benefit--wrapper-card-img-border" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img decoding="async" src={card.image} alt="" />
                  </div>
                  <h5
                    className="headline"
                    dangerouslySetInnerHTML={{ __html: card.titleHtml }}
                  />
                  <p className="caption-1">{card.description}</p>
                </div>
              ))}
            </div>
            {contact ? (
              <div className="technology-benefit--contact">
                <div className="technology-benefit--contact-border" />
                <div className="technology-benefit--contact-box">
                  <div className="technology-benefit--contact-box-text">
                    <h6 className="headline">{contact.title}</h6>
                    <p>{contact.description}</p>
                  </div>
                  <div className="wp-block-button is-style-fill">
                    <Link href={contact.ctaHref} className="wp-block-button__link">
                      <span className="btn-text">{contact.ctaLabel}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
