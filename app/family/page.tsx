"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";

const Family: NextPage = () => {
  const t = useTranslate();

  return (
    <div className="container mx-auto mb-15">
      {/* Tiêu đề trang */}
      <h1 className="text-5xl font-bold mt-50 text-center">
        {t("familyTitle")}
      </h1>

      {/* Phần Người sáng lập & lãnh đạo */}
      <section className="mt-40 text-center">
        <h2 className="text-3xl text-center">{t("founderAndLeader")}</h2>
        <div className="pt-10">
          <h3 className="text-3xl">{t("leVi")}</h3>
          <p className="text-xl text-red-500">{t("leViSubtitle")}</p>
          <p className="pt-5">{t("leViDescription")}</p>
          <img src="/le-vi.png" className="mx-auto pt-4" alt="Lê Vi" />
        </div>

        {/* Ti Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("tiVi")}</h3>
          <p className="text-xl text-red-500">{t("tiViSubtitle")}</p>
          <p className="pt-5">{t("tiViDescription")}</p>
          <img src="/ti-vi.png" className="mx-auto pt-4" alt="Ti Vi" />
        </div>
      </section>

      {/* Phần Thành viên chủ chốt */}
      <section className="mt-40 text-center">
        <h2 className="text-5xl text-center">{t("keyMembers")}</h2>

        {/* Hạ Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("haVi")}</h3>
          <p className="text-xl text-red-500">{t("haViSubtitle")}</p>
          <p className="pt-5">{t("haViDescription")}</p>
          <img src="/ha-vi.png" className="mx-auto pt-4" alt="Hạ Vi" />
        </div>

        {/* Rút Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("rutVi")}</h3>
          <p className="text-xl text-red-500">{t("rutViSubtitle")}</p>
          <p className="pt-5">{t("rutViDescription")}</p>
          <img src="/rut-vi.png" className="mx-auto pt-4" alt="Rút Vi" />
        </div>

        {/* Tinh Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("tinhVi")}</h3>
          <p className="text-xl text-red-500">{t("tinhViSubtitle")}</p>
          <p className="pt-5">{t("tinhViDescription")}</p>
          <img src="/tinh-vi.png" className="mx-auto pt-4" alt="Tinh Vi" />
        </div>

        {/* Lu Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("luVi")}</h3>
          <p className="text-xl text-red-500">{t("luViSubtitle")}</p>
          <p className="pt-5">{t("luViDescription")}</p>
          <img src="/lu-vi.png" className="mx-auto pt-4" alt="Lu Vi" />
        </div>

        {/* Triệu Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("trieuVi")}</h3>
          <p className="text-xl text-red-500">{t("trieuViSubtitle")}</p>
          <p className="pt-5">{t("trieuViDescription")}</p>
          <img src="/trieu-vi.png" className="mx-auto pt-4" alt="Triệu Vi" />
        </div>

        {/* Lâm Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("lamVi")}</h3>
          <p className="text-xl text-red-500">{t("lamViSubtitle")}</p>
          <p className="pt-5">{t("lamViDescription")}</p>
          <img src="/lam-vi.png" className="mx-auto pt-4" alt="Lâm Vi" />
        </div>

        {/* Sốt Siêu Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("sotSieuVi")}</h3>
          <p className="text-xl text-red-500">{t("sotSieuViSubtitle")}</p>
          <p className="pt-5">{t("sotSieuViDescription")}</p>
          <img
            src="/sot-si-vi.png"
            className="mx-auto pt-4"
            alt="Sốt Siêu Vi"
          />
        </div>

        {/* Sa Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("saVi")}</h3>
          <p className="text-xl text-red-500">{t("saViSubtitle")}</p>
          <p className="pt-5">{t("saViDescription")}</p>
          <img src="/sa-vi.png" className="mx-auto pt-4" alt="Sa Vi" />
        </div>

        {/* La Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("laVi")}</h3>
          <p className="text-xl text-red-500">{t("laViSubtitle")}</p>
          <p className="pt-5">{t("laViDescription")}</p>
          <img src="/la-vi.png" className="mx-auto pt-4" alt="La Vi" />
        </div>

        {/* Cô Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("coVi")}</h3>
          <p className="text-xl text-red-500">{t("coViSubtitle")}</p>
          <p className="pt-5">{t("coViDescription")}</p>
          <img src="/co-vi.png" className="mx-auto pt-4" alt="Cô Vi" />
        </div>

        {/* Minh Vi */}
        <div className="pt-10">
          <h3 className="text-3xl">{t("minhVi")}</h3>
          <p className="text-xl text-red-500">{t("minhViSubtitle")}</p>
          <p className="pt-5">{t("minhViDescription")}</p>
          <img src="/minh-vi.png" className="mx-auto pt-4" alt="Minh Vi" />
        </div>
      </section>
    </div>
  );
};

export default Family;
