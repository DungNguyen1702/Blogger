import { useEffect, useState } from "react";
import SuggestItem from "../suggest-item";
import PostAPI from "../../../../../api/postAPI";

const SuggestBlog = () => {
  const [suggestBlogs, setSuggestBlogs] = useState([]);

  const callAPI = async () => {
    try {
      const response = await PostAPI.getAllPost();
      setSuggestBlogs(response.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="homepage-popular-blog-container">
      <h3 className="homepage-popular-title">Editor's suggested blogs</h3>
      <div className="row">
        {suggestBlogs.map((blog: any) => {
          return (
            <div
              className="col-lg-4 col-md-12 col-sm-12 homepage-popular-blog-item"
              key={blog.id}
            >
              <SuggestItem item={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestBlog;
