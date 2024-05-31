import React from "react";
import Community_Card from "../Community_Card";
import New_Blog_Card from "../New_Blog_Card";
import { HiUserGroup } from "react-icons/hi2";

function Communities() {
  return (
    <div className="p-10 bg-slate-100">
      <div className="flex items-center gap-5 md:w-[50%] m-auto mb-10">
        <div className="flex-1 border-t border-amber-900"></div>
        <h2 className="text-center font-bold text-xl text-amber-900 flex items-center gap-3">
          <span className="bg-amber-900 rounded-full p-2">
            <HiUserGroup className="text-white" />
          </span>
          المجتمعات النشطة
        </h2>
        <div className="flex-1 border-t border-amber-900"></div>
      </div>

      <div className="communities">
        <Community_Card />
        <Community_Card />
        <Community_Card />
        <div className="flex justify-center mb-7">
          <button className="bg-[#FFA800] text-white rounded-xl p-3 ">
            إطلع على المزيد ..
          </button>
        </div>
      </div>

      <div className="blogs">
        <div className="flex items-center gap-5 md:w-[50%] m-auto mb-6">
          <div className="flex-1 border-t border-amber-900"></div>
          <h2 className="text-center my-5 font-bold text-xl text-amber-900 flex items-center gap-3">
            <span className="bg-amber-900 rounded-full p-2">
              <HiUserGroup className="text-white" />
            </span>
            المدونات الحديثة
          </h2>
          <div className="flex-1 border-t border-amber-900"></div>
        </div>

        <div className="md:w-[80%] lg:w-[60%] m-auto">
          <New_Blog_Card />
        </div>
      </div>
    </div>
  );
}

export default Communities;
