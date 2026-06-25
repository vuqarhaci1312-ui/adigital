import "@/app/arooth-services.css";
import "@/app/arooth-service-cards.css";
import { aroothServicesData } from "@/lib/data/aroothServices";
import AroothServiceCard from "@/components/home/arooth-services/AroothServiceCard";

export default function AroothServicesSection() {
  const { quote, services } = aroothServicesData;

  return (
    <div className="arooth-services">
      <section className="section service" aria-label="Xidmətlər">
        <div className="container">
          <div className="services-title-wrap">
            <h2 className="services-title">{quote}</h2>
          </div>
          <div className="all-services-wrap">
            <div className="services-grid-wrap">
              {services.map((service, index) => (
                <AroothServiceCard
                  key={service.name}
                  {...service}
                  revealDelay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
