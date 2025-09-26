import { useState } from "react";
import { BsCardImage, BsPersonArmsUp } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi"; // arrow down
import { GiCircularSawblade } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";
import { IoIosVideocam } from "react-icons/io";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { TbWritingSign } from "react-icons/tb";
import Button from "./ui/button";

const tools = [
  {
    id: 1,
    name: "Image",
    description: "Generate stunning images",
    icon: BsCardImage,
    badge: "New",
    badgeVariant: "secondary" as const,
    gradient: "linear-gradient( #3d525a, #b4dadf)",
  },
  {
    id: 2,
    name: "Video",
    description: "Generate videos with Haiku, Flux, and more",
    icon: IoIosVideocam,
    badge: null,
    badgeVariant: null,
    gradient: "linear-gradient( #f97316, #fbbf24)",
  },
  {
    id: 3,
    name: "Realtime",
    description: "Real-time rendering in a canvas",
    icon: TbWritingSign,
    badge: null,
    badgeVariant: null,
    gradient: "linear-gradient(#9333ea, #e1e9eb)",
  },
  {
    id: 4,
    name: "Enhancer",
    description: "Enhance and upscale images",
    icon: ImMagicWand,
    badge: "New",
    badgeVariant: "secondary" as const,
    gradient: "linear-gradient( #161b1d, #3d8177)",
  },
  {
    id: 5,
    name: "Edit",
    description: "Edit existing images with AI",
    icon: LiaDraftingCompassSolid,
    badge: "New",
    badgeVariant: "secondary" as const,
    gradient: "linear-gradient(#112a5e, #4774cc)",
  },
  {
    id: 6,
    name: "Video Lipsync",
    description: "Upscale any video using AI",
    icon: PiMicrophoneStageFill,
    badge: null,
    badgeVariant: null,
    gradient: "linear-gradient(#2a3a41, #e7dfc0)",
  },
  {
    id: 7,
    name: "Motion Transfer",
    description: "Transfer motion to static characters",
    icon: BsPersonArmsUp,
    badge: "New",
    badgeVariant: "secondary" as const,
    gradient: "linear-gradient(135deg, #000000, #4b5563)",
  },
  {
    id: 8,
    name: "Train",
    description: "Train to replicate your style, face, products, or characters",
    icon: GiCircularSawblade,
    badge: null,
    badgeVariant: null,
    style: { background: "transparent", boxShadow: "none", color: "#000000" },
  },
];

export function GenerateSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="mx-auto px-6 lg:px-12 max-w-7xl pb-16">
      <div className="w-full">
        <div className="flex items-center justify-between mb-8 w-full">
          <h2 className="text-xl font-bold text-foreground">Generate</h2>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="!flex !items-center !gap-1 !text-primary hover:!underline !bg-transparent !font-medium !text-sm !rounded-lg"
          >
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            Show all
          </Button>
        </div>

        {isOpen && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div key={tool.id}>
                <div className="w-full">
                  {/* Icon + Content row */}
                  <div className="flex flex-row items-center justify-center gap-2 w-full">
                    {/* Icon with gradient background */}
                    <div
                      className="p-2 rounded-lg transition-colors shadow-md"
                      style={{
                        background: tool.gradient,
                        ...(tool.style || {}),
                      }}
                    >
                      <tool.icon
                        className="w-5 h-5"
                        style={{ color: tool.style?.color || "white" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 gap-1">
                      {/* Name + Badge row */}
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm text-card-foreground">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span className="text-xs bg-blue-600 py-0.5 px-1.5 rounded-xl text-white capitalize">
                            {tool.badge}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-500 leading-tight">
                        {tool.description}
                      </p>
                    </div>

                    {/* Open button */}
                    <div className="flex">
                      <Button className="!bg-gray-100 !hover:bg-gray-200 !text-[10px] !text-black !font-medium !py-0.5 !px-3 !rounded-xl">
                        Open
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
