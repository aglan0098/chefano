import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/images/home_banner.png)" }}
    >
      <div className="absolute inset-1 top-0 left-0 right-0 bottom-0 bg-[#351f06da]"></div>

      <div className="md:flex justify-around items-center relative text-white py-10 md:py-16 px-10 gap-10">
        <div className="md:flex justify-between gap-8">
          <div className="flex items-center w-[30%]">
            <img className="w-[100%]" src="/images/logo.png" alt="logo" />
          </div>
          <div className="border-r border-white"></div>
          <ul className="font-light my-5">
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li className="my-2">
              <Link href="/who_we_are">من نحنُ</Link>
            </li>
            <li>
              <Link href="/courses">دورات الطبخ</Link>
            </li>
          </ul>

          <ul className="font-light my-5">
            <li>
              <Link href="/blog">المدونة</Link>
            </li>

            <li className="my-2">
              <Link href="/sell-your-course">بيع دوراتك معنا</Link>
            </li>
            <li>
              <Link href="/feedback">رأيك يهمنا</Link>
            </li>
          </ul>
        </div>

        <div className="social_icons text-lg mt-10 md:mt-0">
          <div className="flex justify-center gap-2 mb-4">
            <Link
              href="https://www.tiktok.com/@chefa_no?_t=8qoZ6nVRwTh&_r=1"
              className="bg-white rounded-md p-1"
              target="_blank"
            >
              <FaTiktok className="text-[#351f06da] fill-current" />
            </Link>
            <Link
              href="https://www.instagram.com/chefa_no/profilecard/?igsh=Z3Z1amFwMWNveDNx"
              className="bg-white rounded-md p-1"
              target="_blank"
            >
              <RiInstagramFill className="text-[#351f06da] fill-current" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="md:flex gap-4 justify-center text-white relative inset-1 mb-10 text-center"
        dir="ltr"
      >
        <Link href="/policies">
          <p>سياسة الخصوصية</p>
        </Link>
        <Link href="/terms&conditions">
          <p className="my-2 md:my-0">الشروط والأحكام</p>
        </Link>
        <p>© 2024 CHEFANO</p>
      </div>
    </footer>
  );
}

export default Footer;
