import { realign } from ".";
import { motion } from "framer-motion";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/navigation";
import { BiSolidLockAlt } from "react-icons/bi";
import clsx from "clsx";

const tooltip: any = {
  16: "Name",
  32: "Grade",
  48: "Birthday",
  64: "Mobile",
  80: "Location",
  96: "Avatar",
};

const pathnames: any = {
  16: "/newboard/name",
  32: "/newboard/grade",
  48: "/newboard/birthday",
  64: "/newboard/mobile",
  80: "/newboard/location",
  96: "/newboard/avatar",
};

interface Props {
  progress: number;
  number: number;
  path: string;
  initialProgress: number;
  condition: boolean;
}

const Level = ({
  progress,
  number,
  path,
  initialProgress,
  condition,
}: Props) => {
  const router = useRouter();
  const Properties = {
    whileHover: {
      scale: 1.2,
    },
    whileTap: {
      scale: 1.2,
    },
    style: {
      rotate: realign(progress),
      offsetPath: `path('${path}')`,
      offsetDistance: `${progress}%`,
    },
  };

  const handleClick = () => {
    if (condition) {
      router.push(pathnames[progress]);
    }
  };

  return (
    <Tooltip withArrow label={tooltip[progress]}>
      <motion.div
        onClick={handleClick}
        {...Properties}
        className="rounded-full cursor-pointer absolute z-50 w-[50px] h-[50px] md:w-[60px] md:h-[60px] border p-1 border-green-300"
      >
        <div
          className={clsx(
            "w-full lg:text-xl h-full shadow-xl text-white border bg-white rounded-full center gap-0.5 font-semibold bg-gradient-to-t ",
            !condition
              ? "from-yellow-800 to-yellow-300"
              : "from-green-800 to-green-500"
          )}
        >
          {number}
        </div>
      </motion.div>
    </Tooltip>
  );
};

export default Level;
