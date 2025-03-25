"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";
import RichText from "../component/RichText";

const suTroiDay: NextPage = () => {
  const t = useTranslate();
  return (
    <div className="container mx-auto mb-15">
      <h1 className="text-5xl font-bold mt-50 text-center">
        {t("viFamilyRiseTitle")}
      </h1>

      <h2 className="text-3xl text-center pt-5 font-semibold">
        {t("chapter1Title")}
      </h2>
      <RichText content={t("chapter1Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter2Title")}
      </h2>
      <RichText content={t("chapter2Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter3Title")}
      </h2>
      <RichText content={t("chapter3Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter4Title")}
      </h2>
      <RichText content={t("chapter4Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter5Title")}
      </h2>
      <RichText content={t("chapter5Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter6Title")}
      </h2>
      <RichText content={t("chapter6Content")} />

      <h2 className="text-3xl text-center pt-10 font-semibold">
        {t("chapter7Title")}
      </h2>
      <RichText content={t("chapter7Content")} />
    </div>
  );
};

export default suTroiDay;
