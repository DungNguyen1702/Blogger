// import { useState } from "react";
import "./index.scss";
// import fakeData from "../../../data/fake_data.json";
import GreenTag from "../../../components/green-tag";
import FeaturedMonth from "./components/featured-month";
import PopularPost from "./components/popular-post";

const ListPost = () => {
  // const [monthPosts, setMonthPosts] = useState(fakeData.posts.slice(0, 5));
  // const [popularPosts, setPopularPosts] = useState(fakeData.posts.slice(0, 5));

  return (
    <div className="list-post-container">
      <div className="list-post-header-container row">
        <div className="list-post-header-left-container col-lg-8 col-sm-12">
          <GreenTag emphasizeWord="Featured" normalWorld="This Month" />
          <FeaturedMonth />
        </div>
        <div className="list-post-header-right-container col-lg-4 col-sm-12">
          <GreenTag emphasizeWord="Popular" normalWorld="Posted" />
          <PopularPost />
        </div>
      </div>
    </div>
  );
};

export default ListPost;
