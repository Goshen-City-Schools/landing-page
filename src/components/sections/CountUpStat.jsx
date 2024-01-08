import React, { useEffect, useRef } from "react";

export default function CountUpStat() {
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  let countUpAnim;

  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  }, []);

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current, 1000);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <div class="flex justify-between gap-12 mt-8 mr-8">
      <div class="flex flex-col mt-4 items-center gap-1">
        <h2 class="font-bold text-4xl">40+</h2>
        <small>Teachers</small>
      </div>
      <div class="flex flex-col mt-4 items-center gap-1">
        <h2 class="font-bold text-4xl">2k</h2>
        <small>Students</small>
      </div>
      <div class="flex flex-col mt-4 items-center gap-1">
        <h2 class="font-bold text-4xl">A+</h2>
        <small>Accreditation</small>
      </div>
      <div class="flex flex-col mt-4 items-center gap-1">
        <h2 class="font-bold text-4xl">10yrs</h2>
        <small>Experience</small>
      </div>
    </div>
  );
}
