import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-28 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label && <p className="eyebrow text-ink-soft">{label}</p>}
      <h2 className="display mt-4 text-[34px] text-ink sm:text-[44px] md:text-[52px]">
        {title}
      </h2>
      {description && (
        <p
          className="lead mt-5 max-w-2xl"
          style={centered ? { margin: "1.25rem auto 0" } : undefined}
        >
          {description}
        </p>
      )}
    </div>
  );
}
