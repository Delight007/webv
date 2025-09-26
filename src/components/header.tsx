"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronDown, BiSupport } from "react-icons/bi";
import { BsCardImage, BsImage } from "react-icons/bs";
import { FaBell, FaFolder } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { ImMagicWand } from "react-icons/im";
import { IoIosVideocam } from "react-icons/io";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbWritingSign } from "react-icons/tb";
import Button from "./ui/button";

export function Header() {
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  // Dark mode hook
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  const iconColorClass = resolvedTheme === "dark" ? "text-white" : "text-black";
  const navIconComponents = [
    GoHomeFill,
    BsCardImage,
    IoIosVideocam,
    ImMagicWand,
    TbWritingSign,
    LiaDraftingCompassSolid,
    FaFolder,
  ];

  return (
    <header
      className={`py-2 border-gray-200 w-full h-[60px] fixed top-0 z-10 ${
        resolvedTheme === "dark" ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo + name */}
        <div className="flex items-center justify-center gap-5">
          <div
            className={`relative rounded-lg overflow-hidden ${
              resolvedTheme === "dark" ? "w-8 h-8" : "w-9 h-12 -ml-2"
            }`}
          >
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/images/krea1.png"
                  : "/images/krea2.png"
              }
              alt="Logo"
              fill
              className="object-cover"
              sizes={resolvedTheme === "dark" ? "32px" : "40px"}
            />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setOpen(!open)}
          >
            <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            <span
              className={`text-sm ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              businesscontentcreator
            </span>
            <BiChevronDown
              className={`w-4 h-4 ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
              } transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <div
          className={`flex items-center gap-1 p-1 rounded-lg ${
            resolvedTheme === "dark" ? "bg-neutral-800" : "bg-gray-100"
          }`}
        >
          {navIconComponents.map((IconComponent, index) => {
            const isActive = active === index;
            const buttonBgClass = isActive
              ? resolvedTheme === "dark"
                ? "!bg-white"
                : "!bg-white"
              : "!bg-transparent";

            const iconClass =
              isActive && resolvedTheme === "dark"
                ? "w-4 h-4 text-black"
                : `w-4 h-4 ${iconColorClass}`;

            return (
              <Button
                key={index}
                onClick={() => setActive(index)}
                className={`!w-10 !h-8 !flex !items-center !justify-center !rounded-lg ${buttonBgClass}`}
              >
                <IconComponent className={iconClass} />
              </Button>
            );
          })}
        </div>

        {/* Right-side controls */}
        <div className="flex items-center gap-4">
          <Button
            className={`!px-2 !py-1 !rounded-lg !gap-1.5 !w-auto !h-7 ${
              resolvedTheme === "dark" ? "!bg-neutral-800" : "!bg-gray-100"
            }`}
          >
            <BsImage className={`w-4 h-4 ${iconColorClass}`} />
            <span className={`text-xs font-medium ${iconColorClass}`}>
              Gallery
            </span>
          </Button>
          <Button
            className={`!px-2 !py-1 !rounded-lg !gap-1.5 !w-auto !h-7 ${
              resolvedTheme === "dark" ? "!bg-neutral-800" : "!bg-gray-100"
            }`}
          >
            <BiSupport className={`w-4 h-4 ${iconColorClass}`} />
            <span className={`text-xs font-medium ${iconColorClass}`}>
              Support
            </span>
          </Button>
          <Button
            className={`!w-8 !h-8 !flex !items-center !justify-center !rounded-full ${
              resolvedTheme === "dark" ? "!bg-neutral-800" : "!bg-gray-100"
            }`}
          >
            <FaBell className={`w-3.5 h-3.5 ${iconColorClass}`} />
          </Button>

          {/* 🌙 Dark mode toggle */}
          <Button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className={`!w-8 !h-8 !flex !items-center !justify-center !rounded-full ${
              resolvedTheme === "dark" ? "!bg-neutral-800" : "!bg-gray-100"
            }`}
          >
            {resolvedTheme === "dark" ? (
              <MdLightMode className="w-4 h-4 text-yellow-400" />
            ) : (
              <MdDarkMode className="w-4 h-4 text-black" />
            )}
          </Button>

          {/* Profile bubble */}
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
