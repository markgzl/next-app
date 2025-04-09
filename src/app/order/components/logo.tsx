"use client";

import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="mcmaster-logo font-bold">
      <div className="text-3xl tracking-tight">
        McMaster-Carr
        <span className="inline-block text-xs align-top ml-1">®</span>
      </div>
    </Link>
  );
}
