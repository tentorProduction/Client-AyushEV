import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#171917",
          color: "#f5f4f0",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              letterSpacing: 4,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            AAYUSH EV
          </div>
          <div
            style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.12)",
              padding: "8px 20px",
              borderRadius: 30,
              fontSize: 18,
              color: "#a0a59f",
              letterSpacing: 1.5,
            }}
          >
            JANAKPUR DHAM · NEPAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            DC Fast EV Charging & Car Wash
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              marginTop: 20,
              color: "#b0b6af",
            }}
          >
            120 kW GB/T & 80 kW CCS2 · 4 Vehicles Simultaneously · Rs 16.50/kWh
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: 30,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#878d85" }}>
            📍 Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            📞 +977 9714099611
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
