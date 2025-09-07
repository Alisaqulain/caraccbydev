"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Franchise() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  useEffect(() => {
    const observers = [];

    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
      return observer;
    };

    createObserver(sectionRef1, setIsVisible1);
    createObserver(sectionRef2, setIsVisible2);
    createObserver(sectionRef3, setIsVisible3);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const benefits = [
    {
      title: "Trusted Brand",
      description:
        "Leverage our established reputation in automotive accessories and services.",
    },
    { title: "High Demand", description: "Rapidly growing market across towns and cities." },
    {
      title: "End-to-End Support",
      description: "Training, setup guidance, supplier onboarding, and marketing assets.",
    },
    {
      title: "Profitable Products",
      description: "Curated, high-margin product mix with repeat customers.",
    },
  ];

  const steps = [
    { step: 1, title: "Submit Interest", desc: "Fill the short form to contact our team." },
    { step: 2, title: "Discussion", desc: "We assess location, budget, and timelines." },
    { step: 3, title: "Onboarding", desc: "Training, supply setup, and store launch plan." },
    { step: 4, title: "Grand Opening", desc: "Marketing push and continuous support." },
  ];

  return (
    <>
      <Head>
        <title>Open a Franchise | The Accessory Center Muzaffarnagar</title>
        <meta
          name="description"
          content="Start The Accessory Center franchise in your town. Get training, supplier onboarding, and marketing support to launch a profitable automotive accessories store."
        />
        <meta
          name="keywords"
          content="car accessories franchise, open franchise in my town, automotive franchise India, The Accessory Center franchise"
        />
        <link rel="canonical" href="https://theaccessorycentermzn.in/franchise" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Franchise | The Accessory Center",
              description:
                "Open The Accessory Center franchise in your city with full support.",
              url: "https://theaccessorycentermzn.in/franchise",
              mainEntity: {
                "@type": "Organization",
                name: "The Accessory Center Muzaffarnagar",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Hero */}
        <div className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
              Start Our Franchise In Your City
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Partner with a trusted brand and launch a profitable automotive accessories store.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/franchise/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us To Get Started
              </Link>
              <a
                href="tel:7456886910"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Call: 7456886910
              </a>
            </div>
          </div>
        </div>

        {/* Why Franchise */}
        <div
          ref={sectionRef1}
          className={`py-16 bg-gray-900 transition-all duration-700 ${
            isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Partner With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{b.title}</h3>
                  <p className="text-gray-300">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div
          ref={sectionRef2}
          className={`py-16 bg-gray-800 transition-all duration-700 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-red-300 font-bold text-4xl mb-2">{s.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={sectionRef3}
          className={`py-16 bg-red-600 transition-all duration-700 ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Take Franchise In Your Town</h2>
            <p className="text-xl text-red-100 mb-8">
              Fill the form and our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/franchise/contact"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <a
                href="mailto:shazizaidi52058@gmail.com?subject=Franchise%20Inquiry&body=I%20am%20interested%20in%20opening%20a%20franchise%20in%20my%20town."
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx global>{`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
        `}</style>
      </div>
    </>
  );
}
