export interface Props {
  id: number;
  slug?: string;
  title: string;
  desc?: string;
  tag?: string;
  price?: number;
  grades?: string[];
  thumbnail: string;
  isPremium?: boolean;
  isLiveNow?: boolean;
  isUnlocked?: boolean;
  conclusionDate?: string;
  scheduledDateAndTime?: string;
  theme: "green" | "blue" | "gold";
  difficultyLevel?: "ease" | "medium" | "hard";
  type:
    | "help"
    | "video"
    | "comic"
    | "course"
    | "challange"
    | "discover"
    | "current:live"
    | "upcoming:live"
    | "recorded:live";
}

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";

const ContentCard: React.FC<Props> = ({
  id,
  type,
  title,
  desc,
  price,
  theme,
  grades,
  thumbnail,
  isPremium,
  isUnlocked,
  conclusionDate,
  scheduledDateAndTime,
}) => {
  const hrefUrl = generateHref(type, id);

  return (
    <Link
      href={hrefUrl}
      className="overflow-hidden relative grid group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md "
    >
      <div id="wrapper" className="bg-white font-heading">
        <Header
          type={type}
          title={title}
          thumbnail={thumbnail}
          isPremium={isPremium}
        />

        <section
          id="main"
          className="md:p-5 p-4 bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 "
        >
          {conclusionDate && <DateTag value={conclusionDate} />}
          {scheduledDateAndTime && <DateTag value={scheduledDateAndTime} />}

          <h2 className="font-medium !font-amar md:text-xl text-md leading-6 md:mt-1 line-clamp-2">
            {title}
          </h2>

          {type !== "discover" && (
            <h4 className="hidden md:line-clamp-2 font-medium font-amar text-sm leading-5 my-1 text-gray-600">
              {desc}
            </h4>
          )}

          {type !== "help" && (
            <section id="footer">
              <div className="flex justify-between md:mt-5 mt-2">
                <Grades grades={grades} />
                {price !== undefined && (
                  <PriceTag {...{ isUnlocked, price, theme }} />
                )}
              </div>
            </section>
          )}
        </section>
      </div>
    </Link>
  );
};

export default ContentCard;

const DateTag = ({ value }: { value: string | undefined }) => {
  return (
    <div className="min-w-[60px] hidden md:block">
      <p className="text-sm text-[#4D4D4D] flex items-center mt-2 gap-1 ">
        <BiCalendar size={17} />
        <span className="text-[#4D4D4D]">{value}</span>
      </p>
    </div>
  );
};

const Grades = ({ grades }: { grades: Props["grades"] }) => {
  if (!grades) return null;
  return (
    <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
      Grade <BsDot />
      <span className="text-md">{grades}</span>
    </p>
  );
};

const PriceTag = ({
  price,
  isUnlocked,
  theme,
}: {
  price: Props["price"];
  theme: Props["theme"];
  isUnlocked: Props["isUnlocked"];
}) => {
  return (
    <>
      <p
        className={clsx(
          "text-sm shadow-lg md:p-1.5 p-1 md:px-5 px-5 rounded-full center md:gap-2 gap-1",
          theme == "blue" && "bg-lightblue",
          theme == "gold" && "bg-darkgold",
          theme == "green" && "bg-lightgreen"
        )}
      >
        {isUnlocked ? (
          <span className="text-white font-medium md:text-[15px] tracking-wider  py-1">
            Unlocked
          </span>
        ) : (
          <>
            <Image width={25} height={25} alt="123" src={"/coin3.png"} />
            <span className="text-white font-medium md:text-[15px] tracking-wider ">
              {price}
            </span>
          </>
        )}
      </p>
    </>
  );
};

interface HeaderProps {
  title: string;
  thumbnail: string;
  isPremium: Props["isPremium"];
  type: Props["type"];
}

const Header: React.FC<HeaderProps> = ({
  type,
  title,
  thumbnail,
  isPremium,
}) => {
  return (
    <section
      id="header"
      className={clsx(
        "relative",
        type !== "comic" && "aspect-w-10 aspect-h-6",
        type == "comic" && "aspect-w-10 aspect-h-14"
      )}
    >
      <Image src={thumbnail} alt={title} fill />
      <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
        <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
          <IoPlay size={22} />
        </button>
      </div>

      {isPremium && (
        <div className="w-full h-full">
          <div className="absolute top-0 right-2">
            <Image src="/leader.png" alt="leader" width={80} height={80} />
          </div>
        </div>
      )}
    </section>
  );
};

const generateHref = (type: Props["type"], id: number): string => {
  if (type === "course") return `/learn/${id}`;
  if (type.includes("live")) return `/live/${id}`;
  if (type === "video") return `/library/video/${id}`;
  if (type === "help") return `/dashboard/tips/${id}`;
  if (type === "comic") return `/library/comics/${id}`;
  if (type === "challange") return `/challanges/${id}`;
  return "";
};
