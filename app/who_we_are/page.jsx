import Image from "next/image";
import React from "react";
import Header from "../_components/Header";

function Who() {
  return (
    <>
      <Header />
      <div
        className="md:flex items-center justify-between p-10 md:p-28 bg-contain bg-top"
        style={{ backgroundImage: "url(/images/who/background.png)" }}
      >
        <div className="md:w-[60%] mb-10 md:mb-0">
          <h2 className="font-bold text-xl mb-6">من نحنُ :</h2>

          <p className="leading-7 text-lg">
            مجتمع يرحب بجميع المهتمين بالطبخ , سواء كانوا مبتدئين أو خبراء
            وتقديم أعــــمالهم بشـــــكل مجــــاني أو مدفــوع . نحن نهدف إلى
            تعزيز ثقافة الطهي وتبادل المعرفة , ونسعى لتمكين الجمــيع للتحضيـــر
            والإســتمتاع بوجبات شهية في منازلهم أو عمل مشاريع خاصة بهم .
          </p>
        </div>

        <div>
          <Image
            src="/images/who/vector.png"
            alt="vector"
            width={250}
            height={250}
            className="m-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Who;
