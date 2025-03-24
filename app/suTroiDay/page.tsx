"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";

const suTroiDay: NextPage = () => {
  const t = useTranslate();
  return (
    <div className="container mx-auto mb-15">
      <h1 className="text-5xl font-bold mt-50 text-center">{t("suTroiDay")}</h1>
      <h2 className="text-3xl text-center pt-5 font-semibold">
        "{t("danhDu")}"
      </h2>
      <div className="pt-5">
        <h3 className="text-xl font-semibold">
          {t("suTroiDay")} – Mafia Sicily
        </h3>
        <p className="pt-5">{t("contentSuTroiDay")}</p>
      </div>
    </div>
  );
};

export default suTroiDay;
