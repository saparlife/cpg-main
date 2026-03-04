"use client";

import Image from "next/image";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";
import resolveText from "../utils/resolveText";

const defaultForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactForm({ className = "" }) {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultForm);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      setError(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || t("contact.error"));
        return;
      }
      alert(t("contact.thank_you"));
      setFormData(defaultForm);
    } catch (err) {
      setError(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen text-white p-6 ${className}`}>
      <div className="max-w-[1758px] mx-auto px-5 py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Column - 60% */}
          <div className="lg:w-3/5 relative">
            <div className="absolute bottom-[-100px] z-40">
              <Image
                src="/images/monkey.png"
                alt="Monkey"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-xl"
              style={{ backgroundImage: "url('/images/shape3.svg')" }}
            />
            <div className="relative z-10 p-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-7xl font-black uppercase text-parrot-1100 font-gothamultra">
                  {t("contact.lets")}
                </h2>
                <h3 className="text-8xl font-black uppercase text-white font-gothamultra">
                  {t("contact.create")}
                </h3>
                <div className="text-right">
                  <h3 className="text-3xl font-black uppercase text-white/70 font-gothamultra">
                    {t("contact.together")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:w-2/5">
            <div className="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="landing-name"
                    className="block text-white font-gothammedium text-sm mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    id="landing-name"
                    type="text"
                    name="name"
                    placeholder={t("contact.name_placeholder")}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-[#2C2C2C] text-white placeholder:text-[#565656] rounded-lg border-none outline-none focus:ring-2 focus:ring-parrot-1100 font-gothammedium"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="landing-email"
                    className="block text-white font-gothammedium text-sm mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="landing-email"
                    type="email"
                    name="email"
                    placeholder="abc@mail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-[#2C2C2C] text-white placeholder:text-[#565656] rounded-lg border-none outline-none focus:ring-2 focus:ring-parrot-1100 font-gothammedium"
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="landing-service"
                    className="block text-white font-gothammedium text-sm mb-2"
                  >
                    {t("contact.service")}
                  </label>
                  <select
                    id="landing-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 pr-12 bg-[#2C2C2C] text-white rounded-lg border-none outline-none focus:ring-2 focus:ring-parrot-1100 font-gothammedium appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-[#565656]">
                      {t("contact.services_placeholder")}
                    </option>
                    <option value="events" className="text-white">
                      {t("services.events.name")}
                    </option>
                    <option value="digital" className="text-white">
                      {t("services.digital.name")}
                    </option>
                    <option value="content" className="text-white">
                      {t("services.content.name")}
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white mt-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="landing-message"
                    className="block text-white font-gothammedium text-sm mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="landing-message"
                    name="message"
                    placeholder={t("contact.message_placeholder")}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-[#2C2C2C] text-white placeholder:text-[#565656] rounded-lg border-none outline-none focus:ring-2 focus:ring-parrot-1100 font-gothammedium resize-vertical"
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm font-gothammedium">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-4 bg-parrot-1100 text-black font-black uppercase font-gotham text-lg rounded-lg hover:bg-parrot-1100/90 transition-colors duration-300"
                >
                  {loading && (
                    <LoaderCircle
                      className="inline-block mr-2 animate-spin text-black"
                      size={24}
                    />
                  )}
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
