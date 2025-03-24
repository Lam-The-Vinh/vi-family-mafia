"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";

const tieuSu: NextPage = () => {
  const t = useTranslate();
  return (
    <div className="container mx-auto mb-15">
      <h1 className="text-5xl font-bold mt-50 text-center">
      {t("titleTieuSu")}
      </h1>
      <h2 className="text-3xl text-center pt-5 font-semibold">
        "{t("danhDu")}"
      </h2>
      <div className=" pt-5">
        <h3 className="text-xl font-semibold">
        {t("titleTieuSu")} – Mafia Sicily
        </h3>
        <p className="pt-5">
        {t("contentTieuSu")}
        </p>
      </div>
    </div>
  );
};
export default tieuSu;
