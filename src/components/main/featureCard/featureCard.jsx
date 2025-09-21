import Image from "next/image";
import Button from "../../ui/ Button/ button";

export default function FeatureCard() {
  return (
    <div className=" m-5 flex flex-col md:flex-row  justify-around gap-6">
      <div>
        <Image
          src="/image/programmingimg.png"
          alt="programming"
          width={400}
          height={400}
        />
      </div>
      <div className="w-[550px] flex flex-col items-center justify-center gap-4 ">
        <h3
          className="text-3xl font-bold text-primaryText-heading-light
            dark:text-primaryText-heading-dark max-w-md "
        >
          مطالبی که خواندنش موثر است
        </h3>
        <p
          className="text-lg text-primaryText-secondaryText-light
           dark:text-primaryText-secondaryText-dark text-center "
        >
          اینجا سعی میکنیم به روز ترین و بهرتین مقالات رو باهم بخونیم با ثبت
          ایمیل عضو تیم ما شوید.
        </p>
      
        <div className="flex flex-row justify-center items-center gap-5">
          <Button
            variant="secondary"
            shape="rounded"
            type="submit"
            className="w-40"
          >
            وبلاگ
          </Button>
          <Button
            variant="primary"
            shape="rounded"
            type="submit"
            className="w-40"
          >
            وارد شوید
          </Button>
        </div>
      </div>
    </div>
  );
}
