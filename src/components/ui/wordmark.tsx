import { siteData } from "@/lib/site-data";
import Image from "next/image";

/* Sizing classes are passed in by the call site so the header can animate the
   name as the bar docks. */
export function Wordmark({
  size = "sm",
  nameClassName = "",
  wrap = false,
}: {
  size?: "sm" | "md";
  nameClassName?: string;
  /* In the bar the name stays on one line; a footer lockup may take a second
     line rather than run past the page on a narrow screen. */
  wrap?: boolean;
}) {
  const large = size === "md";

  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`brand-mark ${large ? "h-16 w-16" : "h-14 w-14"}`}
      >
        <Image src="/aayush-signature.png" alt="" width={64} height={64} className="h-full w-full" unoptimized />
      </span>

      <span className="flex min-w-0 flex-col justify-center">
        <span
          className={`display brand-name ${wrap ? "brand-name-wrap" : "truncate"} ${large ? "text-[24px]" : ""} ${nameClassName}`}
        >
          {siteData.businessName}
        </span>
        <span className={`brand-tag ${large ? "mt-1.5 text-[10.5px]" : "mt-px text-[9.5px] max-sm:text-[8px] max-sm:tracking-[0.08em]"}`}>
          {siteData.tagline}
        </span>
      </span>
    </span>
  );
}
