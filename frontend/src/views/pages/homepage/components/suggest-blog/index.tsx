import SuggestItem from "../suggest-item";
import "./index.scss";

const SuggestBlog = (props: any) => {
  const { suggestBlogs } = props;
  return (
    <div className="homepage-popular-blog-container">
      <h3 className="homepage-popular-title">Editor's suggested blogs</h3>
      <div className="row">
        {suggestBlogs.map((blog: any) => {
          return (
            <div className="col-lg-4 col-md-12 col-sm-12 homepage-popular-blog-item" key={blog.id}>  
              <SuggestItem item={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestBlog;
