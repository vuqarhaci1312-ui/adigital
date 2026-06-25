import Link from "next/link";
import { aroothServicesAssets } from "@/lib/data/aroothServices";

type AroothMoreButtonProps = {
  href: string;
  label?: string;
  variant?: "base" | "white";
};

export default function AroothMoreButton({
  href,
  label = "Ətraflı",
  variant = "base",
}: AroothMoreButtonProps) {
  const isWhite = variant === "white";
  const arrowSrc = isWhite
    ? aroothServicesAssets.moreButtonArrowWhite
    : aroothServicesAssets.moreButtonArrow;

  return (
    <Link
      href={href}
      className={`more-button w-inline-block${isWhite ? " is-white" : ""}`}
    >
      <div className="more-button-flex">
        <div
          className={`more-button-text${
            isWhite ? " w-variant-0c325bc6-e049-52af-d0fe-85d5b21ce01c" : ""
          }`}
        >
          {label}
        </div>
        <div
          className={`more-button-arrow-wrap${
            isWhite ? " w-variant-0c325bc6-e049-52af-d0fe-85d5b21ce01c" : ""
          }`}
        >
          <img
            src={arrowSrc}
            loading="lazy"
            alt=""
            className="more-button-arrow"
          />
          <img
            src={arrowSrc}
            loading="lazy"
            alt=""
            className="more-button-arrow-hover"
          />
        </div>
      </div>
    </Link>
  );
}
