import { servicesPageData } from "@/lib/data/servicesPage";

export default function ServicesMasthead() {
  const { titleHtml, intro } = servicesPageData.masthead;

  return (
    <section
      data-bgcolor="#fff"
      className="inner-masthead only-content"
      data-inner-masthead
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 text-center col-lg-10">
            <h1 dangerouslySetInnerHTML={{ __html: titleHtml }} />
            <div className="inner-masthead__content">
              <p>{intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
