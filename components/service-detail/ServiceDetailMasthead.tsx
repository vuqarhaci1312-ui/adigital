import Link from "next/link";
import type { ServiceDetailPageData } from "@/lib/data/serviceDetailTypes";
import GpArrow from "@/components/service-detail/GpArrow";

type Props = {
  masthead: ServiceDetailPageData["masthead"];
};

export default function ServiceDetailMasthead({ masthead }: Props) {
  const { breadcrumbs, titleHtml, intro, cta } = masthead;

  return (
    <section
      data-bgcolor="#fff"
      className="inner-masthead service-detail-inner-masthead"
      data-inner-masthead
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <ul className="portfolio-inner-masthead__breadcrumb">
                {breadcrumbs.map((crumb) => (
                  <li
                    key={crumb.label}
                    className={`caption-1${crumb.active ? " active" : ""}`}
                  >
                    {crumb.active ? (
                      <span>{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href ?? "/"}>{crumb.label}</Link>
                    )}
                    {!crumb.active && <span>/</span>}
                  </li>
                ))}
              </ul>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <p>{intro}</p>
            <div className="wp-block-button is-style-fill-alt-v2">
              <Link href={cta.href} className="wp-block-button__link">
                <span className="btn-text">{cta.label}</span>
                <GpArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
