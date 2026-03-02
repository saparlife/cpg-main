"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/useI18n";

export default function Header() {
  const { nextLanguage, changeLanguage, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChangeLanguage = (e) => {
    e.preventDefault();
    changeLanguage(nextLanguage);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex justify-end mb-4">
        <img src="/images/header-top.svg" alt="" className="h-[35px]" />
      </div>
      <header className="3xl:py-[25px] xl:py-14 py-2">
        <div className="max-w-[1760px] px-5 mx-auto w-full">
          <div className="flex items-start justify-between">
            <div>
              <Link href="/" className="inline-flex">
                <Image
                  src="/logo@lime.svg"
                  alt="CPG Media Group Logo"
                  width={200}
                  height={50}
                  priority
                  className="xl:h-auto lg:h-[70px] md:h-[60px] h-11 sm:h-[50px] w-auto"
                />
              </Link>
            </div>
            <div className="flex justify-end items-center">
              {/* Burger Menu for Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col space-y-1 p-2"
                aria-label="Toggle menu"
              >
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
                <span className="block w-8 h-1 bg-white"></span>
              </button>
              {/* Desktop Menu */}
              <div className="hidden lg:flex justify-end items-center">
                <Link
                  href="/#services"
                  className="mr-4 lg:mr-12 xl:mr-16 2xl:mr-20 text-lg sm:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-2xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
                >
                  {t("header.services")}
                </Link>
                <Link
                  href="/#cases"
                  className="mr-4 lg:mr-12 xl:mr-16 2xl:mr-20 text-lg sm:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-2xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
                >
                  {t("header.cases")}
                </Link>
                <Link
                  onClick={onChangeLanguage}
                  href="#"
                  className="mr-4 lg:mr-12 xl:mr-16 2xl:mr-20 text-lg sm:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-2xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
                >
                  {nextLanguage.toUpperCase()}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-[37.5px] h-11 sm:h-14 lg:h-[67px] 2xl:h-[75px] min-w-[160px] sm:min-w-[225px] lg:min-w-[280px] xl:min-w-[315px] 2xl:min-w-[350px] bg-parrot-1100 flex items-center justify-center gap-3 lg:gap-5 text-lg sm:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-2xl font-medium text-black-1100 font-gotham uppercase hover:text-white hover:bg-transparent border border-solid border-transparent hover:border-parrot-1100 group"
                >
                  {t("header.contacts")}
                  <span>
                    <Image
                      src="/images/contact-icon.svg"
                      alt="Contact"
                      width={40}
                      height={40}
                      className="3xl:h-[20px] h-5 sm:h-6 lg:h-8 xl:h-10 w-auto group-hover:invert-100"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black z-[100002] lg:hidden transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-4 right-4">
            <button onClick={closeMenu} className="text-white text-3xl font-bold" aria-label="Close menu">
              ×
            </button>
          </div>
          <div className="flex flex-col items-center pt-16 space-y-8 px-5">
            <Image
              src="/logo@lime.svg"
              alt="CPG Media Group Logo"
              width={200}
              height={50}
              className="h-16 w-auto mb-8"
            />
            <Link
              href="/#services"
              onClick={closeMenu}
              className="text-3xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
            >
              {t("header.services")}
            </Link>
            <Link
              href="/#cases"
              onClick={closeMenu}
              className="text-3xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
            >
              {t("header.cases")}
            </Link>
            <Link
              onClick={(e) => {
                onChangeLanguage(e);
                closeMenu();
              }}
              href="#"
              className="text-3xl font-medium text-white font-gotham uppercase hover:text-parrot-1100"
            >
              {nextLanguage.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-[37.5px] h-16 min-w-[250px] bg-parrot-1100 flex items-center justify-center gap-3 text-3xl font-medium text-black-1100 font-gotham uppercase hover:text-white hover:bg-transparent border border-solid border-transparent hover:border-parrot-1100 group"
            >
              {t("header.contacts")}
              <span>
                <Image
                  src="/images/contact-icon.svg"
                  alt="Contact"
                  width={40}
                  height={40}
                  className="3xl:h-[20px] h-5 sm:h-6 lg:h-8 xl:h-10 w-auto group-hover:invert-100"
                />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
