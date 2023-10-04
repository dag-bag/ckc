import { FcGoogle } from "react-icons/fc";

interface Props {
  type: "signin" | "signup";
}

const GoogleAuthButton = ({ type }: Props) => {
  const title =
    type == "signin" ? "Sign in with Google" : "Sign up with Google";
  return (
    <button className="px-5 text-md font-medium py-3 bg-black text-white center gap-2 font-fun rounded-lg w-full">
      <FcGoogle size={22} /> {title}
    </button>
  );
};

export default GoogleAuthButton;