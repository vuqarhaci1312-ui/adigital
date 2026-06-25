"use client";

import { useRef } from "react";
import type { ConsultingProcessBlock } from "@/lib/data/serviceDetailTypes";
import { useConsultingProcess } from "@/hooks/useConsultingProcess";
import ProcessArrow from "@/components/service-detail/ProcessArrow";

type Props = {
  block: ConsultingProcessBlock;
};

export default function ConsultingProcessSection({ block }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useConsultingProcess(sectionRef);

  const { headingHtml, intro, steps } = block;

  return (
    <section
      ref={sectionRef}
      data-bgcolor="#fff"
      className="consulting-process"
      data-consulting-process
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="consulting-process--heading">
              <h2
                data-title
                dangerouslySetInnerHTML={{ __html: headingHtml }}
              />
              <p data-title>{intro}</p>
            </div>
            <div className="consulting-process--wrapper">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="consulting-process--wrapper-card"
                >
                  <div className="consulting-process--wrapper-card-box">
                    <div className="consulting-process--wrapper-card-box-border" />
                    <div className="consulting-process--wrapper-card-box-content">
                      <h6>{step.title}</h6>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  <div className="consulting-process--wrapper-card-img">
                    <div>
                      <ProcessArrow />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
