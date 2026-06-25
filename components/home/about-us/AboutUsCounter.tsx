type CounterRow = {
  variant: "_1" | "_2";
  digits: string[];
};

type AboutUsCounterProps = {
  rows: CounterRow[];
  suffix: string;
  label: string;
};

export default function AboutUsCounter({
  rows,
  suffix,
  label,
}: AboutUsCounterProps) {
  return (
    <div className="single-testimonial-stat-wrap about-us">
      <div className="testimonial-counter-wrap about-us" data-about-counter="true">
        {rows.map((row, index) => (
          <div
            key={`${row.variant}-${index}`}
            className={`counter-number-row ${row.variant}`}
          >
            {row.digits.map((digit, digitIndex) => (
              <h2 key={digitIndex} className="single-number about-us">
                {digit}
              </h2>
            ))}
          </div>
        ))}
        <h2 className="single-number about-us">{suffix}</h2>
      </div>
      <div className="testimonial-stat-text">{label}</div>
    </div>
  );
}
