import { useEffect, useState } from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogItem from "../blog-item";
import { ICONS } from "../../../../../constants/icons";

const PopularBlog = (props: any) => {
  const [popularBlogs, setPopularBlogs] = useState(
    props.popularBlogs.slice(0, 8)
  );

  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    if (selectedCategory === 0) {
      setPopularBlogs(props.popularBlogs.slice(0, 8));
    } else {
      setPopularBlogs(
        props.popularBlogs.filter(
          (blog: any) => blog.categoryId === selectedCategory
        )
      );
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category: number) => {
    console.log(`Clicked on category: ${category}`);
    setSelectedCategory(category);
  };

  const handleViewAllClick = () => {
    console.log("Clicked on View All");
  };

  return (
    <div className="homepage-popular-blog-container">
      <h3 className="homepage-popular-title">Popular topics</h3>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
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
          {props.categories.map((category: any, index: number) => (
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
        {popularBlogs.length > 0 ? (
          popularBlogs.map((blog: any) => {
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
            <img alt="no-data" src={ICONS.noData} className="homepage-popular-no-data"/>
            <p>No popular blogs found !!! Please try another category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularBlog;
