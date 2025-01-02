import { useEffect, useState } from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogItem from "../blog-item";
import { ICONS } from "../../../../../constants/icons";
import PostAPI from "../../../../../api/postAPI";
import CategoryAPI from "../../../../../api/categoryAPI";
import { useNavigate } from "react-router-dom";

const PopularBlog = () => {
  const navigate = useNavigate();

  const [popularBlogs, setPopularBlogs] = useState([]);

  const [filterPopularBlogs, setFilterPopularBlogs] = useState([]);

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(0);

  const callAPI = async () => {
    try {
      const postResponse = await PostAPI.getAllPost();
      console.log(postResponse.data);
      setPopularBlogs(postResponse.data);

      const categoryResponse = await CategoryAPI.getAllCategory();
      setCategories(categoryResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilterPopularBlogs(popularBlogs.slice(0, 8));
    } else {
      setFilterPopularBlogs(
        popularBlogs.filter((blog: any) => blog.categoryId === selectedCategory)
      );
    }
  }, [selectedCategory, popularBlogs]);

  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  const handleViewAllClick = () => {
    navigate("/posts");
  };

  return (
    <div className="homepage-popular-blog-container">
      <h3 className="homepage-popular-title">Popular topics</h3>
      <div className="homepage-popular-category-container">
        <div className="homepage-popular-category-items">
          <p
            onClick={() => handleCategoryClick(0)}
            className={`homepage-popular-category-item ${
              selectedCategory === 0
                ? "homepage-popular-category-item-selected"
                : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            All
          </p>
          {categories.map((category: any, index: number) => (
            <p
              key={index}
              onClick={() => handleCategoryClick(category.id)}
              className={`homepage-popular-category-item ${
                selectedCategory === category.id
                  ? "homepage-popular-category-item-selected"
                  : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </p>
          ))}
        </div>
        <p
          style={{ cursor: "pointer" }}
          className="homepage-popular-category-item"
          onClick={handleViewAllClick}
        >
          View all &gt;
        </p>
      </div>
      <div className="row">
        {filterPopularBlogs.length > 0 ? (
          filterPopularBlogs.map((blog: any) => {
            console.log("blog", blog);
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 homepage-popular-blog-item"
                key={blog.id}
              >
                <BlogItem item={blog} />
              </div>
            );
          })
        ) : (
          <div className="col-12 text-center mt-4">
            <img
              alt="no-data"
              src={ICONS.noData}
              className="homepage-popular-no-data"
            />
            <p>No popular blogs found !!! Please try another category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularBlog;
