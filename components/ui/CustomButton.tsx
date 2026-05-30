import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CustomButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function CustomButton({
  href,
  children,
  className,
}: CustomButtonProps) {
  const styles = twMerge(
    "bg-blue p2 relative flex w-fit cursor-pointer items-center justify-center gap-4 rounded-md px-6 py-2 text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]",
    "border-light-gray shadow-[0_1px_1px_0_var(--color-blue)_inset,0_4px_4px_0_rgba(255,255,255,0.4)_inset,0_-4px_6px_0_rgba(0,0,20,0.3)_inset,0_4px_15px_0_rgba(0,0,20,0.15)] hover:shadow-[0_1px_1px_0_var(--color-blue)_inset,0_6px_6px_0_rgba(255,255,255,0.4)_inset,0_-4px_6px_0_rgba(0,0,20,0.3)_inset,0_6px_20px_0_rgba(0,0,20,0.2)]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
