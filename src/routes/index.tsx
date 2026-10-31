import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [View, setView] = useState<ComponentType | null>(null);

  useEffect(() => {
    let live = true;
    void import("@/components/factory/FactoryView").then((mod) => {
      if (live) setView(() => mod.FactoryView);
    });
    return () => {
      live = false;
    };
  }, []);

  if (!View) {
    return (
      <main className="loading-screen" style={{ minHeight: "100dvh", background: "#e9ece4", color: "#203b38", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", fontFamily: "Manrope, sans-serif" }}>
        <p style={{ letterSpacing: "0.28em", fontSize: 12, color: "#285445" }}>SEVERO</p>
        <h1 style={{ fontWeight: 500, fontSize: 28, margin: "8px 0" }}>Loading the site</h1>
        <p style={{ fontSize: 12, color: "#829080" }}>PS-01 reception · PS-02 settling · PS-03 separation.</p>
      </main>
    );
  }

  return <View />;
}
