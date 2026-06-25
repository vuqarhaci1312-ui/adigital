import type { ServiceDetailPageData } from "@/lib/data/serviceDetailTypes";

type Props = {
  listing: ServiceDetailPageData["serviceListing"];
};

export default function ServiceListingSection({ listing }: Props) {
  const { bgcolor, headingHtml, intro, cards } = listing;

  return (
    <section
      data-bgcolor={bgcolor}
      className="service-listing darkblue"
      data-service-listing
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <div className="service-listing--heading">
              <h2
                data-title
                dangerouslySetInnerHTML={{ __html: headingHtml }}
              />
              <p data-title>{intro}</p>
            </div>
            <div className="service-listing--wrapper">
              {cards.map((card) => (
                <div
                  key={card.titleHtml}
                  className="service-listing--wrapper-card"
                >
                  <h3
                    className="h6-size headline"
                    dangerouslySetInnerHTML={{ __html: card.titleHtml }}
                  />
                  <p className="caption-1">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
