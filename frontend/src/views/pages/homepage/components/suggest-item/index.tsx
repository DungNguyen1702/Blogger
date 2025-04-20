import "./index.scss";
import {
  formatDateString,
  mainContentHTML,
} from "../../../../../utils/string-utils";
import { useNavigate } from "react-router-dom";

const SuggestItem = (props: any) => {
  const navigate = useNavigate();
  const { item } = props;
  const handleClickBlog = () => {
    navigate(`/blogs/${item.id}`);
  };
  return (
    <div className="suggest-item-container" onClick={handleClickBlog}>
      <div className="suggest-item-image-container">
        <img
          alt="blog image"
          src={item.background}
          className="blog-item-image"
        />
        <div className="suggest-item-blur"></div>
        <p className="blog-item-category">{item.category.name}</p>
        <div className="suggest-item-content-container">
          <p className="suggest-item-date">
            {formatDateString(item.createdAt)}
          </p>
          <p className="blog-item-title">{item.title}</p>
          <p className="blog-item-content">
            {mainContentHTML(item.content, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestItem;
