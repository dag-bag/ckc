const SettingIntroduction = ({ title, description, imageSrc }: any) => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-[2fr_1fr] mb-10 border-b py-20 px-10  items-center">
      <div>
        <h3 className="text-4xl font-medium font-heading ">{title}</h3>
        <p className="text-gray-600 max-w-lg">Signed in as {description}</p>
      </div>
      <div className="center justify-end pr-5">
        <Image src={imageSrc} alt={title} width={150} height={150} />
      </div>
    </div>
  );
};

import Image from "next/image";

export default SettingIntroduction;
