import { Pagination } from "swiper/modules";
import CardItem from "../card-item";
import "./index.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Post } from "../../../../../models";
import { useEffect, useState } from "react";
import PostAPI from "../../../../../api/postAPI";

const FeaturedMonth = () => {
  const [data, setData] = useState<Post[]>([]);

  const callAPI = async () => {
    try {
      const response = await PostAPI.getFeaturedThisMonthPost();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="featured-month-container">
      {/* <CardItem hasImage={true} longContent={200} /> */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          draggable: true,
          el: ".swiper-scrollbar",
        }}
        modules={[Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="featured-month-item">
              <CardItem
                hasImage={true}
                longContent={200}
                item={item}
                imagePosition="right"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedMonth;
