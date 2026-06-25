import Link from "next/link";
import { aboutUsAssets } from "@/lib/data/aboutUs";

type AroothPrimaryButtonProps = {
  href: string;
  label: string;
};

export default function AroothPrimaryButton({
  href,
  label,
}: AroothPrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7"
    >
      <div className="primary-button-flex">
        <div className="primary-button-text-wrap">
          <div className="primary-button-text">{label}</div>
          <div className="primary-button-text-hover">{label}</div>
        </div>
        <div className="primary-button-arrow-wrapper">
          <div className="primary-button-arrow-wrap">
            <img
              src={aboutUsAssets.buttonArrow}
              loading="lazy"
              alt=""
              className="primary-button-arrow"
            />
            <img
              src={aboutUsAssets.buttonArrow}
              loading="lazy"
              alt=""
              className="primary-button-arrow-hover"
            />
          </div>
        </div>
      </div>
      <div className="primary-button-hover-bg" />
    </Link>
  );
}
