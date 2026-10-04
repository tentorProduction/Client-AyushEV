import { siteData } from "@/lib/site-data";
import {
  CoffeeIcon,
  BoltIcon,
  PlugIcon,
  DropIcon,
  InfoIcon,
  ParkingIcon,
  SofaIcon,
  WifiIcon,
} from "@/components/ui/icons";

const iconFor: Record<string, React.ReactNode> = {
  charging: <BoltIcon />,
  service: <PlugIcon />,
  parking: <ParkingIcon />,
  waiting: <SofaIcon />,
  washroom: <DropIcon />,
  wifi: <WifiIcon />,
  cafe: <CoffeeIcon />,
  food: <CoffeeIcon />,
};

export function Facilities() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="border-y border-hairline py-12">
        <p className="eyebrow text-center text-ink-soft">Charging & vehicle care</p>
        <div className="reveal mt-10">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {siteData.facilities.map((facility) => (
              <div
                key={facility.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="text-ink [&>svg]:h-6 [&>svg]:w-6">
                  {iconFor[facility.icon] ?? <InfoIcon />}
                </span>
                <span className="text-[15px] text-ink-soft">
                  {facility.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
