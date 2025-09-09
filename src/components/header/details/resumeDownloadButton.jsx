import React from "react";

export default function ResumeDownloadButton() {
  return (
    <div className="flex flex-col gap-5">
      <button
        className="bg-primary hover:bg-primaryHover text-neutral text-base rounded-full px-5 py-2
			flex  items-center "
      >
        دریافت رزومه
      </button>
    </div>
  );
}
