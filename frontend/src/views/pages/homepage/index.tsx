import { useEffect, useRef } from "react";
import { IMAGES } from "../../../constants/images";
import PopularBlog from "./components/popular-blog";
import SentenceImage from "./components/sentence-image";
import SuggestBlog from "./components/suggest-blog";
import SwiperContainer from "./components/swiper-container";
import "./index.scss";
import PostAPI from "../../../api/postAPI";

const Homepage = () => {
  const isCalled = useRef(false);

  const callAPI = async () => {
    try {
      await PostAPI.getAllPost();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isCalled.current) {
      callAPI();
      isCalled.current = true;
    }
  });

  return (
    <div className="homepage-container">
      <SwiperContainer />
      <PopularBlog />
      <SentenceImage
        title="The earth has music for those who listen"
        description="Every part of nature has its own melody, from the rustling leaves to the crashing waves. All we need to do is pause and listen, and the world will reveal its symphony of sounds, waiting to be appreciated"
        article="George Santayana"
        backgroundImage={IMAGES.sky}
      />
      <SuggestBlog />
    </div>
  );
};

export default Homepage;
