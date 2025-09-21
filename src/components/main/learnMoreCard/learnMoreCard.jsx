import Image from "next/image";
import Button from "../../ui/ Button/ button";

export default function LearnMoreCard() {
  return (
    <div className=" m-5 flex flex-col md:flex-row  justify-around gap-6">
      <div className="w-[550px] flex flex-col items-center justify-center gap-4 ">
        <h3
          className="text-3xl font-bold text-primaryText-heading-light
        dark:text-primaryText-heading-dark max-w-md "
        >
          شغل رویایی خود را در برنامه نویسی به دست آورید
        </h3>

        <p
          className="text-lg text-primaryText-secondaryText-light
       dark:text-primaryText-secondaryText-dark text-center "
        >
          من به شما کمک میکنم تا مهارت خودتون رو به دست بیارید
        </p>

          <Button
          variant="secondary" shape="rounded"
            type="submit"
            className="w-40"
          >
            بیشتر بدانید
          </Button>
      </div>
      <div>
        <Image
          src="/image/learnmoreCard.png"
          alt="learnmoreCardImg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
