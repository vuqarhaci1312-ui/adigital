type LogoProps = React.HTMLAttributes<HTMLSpanElement> & {
  "data-anim-logo"?: boolean | string;
};

const logoText = "AysDigital";

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline whitespace-nowrap font-[family-name:var(--font-founders-grotesk)] text-[1.125rem] font-normal leading-none tracking-[-0.03em] sm:text-[1.25rem] ${className ?? ""}`}
      aria-label="AysDigital"
      {...props}
    >
      {logoText.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} data-scroll-letter="true" className="inline-block">
          {letter}
        </span>
      ))}
    </span>
  );
}
