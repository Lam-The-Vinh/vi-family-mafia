"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";
import RichText from "../component/RichText";

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
      <div className="pt-5">
        <h3 className="text-xl font-semibold">
          {t("titleTieuSu")} – Mafia Sicily
        </h3>
        <RichText content={t("contentTieuSu")} />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-semibold">{t("hanhTrinh")}</h3>
        <RichText content={t("contentHanhTrinh")} />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-semibold">{t("nguyenTac")}</h3>
        <RichText content={t("contentNguyenTac")} />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-semibold">{t("cauTruc")}</h3>
        <RichText content={t("contentCauTruc")} />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-semibold">{t("diSan")}</h3>
        <RichText content={t("contentDiSan")} />
      </div>
      <div className="py-5">
        <h3 className="text-xl font-semibold">{t("guongMat")}</h3>
        <RichText content={t("contentGuongMat")} />
      </div>
      <div className="border"></div>
      <div className="py-5">
        <RichText content={t("contentFooter")} />
      </div>
    </div>
  );
};
export default tieuSu;
