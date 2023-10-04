"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

const ProgressBar = ({ value }: { value: string }) => {
  return (
    <motion.div className="w-full h-[15px] bg-gray-200  rounded-full overflow-hidden shadow">
      <motion.div
        transition={{
          duration: 1,
        }}
        className={clsx(
          `bg-gradient-to-tl  from-indigo-500 to-purple-500 h-full rounded-full w-0`
        )}
        animate={{
          width: `${value}%`,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;