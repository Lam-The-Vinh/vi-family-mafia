"use client"; 
import { useTranslate } from "react-polyglot";

export default function Home() {
  const t = useTranslate();
  return (
    <div className="mt-50">
      <div className="container mx-auto "><h1 className="text-center font-bold text-5xl">{t("welcome")}</h1></div>
      <img className="w-full" src="/banner-family.png" alt="" />
      <div className="container mx-auto"></div>
    </div>
  );
}
