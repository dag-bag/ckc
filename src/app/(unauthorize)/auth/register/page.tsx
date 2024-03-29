import Link from "next/link";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import SignUpWithEmail from "@/blocks/popups/signup";

export const metadata = {
  title: "Register | Cosmic Kids Club",
  description: "Registration",
};

const Page = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-100">
      <div className="rounded-lg grid md:grid-cols-2 bg-white max-w-7xl w-full  mx-auto ">
        <div className="bg-blue-100 rounded-lg center ">
          <Image
            width={500}
            height={500}
            alt="cosmic-kids-club"
            src={"/onboard/registration.png"}
          />
        </div>
        <div className="md:p-10 xl:p-20 p-8">
          <Heading size="large" className="font-semibold font-amar mb-5">
            Join Cosmic Kids Club <br /> Learning & Adventure!
          </Heading>
          <div>
            <SignUpWithEmail />
          </div>
          <div className="center mt-3">
            <Link href="/auth/login" className="underline font-medium">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
