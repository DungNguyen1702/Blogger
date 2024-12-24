import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules"; // Xóa Mousewheel khỏi modules
import "swiper/swiper-bundle.css";
import Slide from "../slides";
import "./index.scss";
import { IMAGES } from "../../../../../constants/images";

const SwiperContainer = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    {
      title: "Dive into the Depths: Exploring the Magic of the Ocean",
      description:
        "Discover the serene beauty and fascinating mysteries of the sea. From crystal-clear waters to thriving marine life, let the ocean inspire your next adventure. Learn about hidden beaches, vibrant coral reefs, and tips for sustainable travel to protect our blue planet.",
      backgroundImage: IMAGES.beach,
    },
    {
      title: "Into the Woods: A Journey Through Nature’s Lungs",
      description:
        "Explore the enchanting world of forests, where towering trees and diverse wildlife create a haven of tranquility. Whether it’s a rainforest trek or a serene pine woodland stroll, uncover tips for eco-friendly forest exploration and reconnect with nature.",
      backgroundImage: IMAGES.forest,
    },
    {
      title: "Endless Horizons: Life and Beauty of the Plains",
      description:
        "The plains are a canvas of vast skies and rolling landscapes. Experience their gentle charm, from golden fields to charming rural cultures. Discover travel guides and tips for embracing the simplicity and majesty of these open lands.",
      backgroundImage: IMAGES.plains,
    },
    {
      title: "Reach New Heights: Adventures in the Mountains",
      description:
        "Embark on an inspiring journey through the rugged peaks and peaceful valleys of the mountains. Perfect for hikers, photographers, and dreamers alike, learn about trails, hidden villages, and the best ways to embrace mountain life responsibly.",
      backgroundImage: IMAGES.forest,
    },
  ];

  return (
    <div className="swiper-container" ref={swiperRef}>
      <Swiper
        direction="horizontal"
        effect="fade"
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide) => {
            const background = slide.querySelector(".background");
            if (background) {
              background.classList.remove("animation");
            }
          });
          const activeSlide = swiper.slides[swiper.activeIndex];
          const background = activeSlide.querySelector(".background");
          if (background) {
            background.classList.add("animation");
          }
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              title={slide.title}
              description={slide.description}
              backgroundImage={slide.backgroundImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;