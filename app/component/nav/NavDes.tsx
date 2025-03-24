"use client";
import Link from "next/link";
import { useTranslate } from "react-polyglot";

const NavDes = () => {
  const t = useTranslate();

  return (
    <div className="w-full">
      <div className="mx-6 my-3 text-gray-700 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <img src="/logo-family.png" className="w-30" alt="" />
          </Link>
        </div>

        <div className="flex justify-between items-center gap-6">
          <Link href="/tieuSu" className="hover:text-gray-900">
          {t("tieuSu")}
          </Link>
          <Link href="/family" className="hover:text-gray-900">
          {t("thanhVien")}
          </Link>
          <Link href="/suTroiDay" className="hover:text-gray-900">
          {t("suTroiDay")}
          </Link>
          <Link href="/quyTac" className="hover:text-gray-900">
          {t("quiTac")}
          </Link>
          <Link href="/lienHe" className="hover:text-gray-900">
          {t("lienHe")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavDes;
