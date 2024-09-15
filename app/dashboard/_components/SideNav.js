"use client";
import { History, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Cronologia",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Pagamenti",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Impostazioni",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <Link href={"/"}>
        <div className="flex justify-start">
          <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        </div>
      </Link>
      <hr className="my-5 border" />
      <div className="mt-10">
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center hover:bg-primary hover:text-white 
              ${path === item.path && "bg-primary text-white"} `}
            >
              <item.icon className="h-6 w-6" />
              <h2 className="text-md">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
