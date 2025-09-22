import Image from "next/image";

const skills = [
  { name: "docker", img: "/logo/logoSkill/do.png" },
  { name: "oracle", img: "/logo/logoSkill/oracle.png" },
  { name: "postman", img: "/logo/logoSkill/postman.png" },
  { name: "kubernetes", img: "/logo/logoSkill/l.png" },
  { name: "hibernate", img: "/logo/logoSkill/hibernate.png" },
  { name: "mysql", img: "/logo/logoSkill/mysql.svg" },
  { name: "github", img: "/logo/logoSkill/github.svg" },
  { name: "mongodb", img: "/logo/logoSkill/mongodb.svg" },
  { name: "git", img: "/logo/logoSkill/git.svg" },
  { name: "java", img: "/logo/logoSkill/java.png" },
  { name: "java", img: "/logo/logoSkill/java.png" },
  { name: "java", img: "/logo/logoSkill/java.png" },
];

export default function SkillsList() {
  return (
    <div className="max-w-[1150px] w-full mx-auto flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-primaryText-heading-light dark:text-primaryText-heading-dark truncate">
       
        مهارت ها
      </h3>
      <p
        className="text-sm pt-2 text-primaryText-secondaryText-light
       dark:text-primaryText-secondaryText-dark text-center "
      >
        مهارت ها، ابزار ها و تکنولوژی هایی که استفاده می کنم.
      </p>
      <ul className="m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {skills.map((item, index) => (
          <li
            key={index}
            className="w-44 h-20 flex items-center justify-center gap-2 border border-solid border-background-muted dark:border-background-mutedDark bg-background-default dark:bg-background-card-dark rounded-md shadow-sm p-2 "
          >
            <h2
              className="text-sm font-bold text-primaryText-heading-light dark:text-primaryText-heading-dark truncate"
              title={item.name}
            >
              {item.name}
            </h2>
            <div className="w-10 h-10 ">
              <Image
                src={item.img}
                alt={item.name}
                title={item.name}
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
