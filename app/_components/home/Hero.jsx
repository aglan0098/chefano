import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/home_banner.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="h-[60vh] sm:h-[70vh] md:h-[80vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#452E1B] opacity-30"></div>
      </div>
      <div className="relative -mt-16 sm:-mt-24 md:-mt-32 md:mb-10">
        <div className="p-5 sm:p-7 bg-white text-[#311A08] text-center m-auto rounded-3xl w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 drop-shadow-xl">
          <h2 className="font-bold text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem]">
            مرحبًا بك في عالم النكهات الرائعة والفن الشهي!
          </h2>

          <p className="mt-3 sm:mt-5 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
            ندعوك لإستكشاف أسرار المطبخ وتعلم فنون الطهي من خلال دوراتنا
            الممتعة.
            <br />
            سنأخذك في رحلة لإكتساب مهارات جديدة وإكتشاف وصفات فريدة، لتحول
            تجربتك في المطبخ إلى مغامرة لا تُنسى
          </p>

          <button className="bg-[#683220] text-white py-2 px-6 sm:px-9 rounded-3xl my-3 sm:my-5 text-[1rem] sm:text-[1.1rem]">
            انضم إلينا
          </button>

          <p className="text-[1rem] sm:text-[1.1rem]">
            ودعنا نشاركك أسرار الطهي الإحترافية ونرافقك في رحلتك لتحضير أطباق
            لذيذة بكل ثقة وإبداع.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
