import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import GalleryCard from "./cards/GalleryCard";

export default function SwiperContainer() {
  return (
    <section>
      <div className="container h-[80vh] px-4 py-8">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper h-full"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 640px
            520: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          loop={true}
        >
          <SwiperSlide className="">
            <GalleryCard
              imgSrc={
                "https://res.cloudinary.com/dx9rpvjcw/image/upload/v1703929914/banners/ucqolrijlkrtybbizbkn.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard
              imgSrc={
                "https://res.cloudinary.com/dx9rpvjcw/image/upload/v1704674300/gallery/u3xkvrzrhxnyrmyfxpsj.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard
              imgSrc={
                "https://res.cloudinary.com/dx9rpvjcw/image/upload/v1703929914/banners/ucqolrijlkrtybbizbkn.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
