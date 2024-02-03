"use client";

import React, { useEffect, useState } from "react";

const ClientOnly = ({ children } : {children:React.ReactNode}) => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);
  if (!display) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;