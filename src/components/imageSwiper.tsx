"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSwiper() {
  const slides = [
    {
      img: "/images/tri.jpg",
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and utral realistic texture.",
      badge: "Try WAN 2.2",
    },
    {
      img: "/images/tri2.jpg",
      title: "Open Source",
      subtitle: "FLux.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open source, Download and run our model weights, read the technical report",
      badge: "Try WAN 2.2",
    },
    {
      img: "/images/tri3.jpg",
      title: "Speeding",
      subtitle: "Flash Speed",
      description:
        "Elite sprinters can reach speeds of 36–45 km/h in short bursts, while average jogging speeds for most people range from 8–12 km/h. Training methods like interval running, strength conditioning, and proper recovery.",
      badge: "Try WAN 2.2",
    },
    {
      img: "/images/tri4.jpg",
      title: "Smart Watch",
      subtitle: "Krea Smart Watch",
      description:
        "smartwatches are fitness-focused (like Garmin or Fitbit), while others are all-purpose (like Apple Watch, Samsung Galaxy Watch, or Google Pixel Watch).",
      badge: "Try WAN 2.2",
    },
    {
      img: "/images/tri5.jpg",
      title: "Shark",
      subtitle: "Shark",
      description:
        "Some sharks are fast swimmers, like the shortfin mako, which can reach speeds over 70 km/h, making it one of the fastest fish in the ocean.",
      badge: "Try WAN 2.2",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto pl-6 pr-1 lg:pl-12 mt-24 mb-16">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        spaceBetween={30} // reduced gap
        loop={true}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="w-full h-[350px] overflow-visible"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "58%" }} // slightly bigger for more half-slide visibility
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-2xl "
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute text-white text-7xl font-bold bottom-1/2 left-1/4">
                {slide.title}
              </div>
              <div className="absolute bottom-7 left-6 text-white  w-full">
                <h2 className="text-xl font-bold">{slide.subtitle}</h2>
                <p className="text-sm w-[330px]">{slide.description}</p>
              </div>
              <button className="bg-white rounded-4xl text-black text-xs font-medium py-3 px-4 h-[40px] flex justify-center items-center absolute bottom-7 right-6">
                {slide.badge}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Pagination */}
      <div className="relative w-full flex items-center justify-between mt-8">
        <div className="swiper-pagination flex justify-center w-full gap-2.5"></div>
        <div className="flex gap-3 absolute right-20 -bottom-2.5">
          <button className="swiper-button-next">
            <MdKeyboardArrowLeft />
          </button>
          <button className="swiper-button-prev">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: none !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 30px !important;
          height: 30px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          background: #e5e7eb !important;
          border-radius: 9999px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #d1d5db !important;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 16px !important;
          height: 16px !important;
          color: #000 !important;
        }

        /* Dark mode pagination dots */
        @media (prefers-color-scheme: dark) {
          .swiper-pagination-bullet {
            background: #999 !important;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: #fff !important;
            opacity: 1;
          }
        }

        /* Dark mode class-based styling */
        .dark .swiper-pagination-bullet {
          background: #999 !important;
          opacity: 0.7;
        }
        .dark .swiper-pagination-bullet-active {
          background: #fff !important;
          opacity: 1;
        }

        /* Light mode pagination dots (default) - must come after dark mode */
        .swiper-pagination-bullet {
          background: #777 !important;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #000 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
