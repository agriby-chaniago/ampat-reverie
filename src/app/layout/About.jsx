"use client";

import { useEffect, useState } from "react";
import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceSize("mobile");
      } else if (width < 1024) {
        setDeviceSize("tablet");
      } else {
        setDeviceSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceSize;
};

export default function About() {
  const deviceSize = useDeviceSize();

  return (
    <section
      id="about"
      className="w-full mx-auto flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 py-16 sm:py-24 lg:py-32 px-2 sm:px-4 lg:px-6 relative"
    >
      <CenterLargeArea deviceSize={deviceSize} />

      <div className="w-full grid lg:grid-cols-[56%_38%] justify-evently items-start gap-6 sm:gap-8 lg:gap-18">
        <LeftLowerSection deviceSize={deviceSize} />
        <RightLowerSection deviceSize={deviceSize} />
      </div>
    </section>
  );
}
