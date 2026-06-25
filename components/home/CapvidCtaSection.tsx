import Link from "next/link";
import "@/app/capvid-cta.css";
import { capvidCtaData } from "@/lib/data/capvidCta";

export default function CapvidCtaSection() {
  const { tag, heading, description, buttonLabel, buttonHref, image, pattern } =
    capvidCtaData;

  return (
    <div className="capvid-cta">
      <div className="cta_section" aria-label="Başlayın">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <div className="w-layout-grid cta_component background-color-gd-blue shadow-large">
              <div className="cta_content_wrapper">
                <div className="margin-bottom margin-small">
                  <div className="tag-wrapper">
                    <div className="tag-component">
                      <div>{tag}</div>
                    </div>
                  </div>
                </div>
                <div className="margin-bottom margin-medium">
                  <h3 className="heading-style-h2 text-color-alternate">{heading}</h3>
                </div>
                <p className="text-size-medium text-color-alternate">{description}</p>
                <div className="margin-top margin-large">
                  <div className="button-group">
                    <Link href={buttonHref} className="button is-secondary">
                      {buttonLabel}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cta_image_wrapper">
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  loading="lazy"
                  alt=""
                  className="cta_image"
                />
              </div>
              <img
                src={pattern.src}
                srcSet={pattern.srcSet}
                sizes={pattern.sizes}
                loading="lazy"
                alt=""
                className="cta_pattern"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
