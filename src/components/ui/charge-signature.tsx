import Image from "next/image";

export function ChargeSignature() {
  return (
    <div className="charge-signature" aria-hidden="true">
      <div className="charge-connector"><span>120 kW</span><span>GB/T</span></div>
      <span className="charge-rail"><span /></span>
      <span className="charge-emblem"><Image src="/aayush-mark.svg" alt="" width={136} height={136} priority unoptimized /></span>
      <span className="charge-rail charge-rail-out"><span /></span>
      <div className="charge-connector"><span>80 kW</span><span>CCS2</span></div>
    </div>
  );
}
