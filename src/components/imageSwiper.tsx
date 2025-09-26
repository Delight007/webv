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
      img: "https://picsum.photos/id/1015/1200/600",
      title: "WAN 2.2 Image generation",
      subtitle:
        "Generate complex images with the brand new and powerful WAN 2.2 model.",
      badge: "Try WAN 2.2",
    },
    {
      img: "https://picsum.photos/id/1016/1200/600",
      title: "FLUX.1 Krea",
      subtitle:
        "Manipulate weights for our FLUX.1 Krea model open-source release.",
      badge: "Try WAN 2.2",
    },

    {
      img: "https://picsum.photos/id/1018/1200/600",
      title: "Creative AI",
      subtitle: "Enhance, edit, and generate stunning results.",
      badge: "Try WAN 2.2",
    },
    {
      img: "https://picsum.photos/id/1020/1200/600",
      title: "Future Vision",
      subtitle: "Building AI-driven creativity for tomorrow.",
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
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              <div className="absolute bottom-14 left-6 text-white max-w-xs">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm">{slide.subtitle}</p>
              </div>
              <button className="bg-white rounded-2xl text-white">
                {slide.badge}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Pagination */}
      <div className="relative w-full flex items-center justify-between mt-8">
        <div className="swiper-pagination flex justify-center w-full gap-1"></div>
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

        /* Black pagination dots */
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
