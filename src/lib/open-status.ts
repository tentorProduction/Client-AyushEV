import { siteData } from "@/lib/site-data";

/* Hours belong to the station, not the visitor, so the clock is read in the
   station's timezone. */
const STATION_TIME_ZONE = "Asia/Kathmandu";

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export interface OpenStatus {
  open: boolean;
  label: string;
  shortLabel: string;
}

function twelveHour(hour24: number) {
  const suffix = hour24 < 12 ? "AM" : "PM";
  const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour}:00 ${suffix}`;
}

/* Station wall clock; falls back to the visitor's clock if the timezone
   database is unavailable. */
function stationClock(now: Date) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: STATION_TIME_ZONE,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(now);

    const read = (type: string) =>
      parts.find((part) => part.type === type)?.value ?? "";

    return {
      day: weekdayIndex[read("weekday")] ?? now.getDay(),
      minutes: Number(read("hour")) * 60 + Number(read("minute")),
    };
  } catch {
    return {
      day: now.getDay(),
      minutes: now.getHours() * 60 + now.getMinutes(),
    };
  }
}

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const { day, minutes } = stationClock(now);
  const weekly = siteData.openingHours.weekly;
  const today = weekly[day];

  if (today && minutes >= today.open * 60 && minutes < today.close * 60) {
    return {
      open: true,
      label: `Open now · until ${twelveHour(today.close)}`,
      shortLabel: "Open now",
    };
  }

  if (today && minutes < today.open * 60) {
    return {
      open: false,
      label: `Closed · opens ${twelveHour(today.open)}`,
      shortLabel: "Closed",
    };
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const next = weekly[(day + offset) % 7];
    if (!next) continue;
    const when = offset === 1 ? "tomorrow" : "next";
    return {
      open: false,
      label: `Closed · opens ${twelveHour(next.open)} ${when}`,
      shortLabel: "Closed",
    };
  }

  return {
    open: false,
    label: siteData.openingHours.display,
    shortLabel: "Closed",
  };
}
