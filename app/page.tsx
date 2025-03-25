import React from 'react';
import Hero from './component/Hero';
import Features from './component/Feature';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-50">
      <Hero />
      <Features />
    </main>
  );
}
