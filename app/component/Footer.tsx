"use client";
import { useTranslate } from "react-polyglot";

const Footer = () => {
    const t = useTranslate();
    return(
        <footer className="absolute items-center text-red-500 bg-black bottom-0 w-full text-center">
            <div className="p-4">
            <p className="text-sm md:text-xl lg:text-3xl">{t("chamNgon")}</p>
            </div>
        </footer>
    )
}
export default Footer;