"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";

import { IoPerson } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <header className="bg-[#452E1B] text-white">
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

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/who_we_are"
                  >
                    من نحنُ
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/courses"
                  >
                    دورات الطبخ
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/blog"
                  >
                    المدونة
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/sell-your-course"
                  >
                    بيع دوراتك معنا
                  </Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link
                    className="text-white transition hover:text-yellow-500"
                    href="/feedback"
                  >
                    رأيك يهمنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-5 items-center">
              {user ? (
                <button
                  className="text-3xl text-white focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  <IoPerson />
                </button>
              ) : (
                <Link href="/sign-in">تسجيل الدخول</Link>
              )}

              <div className="hidden sm:flex">
                <Link
                  className="text-3xl text-white"
                  href="https://wa.me/+966534148719"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {isProfileMenuOpen && (
              <div className="absolute p-4 left-10 mt-48 bg-amber-950 text-main rounded-lg shadow-lg z-10 text-lg">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-amber-900 transition-all"
                  onClick={toggleProfileMenu}
                >
                  <CgProfile />
                  ملفي الشخصي
                </Link>
                <hr />
                <button
                  className="w-full text-right flex items-center gap-2 px-4 py-2 hover:bg-amber-900"
                  onClick={() => {
                    signOut();
                    toggleProfileMenu();
                  }}
                >
                  <FiLogOut />
                  تسجيل الخروج
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#452E1B] text-white">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-6 text-sm p-4">
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/"
                >
                  الرئيسية
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/who_we_are"
                >
                  من نحنُ
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/courses"
                >
                  دورات الطبخ
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/blog"
                >
                  المدونة
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/sell-your-course"
                >
                  بيع دوراتك معنا
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  className="text-white transition hover:text-yellow-500"
                  href="/feedback"
                >
                  رأيك يهمنا
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
