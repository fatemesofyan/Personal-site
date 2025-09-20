import React from 'react';

export default function ContactInfo() {
  return (
    <div className="mr-10 mb-8 flex flex-col gap-3 text-gray-700 dark:text-gray-300">
      <h3 className="text-lg font-bold text-primaryText-heading-light dark:text-primaryText-heading-dark">
        ارتباط با ما
      </h3>

      <p className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark hover:text-primaryHover dark:hover:text-primaryHover  cursor-pointer">
  <span className="font-semibold">تلفن:</span>{" "}
  <span dir="ltr">+98 912 194 5581</span>
</p>


      <p className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark  hover:text-primaryHover dark:hover:text-primaryHover  cursor-pointer">
        <span className="font-semibold">ایمیل:</span> info@example.com
      </p>

      <p className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark hover:text-primaryHover dark:hover:text-primaryHover  cursor-pointer">
        <span className="font-semibold">آدرس:</span> تهران، خیابان انقلاب، پلاک 123
      </p>

      <p className="text-lg text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark  hover:text-primaryHover dark:hover:text-primaryHover cursor-pointer">
        <span className="font-semibold">ساعات کاری:</span> شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر
      </p>

    
    </div>
  );
}
