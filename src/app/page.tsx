'use client';

import Image from "next/image";
import React from "react";
import FloatingMenu from "@/app/components/FloatingMenu";
import MainScreen from "@/app/components/MainScreen";

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
      className="outfit-font"  // TODO - Add Variable
    >
      <FloatingMenu onActiveIndexChange={handleActiveIndexChange} />
      <MainScreen activeSection={activeSection} />
    </div>
  );
}



// //////// Components ////////

// > Floating Menu
// > Main Screen
// > Footer


// ////////////////////////////


// ///////// Screens //////////
// > Home
// >>> Journey
// >>> About
// >>> Creations
// >>> Thoughts
// >>> Connect
// ////////////////////////////
