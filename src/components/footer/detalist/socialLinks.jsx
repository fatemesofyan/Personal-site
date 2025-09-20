import React from "react";
import Logo from "../../ui/logo/logo";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="pt-24 mr-10 ml-10 border-b border-gray-300 dark:border-gray-500">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row justify-center items-center gap-3 ">
          <h2 className="text-lg font-semibold text-primaryText-heading-light dark:text-primaryText-heading-dark">
            ما رو دنبال کنید
          </h2>

          <div className="group p-1.5 cursor-pointer rounded-full hover:bg-background-muted transition-colors">
            <Github className="w-6 h-6 text-primaryText-secondaryText-light dark:text-primaryText-heading-dark group-hover:text-primaryHover" />
          </div>

          <div className="group p-1.5 cursor-pointer rounded-full hover:bg-background-muted transition-colors">
            <Linkedin className="w-6 h-6 text-primaryText-secondaryText-light dark:text-primaryText-heading-dark group-hover:text-primaryHover" />
          </div>

          <div className="group p-1.5 cursor-pointer rounded-full hover:bg-background-muted transition-colors">
            <Instagram className="w-6 h-6 text-primaryText-secondaryText-light dark:text-primaryText-heading-dark group-hover:text-primaryHover" />
          </div>
        </div>

        <Logo />
      </div>
    </div>
  );
}
