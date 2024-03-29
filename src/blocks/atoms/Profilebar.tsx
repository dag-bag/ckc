"use client";
import Image from "next/image";
import { Menu } from "@mantine/core";

const Profilebar = () => {
  const account_type = useAccountType();
  const { logout } = useSession();
  const handleLogout = () => {
    logout();
    window.location.href = "/auth/login";
  };
  return (
    <>
      <Menu
        shadow="md"
        offset={20}
        width={200}
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        position="bottom-end"
      >
        <Menu.Target>
          <div className="flex items-center rounded-full shadow-md  gap-1 relative">
            <Image
              height={50}
              alt="user-profile"
              width={50}
              className="border-2 border-white rounded-full"
              src={"/avatars/asian-man.png"}
            />

            {account_type == "premium" && (
              <Image
                width={20}
                height={20}
                alt="premium"
                src={"/assets/premium.png"}
                className="absolute top-0 right-0"
              />
            )}
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <Button title={"Profile"} href={"/profile"} Icon={LuUser2} />
          </Menu.Item>

          {/* <Menu.Item>
            <Button title={"Notifications"} href={"/settings"} Icon={LuBell} />
          </Menu.Item> */}
          <Menu.Item>
            <Button title={"Settings"} href={"/settings"} Icon={LuSettings} />
          </Menu.Item>
          {/* <Menu.Item>
            <Button
              title={"Referrals"}
              href={"/referral"}
              Icon={RiShareForwardBoxFill}
            />
          </Menu.Item> */}

          <Menu.Divider />

          <Menu.Item onClick={handleLogout}>
            <LogoutButton />
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default Profilebar;

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuUser2,
  LuSettings,
  LuLogOut,
  LuShoppingCart,
  LuBell,
} from "react-icons/lu";
import useSession, { useAccountType } from "@/hooks/use-session";
import { RiShareForwardBoxFill } from "react-icons/ri";

interface Props {
  Icon: any;
  title: string;
  href: string;
  isDropdown?: boolean;
  dropdownOptions?: any[];
}

const Button: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  return (
    <Link
      key={title}
      href={href}
      className={clsx(
        " rounded-xl flex justify-between gap-5 text-black font-heading",
        pathname == href && " bg-[#2FB2AB]  drop-shadow-lg"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <Icon color={pathname == href ? "white" : "black"} size={20} />
        </div>
        <div>
          <h3
            className={clsx(
              "text-md font-heading  text-gray-700",
              pathname == href && "  !text-white"
            )}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="center">{/* <FiChevronRight color="gray" /> */}</div>
    </Link>
  );
};

const LogoutButton: React.FC<any> = () => {
  return (
    <button
      className={clsx(
        " rounded-xl flex justify-between gap-5 text-black font-heading"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <LuLogOut size={20} />
        </div>
        <div>
          <h3 className={clsx("text-md font-heading  text-gray-700")}>
            Logout
          </h3>
        </div>
      </div>
    </button>
  );
};
