import Navbar from "./details/navbar";
import ResumeDownloadButton from "./details/resumeDownloadButton";

import ThemeToggleButton from "./details/themeToggleButton";
export default function HeaderSite() {
  return (
    <div
      className="bg-background-default dark:bg-background-dark dark:bg-card-dark text-black
		 dark:text-neutral border-b-[0.5px] border-background-muted
		  dark:border-background-mutedDark p-2 pl-3 pr-3
			shadow-sm shadow-black/10 flex flex-row items-center justify-between"
    >
      <div className="flex items-center gap-10">
        <Navbar />
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggleButton />
        <ResumeDownloadButton />
				
      </div>
    </div>
  );
}
