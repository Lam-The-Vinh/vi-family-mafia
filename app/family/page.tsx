"use client";
import { NextPage } from "next";
import { useTranslate } from "react-polyglot";
import RichText from "../component/RichText"; // Điều chỉnh đường dẫn import cho phù hợp

const Family: NextPage = () => {
  const t = useTranslate();

  return (
    <div className="container mx-auto mb-15">
      {/* Tiêu đề trang */}
      <h1 className="text-5xl font-bold mt-50 text-center">
        {t("familyTitle")}
      </h1>

      {/* Phần Người sáng lập & lãnh đạo */}
      <section className="mt-40">
        <h2 className="text-3xl text-center pb-10">{t("founderAndLeader")}</h2>
        <div className="flex pt-30 gap-5 text-center">
          <div>
            <h3 className="text-3xl">{t("leVi")}</h3>
            <p className="text-xl text-red-500">{t("leViSubtitle")}</p>
            <RichText content={t("leViDescription")} />
          </div>
          <img src="/le-vi.png" className="mx-auto pt-4" alt="Lê Vi" />
        </div>

        {/* Ti Vi */}
        <div className="pt-30 flex gap-5 text-center">
        <img src="/ti-vi.png" className="mx-auto pt-4" alt="Ti Vi" />
          <div>
          <h3 className="text-3xl">{t("tiVi")}</h3>
          <p className="text-xl text-red-500">{t("tiViSubtitle")}</p>
          <RichText content={t("tiViDescription")} />
          </div>
        </div>
      </section>

      {/* Phần Thành viên chủ chốt */}
      <section className="mt-40 text-center">
        <h2 className="text-5xl text-center">{t("keyMembers")}</h2>

        {/* Hạ Vi */}
        <div className="pt-30 flex gap-5">
          <div>
          <h3 className="text-3xl">{t("haVi")}</h3>
          <p className="text-xl text-red-500">{t("haViSubtitle")}</p>
          <RichText content={t("haViDescription")} />
          </div>
          <img src="/ha-vi.png" className="mx-auto pt-4" alt="Hạ Vi" />
        </div>

        {/* Rút Vi */}
        <div className="pt-30 flex gap-5">
        <img src="/rut-vi.png" className="mx-auto pt-4" alt="Rút Vi" />
          <div>
          <h3 className="text-3xl">{t("rutVi")}</h3>
          <p className="text-xl text-red-500">{t("rutViSubtitle")}</p>
          <RichText content={t("rutViDescription")} />
          </div>
        </div>

        {/* Tinh Vi */}
        <div className="pt-30 flex gap-5">
          <div>
          <h3 className="text-3xl">{t("tinhVi")}</h3>
          <p className="text-xl text-red-500">{t("tinhViSubtitle")}</p>
          <RichText content={t("tinhViDescription")} />
          </div>
          <img src="/tinh-vi.png" className="mx-auto pt-4" alt="Tinh Vi" />
        </div>

        {/* Lu Vi */}
        <div className="pt-30 flex gap-5">
        <img src="/lu-vi.png" className="mx-auto pt-4" alt="Lu Vi" />
          <div>
          <h3 className="text-3xl">{t("luVi")}</h3>
          <p className="text-xl text-red-500">{t("luViSubtitle")}</p>
          <RichText content={t("luViDescription")} />
          </div>
        </div>

        {/* Triệu Vi */}
        <div className="pt-30 flex gap-5">
          <div>
          <h3 className="text-3xl">{t("trieuVi")}</h3>
          <p className="text-xl text-red-500">{t("trieuViSubtitle")}</p>
          <RichText content={t("trieuViDescription")} />
          </div>
          <img src="/trieu-vi.png" className="mx-auto pt-4" alt="Triệu Vi" />
        </div>

        {/* Lâm Vi */}
        <div className="pt-30 flex gap-5">
        <img src="/lam-vi.png" className="mx-auto pt-4" alt="Lâm Vi" />
          <div>
          <h3 className="text-3xl">{t("lamVi")}</h3>
          <p className="text-xl text-red-500">{t("lamViSubtitle")}</p>
          <RichText content={t("lamViDescription")} />
          </div>
        </div>

        {/* Sốt Siêu Vi */}
        <div className="pt-30 flex gap-5">
          <div>
          <h3 className="text-3xl">{t("sotSieuVi")}</h3>
          <p className="text-xl text-red-500">{t("sotSieuViSubtitle")}</p>
          <RichText content={t("sotSieuViDescription")} />
          </div>
          <img src="/sot-si-vi.png" className="mx-auto pt-4" alt="Sốt Siêu Vi" />
        </div>

        {/* Sa Vi */}
        <div className="pt-30 flex gap-5">
        <img src="/sa-vi.png" className="mx-auto pt-4" alt="Sa Vi" />
          <div>
          <h3 className="text-3xl">{t("saVi")}</h3>
          <p className="text-xl text-red-500">{t("saViSubtitle")}</p>
          <RichText content={t("saViDescription")} />
          </div>
        </div>

        {/* La Vi */}
        <div className="pt-30 flex gap-5">
          <div>
          <h3 className="text-3xl">{t("laVi")}</h3>
          <p className="text-xl text-red-500">{t("laViSubtitle")}</p>
          <RichText content={t("laViDescription")} />
          </div>

          <img src="/la-vi.png" className="mx-auto pt-4" alt="La Vi" />
        </div>

        {/* Cô Vi */}
        <div className="pt-30 flex gap-5">
        <img src="/co-vi.png" className="mx-auto pt-4" alt="Cô Vi" />
          <div>
          <h3 className="text-3xl">{t("coVi")}</h3>
          <p className="text-xl text-red-500">{t("coViSubtitle")}</p>
          <RichText content={t("coViDescription")} />
          </div>
        </div>

        {/* Minh Vi */}
        <div className="pt-30">
          <h3 className="text-3xl">{t("minhVi")}</h3>
          <p className="text-xl text-red-500">{t("minhViSubtitle")}</p>
          <RichText content={t("minhViDescription")} />
          <img src="/minh-vi.png" className="mx-auto pt-4" alt="Minh Vi" />
        </div>
      </section>
    </div>
  );
};

export default Family;
