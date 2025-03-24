"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { I18n } from "react-polyglot";
import en from "@/app/lang/en";
import vi from "@/app/lang/vi";

type Locale = "en" | "vi";
interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

const getMessages = (locale: Locale) => (locale === "vi" ? vi : en);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  // Lấy ngôn ngữ từ localStorage khi load trang
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale) setLocale(savedLocale);
  }, []);

  // Cập nhật ngôn ngữ và lưu vào localStorage
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <I18n locale={locale} messages={getMessages(locale)}>
        {/* Bọc children bằng React Fragment để tránh lỗi */}
        <>{children}</>
      </I18n>
    </I18nContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
