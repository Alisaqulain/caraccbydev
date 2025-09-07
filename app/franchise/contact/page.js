"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function FranchiseContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For now, open mail client with prefilled details. Can be replaced with API later.
      const subject = encodeURIComponent("Franchise Interest – The Accessory Center");
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}\nMessage: ${form.message}`
      );
      window.location.href = `mailto:shazizaidi52058@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Take Franchise In Your Town | Contact Us</title>
        <meta
          name="description"
          content="Contact us to open The Accessory Center franchise in your town. Share your details and our team will reach out within 24 hours."
        />
        <link rel="canonical" href="https://theaccessorycentermzn.in/franchise/contact" />
      </Head>

      <div className="min-h-screen bg-gray-900">
        <div className="bg-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Take Franchise In Your Town
            </h1>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Fill this quick form and we will contact you within 24 hours. You can also call or
              WhatsApp us directly.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">Thanks for reaching out!</h2>
                <p className="text-gray-300">
                  Your mail client should have opened. If not, please email us at
                  {" "}
                  <a className="text-red-400 underline" href="mailto:shazizaidi52058@gmail.com">
                    shazizaidi52058@gmail.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white rounded p-3 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white rounded p-3 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white rounded p-3 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">City / Location</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white rounded p-3 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your city"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 text-white rounded p-3 outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us about your plan, timeline and investment range"
                  />
                </div>
                <div className="md:col-span-2 flex gap-3">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Send Details
                  </button>
                  <Link
                    href="/franchise"
                    className="border border-gray-500 text-gray-200 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Back to Franchise
                  </Link>
                </div>
              </form>
            )}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg space-y-4 h-fit">
            <h3 className="text-xl font-semibold text-white">Other Ways To Contact</h3>
            <a
              href="tel:7456886910"
              className="block bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition"
            >
              Call: 7456886910
            </a>
            <a
              href="https://wa.me/917456886910"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition"
            >
              WhatsApp: +91 7456886910
            </a>
            <a
              href="mailto:shazizaidi52058@gmail.com?subject=Franchise%20Inquiry"
              className="block bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition"
            >
              Email: shazizaidi52058@gmail.com
            </a>
            <div className="pt-2 text-gray-300 text-sm">
              Office: The Accessory Center, Muzaffarnagar, UP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


