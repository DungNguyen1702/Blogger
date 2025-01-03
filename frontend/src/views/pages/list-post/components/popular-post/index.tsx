import { Swiper, SwiperSlide } from "swiper/react";
import type { Post } from "../../../../../models";
import CardItem from "../card-item";
import "./index.scss";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import PostAPI from "../../../../../api/postAPI";

const chunkArray = (arr: Post[], size: number): Post[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const PopularPost = () => {
  const [dataPairs, setDataPairs] = useState<Post[][]>([]);

  const callAPI = async () => {
    try {
      const response = await PostAPI.getPopularPosts();
      setDataPairs(chunkArray(response.data, 2))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="list-post-popular-post-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {dataPairs.map((pair, index) => (
          <SwiperSlide key={index}>
            {pair.map((item) => (
              <div key={item.id} className="list-post-popular-post-item">
                <CardItem hasImage={false} longContent={100} item={item} />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularPost;
