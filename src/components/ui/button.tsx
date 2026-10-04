import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "inverse" | "inverseOutline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "sheen bg-ink text-canvas hover:bg-ink/90 shadow-soft hover:shadow-card",
  secondary:
    "border border-hairline text-ink hover:border-ink/25 hover:bg-ink/[0.03]",
  inverse:
    "sheen sheen-onlight bg-on-dark text-[#0b0b0d] hover:bg-white shadow-soft hover:shadow-card",
  inverseOutline: "border border-white/25 text-on-dark hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  withArrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `group/btn inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,box-shadow,transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
    variants[variant] ?? variants.primary
  } ${sizes[size]} ${className}`;

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {withArrow && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
