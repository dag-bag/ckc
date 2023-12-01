import { BsDot } from "react-icons/bs";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";
import { BiTime, BiGlobe, BiTrophy } from "react-icons/bi";

interface Props {
  slug: string;
  duration: string;
  reward: string;
  title: string;
  type: string;
  price: number;
  shareableURL: string;
  isLocked: boolean;
}

const VideoInfo = ({
  slug,
  duration,
  reward,
  title,
  type,
  price,
  shareableURL,
  isLocked,
}: Props) => {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <h1 className="text-3xl font-semibold">
        {price} <span className="text-sm">CRD</span>
      </h1>
      <section className="mt-5 space-y-1">
        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTime size={18} /> Duration <BsDot />
          </p>
          <p>{duration}</p>
        </div>

        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTrophy size={18} /> Rewards <BsDot />
          </p>
          <p className="leading-5">
            {reward} <br />
            <span className="text-xs">
              (see reward section for more details)
            </span>
          </p>
        </div>
      </section>

      <section className="flex gap-2 flex-col mt-5">
        {isLocked ? <BuyPopup price={price} title={title} type={type} /> : null}

        <SharePopup shareableURL={shareableURL} title={title} />
      </section>
    </div>
  );
};

export default VideoInfo;
