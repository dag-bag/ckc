import { BiSearchAlt } from "react-icons/bi";
import Container from "@/blocks/UI/PageContainer";

const BedgesPage = () => {
  return (
    <Container gridType="single">
      {/* hero */}
      <div className="h-[330px] bg-cyan-50 rounded-xl center flex-col">
        <h1 className="text-3xl font-heading font-bold">Challanges</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* filter */}
      <div className="flex items-center justify-between my-4">
        <div className="w-[300px] h-[50px] drop-shadow-md-- bg-gray-100  flex gap-3 items-center rounded-full px-5">
          <BiSearchAlt color="gray" size={25} />
          <input
            placeholder="Search Question"
            className="bg-transparent w-full border-none outline-none text-md"
            type="text"
          />
        </div>
      </div>

      <div className="space-y-5">
        <BadgesGrid title="6 to 8" />
        <BadgesGrid title="8 to 10" />
        <BadgesGrid title="Above 10" />
        <BadgesGrid title="Premium" />
      </div>
    </Container>
  );
};

export default BedgesPage;

import Card from "@/blocks/UI/Card";
import clsx from "clsx";
import Link from "next/link";
const BadgesGrid = ({ title }: any) => {
  return (
    <Card title={title} description="Lorem ipsum dolor sit amet">
      <div className="grid grid-cols-4 gap-5">
        <Content type="enroll" />
        <Content type="completed"  />
        <Content type="entrolled" />
        <Content type="enroll" />
      </div>
    </Card>
  );
};

const Content = ({type}: any) => {
  return (
    <Link href={"/challanges/slug"} className="bg-gray-100 rounded-xl h-[250px] p-5">
      <div className="w-[100px] h-[100px]  mx-auto rounded-full bg-[url('/tes-bedge.jpg')] bg-cover bg-center  border-2"></div>
      <div className="center flex-col mt-5">
        <h3 className="text-xl font-heading font-medium">Space Champion</h3>
        <p className="text-sm">Go!, Conquor The Space.</p>
      </div>

      <button className={clsx("font-heading bg-white w-full py-2 mt-2 rounded-full capitalize", 
      type == "completed" && "text-green-500",
      type == "entrolled" && "text-blue-500")}
      >{type}</button>
    
    </Link>
  );
};