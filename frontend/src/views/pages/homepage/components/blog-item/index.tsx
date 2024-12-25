import {
  formatDateString,
  mainContentHTML,
} from "../../../../../utils/string-utils.ts";
import "./index.scss";

const BlogItem = (props: any) => {
  const { item } = props;
  console.log(formatDateString(item.createdAt));
  console.log(item);
  return (
    <div className="blog-item-container">
      <div className="blog-item-image-container">
        <p className="blog-item-category">{item.category.name}</p>
        <img
          alt="blog image"
          src={item.background}
          className="blog-item-image"
        />
      </div>
      <div className="blog-item-content-container">
        <p className="blog-item-date">{formatDateString(item.createdAt)}</p>
        <p className="blog-item-title">{item.title}</p>
        <p className="blog-item-content">{mainContentHTML(item.content, 200)}</p>
      </div>
    </div>
  );
};

export default BlogItem;
