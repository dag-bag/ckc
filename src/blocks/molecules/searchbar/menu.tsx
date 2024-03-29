"use client";
import { useState } from "react";
import { LuSettings2, LuX } from "react-icons/lu";
import { Menu, MultiSelect } from "@mantine/core";

const grades = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
];

const SearchMenu = () => {
  const [opened, setOpened] = useState(false);
  const handleToggler = () => setOpened(!opened);
  return (
    <Menu
      classNames={{
        dropdown: "!p-5",
      }}
      withArrow
      shadow="md"
      width={300}
      opened={opened}
    >
      <Menu.Target>
        <button
          onClick={handleToggler}
          className="h-[45px] w-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 center text-white rounded-full ml-2"
        >
          {!opened ? <LuSettings2 size={20} /> : <LuX size={20} />}
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Filters</Menu.Label>
        <MultiSelect
          size="sm"
          width={50}
          searchable
          data={grades}
          defaultValue={["All"]}
          placeholder="Filter via Grades"
        />
      </Menu.Dropdown>
    </Menu>
  );
};

export default SearchMenu;
