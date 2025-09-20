import React from "react";

export default function FooterLinks() {
  const links = ["محصولات", "درباره ما", "تماس با ما", "سوالات متداول", "قوانین و مقررات", "حریم خصوصی", "بلاگ"];


  const firstColumn = links.slice(0, 4);
  const secondColumn = links.slice(4);

  return (
    <div className="mr-10 mb-8 text-gray-700 dark:text-gray-300">
      <h3 className="mb-4 text-lg font-bold text-primaryText-heading-light dark:text-primaryText-heading-dark">
        لینک‌های مفید
      </h3>

      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          {firstColumn.map((link, index) => (
            <p
              key={index}
              className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark hover:text-primaryHover dark:hover:text-primaryHover cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {secondColumn.map((link, index) => (
            <p
              key={index}
              className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark hover:text-primaryHover dark:hover:text-primaryHover cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
