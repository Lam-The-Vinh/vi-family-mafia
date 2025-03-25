"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";

const QuyTac: NextPage = () => {
  const t = useTranslate();

  return (
    <div className="mt-50 container mx-auto mb-15">
      <h1 className="text-5xl font-bold text-center">{t("quyTacTitle")}</h1>
      <ul style={{ listStyleType: 'disc' }} className="text-xl pt-5">
        <li>
          <span className="font-semibold">{t("rule1Title")}</span> – {t("rule1Content")}
        </li>
        <li>
          <span className="font-semibold">{t("rule2Title")}</span> – {t("rule2Content")}
        </li>
        <li>
          <span className="font-semibold">{t("rule3Title")}</span> – {t("rule3Content")}
        </li>
        <li>
          <span className="font-semibold">{t("rule4Title")}</span> – {t("rule4Content")}
        </li>
      </ul>
    </div>
  );
};

export default QuyTac;
