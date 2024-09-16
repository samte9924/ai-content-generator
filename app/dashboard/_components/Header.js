"use client";
import { UserButton } from "@clerk/nextjs";
import {
  HamIcon,
  History,
  Home,
  MenuIcon,
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
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
    <div className="p-2 gap-3 shadow-sm border-b bg-white flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="focus:outline-primary block md:hidden"
          asChild
        >
          <Button variant="outline" className="h-full">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-3 shadow-md">
          <DropdownMenuLabel>
            <h2 className="text-lg">Menu</h2>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuList.map((item, index) => (
            <Link key={index} href={item.path}>
              <DropdownMenuItem
                className={`flex gap-2 m-3 px-3 py-2 rounded-lg cursor-pointer items-center hover:bg-primary hover:text-white 
              ${path === item.path && "bg-primary text-white"} `}
              >
                <item.icon className="h-4 w-4" />
                <h2 className="text-sm">{item.name}</h2>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-2 items-center p-2 border rounded-md md:max-w-lg w-full">
        <Search />
        <input type="text" placeholder="Cerca" className="outline-none" />
      </div>
      <div className="items-center hidden md:flex">
        {!path.includes("/dashboard/settings") && <UserButton />}
      </div>
    </div>
  );
};

export default Header;
