"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslate } from "react-polyglot";

const featuresData = [
  {
    titleKey: 'featureFamilyTitle',
    descriptionKey: 'featureFamilyDescription',
    icon: '👥',
    link: '/family',
  },
  {
    titleKey: 'featureRiseTitle',
    descriptionKey: 'featureRiseDescription',
    icon: '🎯',
    link: '/suTroiDay',
  },
  {
    titleKey: 'featureBiographyTitle',
    descriptionKey: 'featureBiographyDescription',
    icon: '🕵️‍♂️',
    link: '/tieuSu',
  },
];

export default function Features() {
  const t = useTranslate();
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          {t("featuresSectionTitle")}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Link href={feature.link} key={index} className="block">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">
                  {t(feature.titleKey)}
                </h4>
                <p>{t(feature.descriptionKey)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
