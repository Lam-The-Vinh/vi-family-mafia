"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavDes from "../component/nav/NavDes";
import NavMobile from "../component/nav/NavMobile";
import { useI18n } from "@/lib/i18n";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === "vi" ? "en" : "vi");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50">
      <div className="container mx-auto">
        <div className="hidden md:flex">
          <NavDes />
          <button
            onClick={toggleLanguage}
            className="bg-blue-500 text-white px-4 rounded-lg items-center gap-2 h-10 my-auto"
          >
            {locale === "en" ? "Việt" : "English"}
          </button>
        </div>

        <div className="flex justify-between md:hidden">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <img src="/logo-family.png" className="w-20" alt="" />
          </Link>
          <button
            onClick={toggleLanguage}
            className="p-2 h-10 my-auto bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {locale === "vi" ? "English" : "Việt"}
          </button>
          <button className="text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && <NavMobile />}
    </header>
  );
};

export default Header;
