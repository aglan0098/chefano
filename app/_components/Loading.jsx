import React from "react";

function Loading() {
  return (
    <div class="flex justify-center items-center px-20 py-10">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main"></div>
    </div>
  );
}

export default Loading;
