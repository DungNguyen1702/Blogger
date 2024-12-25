import { useState } from "react";
import { IMAGES } from "../../../constants/images";
import PopularBlog from "./components/popular-blog";
import SentenceImage from "./components/sentence-image";
import SuggestBlog from "./components/suggest-blog";
import SwiperContainer from "./components/swiper-container";
import "./index.scss";
import FakeData from "../../../data/fake_data.json";

const Homepage = () => {
  const [categories, setCategories] = useState(FakeData.categories);
  const [popularBlogs, setPopularBlogs] = useState(FakeData.posts);
  const [suggestBlogs, setSuggestBlogs] = useState(FakeData.posts.slice(0, 3));

  return (
    <div className="homepage-container">
      <SwiperContainer />
      <PopularBlog categories={categories} popularBlogs={popularBlogs} />
      <SentenceImage
        title="The earth has music for those who listen"
        description="Every part of nature has its own melody, from the rustling leaves to the crashing waves. All we need to do is pause and listen, and the world will reveal its symphony of sounds, waiting to be appreciated"
        article="George Santayana"
        backgroundImage={IMAGES.sky}
      />
      <SuggestBlog suggestBlogs={suggestBlogs}/>
    </div>
  );
};

export default Homepage;
