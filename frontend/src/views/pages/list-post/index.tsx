// import { useState } from "react";
import "./index.scss";
import GreenTag from "../../../components/green-tag";
import FeaturedMonth from "./components/featured-month";
import PopularPost from "./components/popular-post";
import { Pagination } from "antd";
import { FormOutlined } from "@ant-design/icons";
import CardItem from "./components/card-item";
import { useEffect, useRef, useState } from "react";
import { Post, Account } from "../../../type/entities";
import GreenButton from "../../../components/button/green-button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICONS } from "../../../constants/icons";
import { getCurrentDate, TruncateText } from "../../../utils/string-utils";
import { IMAGES } from "../../../constants/images";
import CategoryAPI from "../../../api/categoryAPI";
import PostAPI from "../../../api/postAPI";
import AccountAPI from "../../../api/accountAPI";
import TodayUpdateAPI from "../../../api/todayUpdateAPI";

const sumNumPost = (categories: any) => {
  return categories.reduce((sum: number, category: any) => {
    return sum + category.numPost;
  }, 0);
};

const ListPost = () => {
  // Ref
  const isCalled = useRef(false);

  // useState
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [currentPosts, setCurrentPosts] = useState<typeof data>([]);
  const [originData, setOriginData] = useState<Post[]>([]);
  const [data, setData] = useState<Post[]>([]);
  const [categories, setCategories] = useState<any>([]);
  const [topAuthors, setTopAuthors] = useState<Account[]>([]);
  const [todayUpdate, setTodayUpdate] = useState<any>({});

  const allCategory = {
    id: null,
    name: "All blogs",
    image: IMAGES.all_blog,
    isDeleted: false,
    numPost: sumNumPost(categories),
  };

  const [currentCategory, setCurrentCategory] = useState(allCategory.id);

  // useEffect
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, data]);

  const callAPI = async () => {
    try {
      const responseCategoryAPI = await CategoryAPI.getAllCategory();
      setCategories(
        responseCategoryAPI.data.map((category: any) => ({
          ...category,
          numPost: category.posts.length,
        }))
      );

      const responsePostAPI = await PostAPI.getAllPost();
      setData(responsePostAPI.data);
      setOriginData(responsePostAPI.data);

      const responseTopAuthors = await AccountAPI.findTop3AccountsByPostCount();
      setTopAuthors(responseTopAuthors.data);

      const responseTodayUpdate = await TodayUpdateAPI.getTodayUpdateByDate(
        getCurrentDate()
      );
      setTodayUpdate(responseTodayUpdate.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isCalled.current) {
      callAPI();
      isCalled.current = true;
    }
  }, []);

  useEffect(() => {
    if (currentCategory === allCategory.id) {
      setData(originData);
    } else {
      setData(originData.filter((post) => post.categoryId === currentCategory));
    }
    setCurrentPage(1);
  }, [currentCategory]);

  // Function
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreatePost = () => {
    console.log("Create post");
  };

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
      <div className="list-post-body-container row">
        <div className="list-post-body-left-container col-lg-8 col-sm-12">
          <div className="list-post-create-post-container">
            <p className="list-post-create-post-title">
              Share Your Day With Our Readers
            </p>
            <GreenButton
              handleButton={handleCreatePost}
              content={
                <div className="green-button-content">
                  <FormOutlined />
                  Write On Notebook
                </div>
              }
            />
          </div>
          <div className="list-post-recently-post-container">
            <GreenTag emphasizeWord="Recently" normalWorld="Posted" />
          </div>
          {currentPosts.map((item, index) => (
            <div className="list-post-item-container">
              <CardItem
                hasImage={true}
                longContent={200}
                item={item}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
          <div className="list-post-pagination-container">
            <Pagination
              current={currentPage}
              total={data.length}
              pageSize={postsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false}
              itemRender={(_, type, originalElement) => {
                if (type === "prev") {
                  return <a>Previous</a>;
                }
                if (type === "next") {
                  return <a>Next</a>;
                }
                return originalElement;
              }}
            />
          </div>
        </div>
        <div className="list-post-body-right-container col-lg-4 d-md-block d-sm-none">
          <div className="list-post-body-right-item-container">
            <GreenTag emphasizeWord="Top" normalWorld="Authors" />
            {topAuthors.map((author, index) => (
              <div className="list-post-author-item" key={author.id}>
                <img
                  alt="medal"
                  className="list-post-author-medal"
                  src={ICONS[`MedalTop${index + 1}` as keyof typeof ICONS]}
                />
                <img
                  alt="author"
                  src={author.avatar}
                  className="list-post-author-avatar"
                />
                <div>
                  <p className="list-post-author-name">{author.name}</p>
                  <p className="list-post-author-gmail">{author.gmail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="list-post-body-right-item-container">
            <GreenTag emphasizeWord="Categories" normalWorld="" />
            <div
              className={`list-post-category-item ${
                currentCategory === allCategory.id
                  ? "list-post-category-item-selected"
                  : ""
              }`}
              onClick={() => setCurrentCategory(allCategory.id)}
            >
              <img
                alt="category"
                src={allCategory.image}
                className="list-post-category-image"
              />
              <div className="list-post-category-content-container">
                <p className="list-post-category-name">{allCategory.name}</p>
              </div>
              <p className="list-post-category-num-post">
                {allCategory.numPost}{" "}
                {allCategory.numPost > 1 ? "posts" : "post"}
              </p>
            </div>
            {categories.map((category: any) => (
              <div
                className={`list-post-category-item ${
                  currentCategory === category.id
                    ? "list-post-category-item-selected"
                    : ""
                }`}
                onClick={() => setCurrentCategory(category.id)}
              >
                <img
                  alt="category"
                  src={category.image}
                  className="list-post-category-image"
                />
                <div className="list-post-category-content-container">
                  <p className="list-post-category-name">{category.name}</p>
                  <p className="list-post-category-description">
                    {TruncateText(category.description, 30)}
                  </p>
                </div>
                <p className="list-post-category-num-post">
                  {category.numPost} {category.numPost > 1 ? "posts" : "post"}
                </p>
              </div>
            ))}
          </div>
          <div className="list-post-body-right-item-container">
            <GreenTag emphasizeWord="Today's" normalWorld="Update" />
            <div className="row">
              <div className="col-6 my-2">
                <div className="list-post-today-update-item">
                  <p className="list-post-today-update-num">
                    {todayUpdate.newPostNum}
                  </p>
                  <p className="list-post-today-update-title">New Posts</p>
                </div>
              </div>
              <div className="col-6 my-2">
                <div className="list-post-today-update-item">
                  <p className="list-post-today-update-num">
                    {todayUpdate.totalVisitors}
                  </p>
                  <p className="list-post-today-update-title">Total Visitors</p>
                </div>
              </div>
              <div className="col-6 my-2">
                <div className="list-post-today-update-item">
                  <p className="list-post-today-update-num">
                    {todayUpdate.newSubscribers}
                  </p>
                  <p className="list-post-today-update-title">New Subcribers</p>
                </div>
              </div>
              <div className="col-6 my-2">
                <div className="list-post-today-update-item">
                  <p className="list-post-today-update-num">
                    {todayUpdate.blogReads}
                  </p>
                  <p className="list-post-today-update-title">Blog Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPost;
