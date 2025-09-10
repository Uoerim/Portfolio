'use client';

import Image from "next/image";
import React from "react";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("Journey");

  const handleActiveIndexChange = (index: number, label: string) => {
    setActiveSection(label);
  };

  return (
    <div
      style={{
      maxWidth: "100vw",
      overflowX: "hidden",
      paddingTop: "5rem",
      }}
  className="vt323-font"
    >
      Hello
    </div>
  );
}
