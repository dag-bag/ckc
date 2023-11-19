"use client";
import useOnboard from "@/hooks/useOnboard";
const Page = () => {
  const { setter, storage } = useOnboard();
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center gap-5"
      style={{ backgroundSize: "800px 800px" }}
    >
      <input
        placeholder="First Name"
        defaultValue={storage?.firstname as string}
        onChange={(event) => setter("firstname", event.target.value)}
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
      />
      <input
        placeholder="Last Name"
        className="px-5 py-4 rounded-md border-blue-500 border-2 w-[400px] text-center text-xl font-fun"
        defaultValue={storage?.lastname as string}
        onChange={(event) => {
          setter("lastname", event.target.value);
        }}
      />
    </div>
  );
};

export default Page;