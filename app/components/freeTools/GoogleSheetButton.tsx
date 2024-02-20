"use client";

import React, { Fragment, useState } from "react";
import LeadScoreModal from "./LeadScoreModal";

type Props = {};

export default function GoogleSheetButton({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {" "}
      <button
        className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-[#ff2d55] border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
        onClick={() => setOpen(true)}
      >
        GET GOOGLE WORKSHEET
      </button>
     {open && <LeadScoreModal open={open} setOpen={setOpen} />}
    </Fragment>
  );
}
