"use client";
import Link from "next/link";
import { useTranslate } from "react-polyglot";

const NavMobile = () => {
  const t = useTranslate();
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="flex flex-col space-y-3 p-4 text-gray-700">
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
  );
};

export default NavMobile;
