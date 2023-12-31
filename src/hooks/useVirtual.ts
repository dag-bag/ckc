// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import useSession from "./use-session";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import useCoins from "./useCoins";
import toast from "react-hot-toast";
import useCredits from "./useCredits";

interface VideoPlayerProps {
  coins: number;
  content_id: number | string;
  label: string;
  type: string;
}

type UnlockR = {
  loading: boolean;
  unlock: () => void;
  loaderHandler: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
  opened: boolean;
  open: () => void;
  close: () => void;
};

const useVirtual = ({
  coins,
  content_id,
  label,
  type,
}: VideoPlayerProps): UnlockR => {
  const router = useRouter();
  const [loading, loaderHandler] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  const { updateCoins } = useCoins();
  const unlock = async () => {
    try {
      loaderHandler.open();
      await axios
        .post("/api/user/purchase", {
          coins,
          type,
          label,
          content_id,
        })
        .then(() => {
          updateCoins({ type: "remove", newData: coins });
          toast.success("Unlocked successfully!");
          loaderHandler.close();
          router.refresh();
        });
    } catch (error) {
      loaderHandler.close();
      alert("something  went wrong");
      // handle error
    }
  };

  return {
    loading,
    unlock: unlock,
    open,
    opened,
    close,
    loaderHandler,
  };
};

export default useVirtual;
