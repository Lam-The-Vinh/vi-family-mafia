"use client";
import Link from 'next/link';
import React from 'react';
import { useTranslate } from "react-polyglot";

export default function Hero() {
  const t = useTranslate();
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {t("heroTitle")}
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-4">
          {t("heroSubtitle")}
        </p>
        <Link
          href="/lienHe"
          className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-xl font-medium"
        >
          {t("heroButton")}
        </Link>
      </div>
    </section>
  );
}
