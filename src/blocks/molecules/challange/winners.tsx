import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BsDot } from "react-icons/bs";

const Winners = ({ winners }: any) => (
  <div>
    <Card title="Winners" className="mt-5">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        {winners.map((winner: any) => (
          <Winner key={winner.id} {...winner.user} />
        ))}
      </div>
    </Card>
  </div>
);

export default Winners;

export const Winner = ({ avatar, firstname, email }: any) => {
  return (
    <div className="font-heading">
      <Image
        src={"/banner1.png"}
        width={300}
        height={300}
        alt="price"
        className="rounded-md"
      />
      <div className="flex items-center gap-2 mt-2">
        <Image
          src={avatar}
          width={45}
          height={45}
          alt="price"
          className="rounded-full"
        />
        <div>
          <h5 className=" leading-3 text-sm">{firstname}</h5>
          <p className="items-center text-xs md:flex hidden">
            mail <BsDot /> {email}
          </p>
        </div>
      </div>
    </div>
  );
};
