"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#452E1B] text-white absolute w-full bg-opacity-50 backdrop-blur-xl z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/who_we_are"
                  >
                    من نحنُ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/courses"
                  >
                    دورات الطبخ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/blog"
                  >
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/chefs"
                  >
                    مجتمع الطباخين
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/sell-your-course"
                  >
                    بيع دوراتك معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-5">
              <Link className="text-3xl text-white" href="/profile">
                <IoPerson />
              </Link>
              <div className="hidden sm:flex">
                <Link className="text-3xl text-white" href="#">
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl text-white">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-6 text-sm p-4">
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/who_we_are"
                >
                  من نحنُ
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/courses"
                >
                  دورات الطبخ
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/blog"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/chefs"
                >
                  مجتمع الطباخين
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/sell-your-course"
                >
                  بيع دوراتك معنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
