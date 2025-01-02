import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import {
  calculateReadingTime,
  formatTimeDifference,
  mainContentHTML,
} from "../../../../../utils/string-utils";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CardItem = (props: any) => {
  const { hasImage, longContent, item, imagePosition } = props;
  return (
    <div className="card-item-container row d-flex align-items-center">
      {hasImage && imagePosition && imagePosition === "left" && (
        <div className="col-6">
          <div className="card-item-image-container">
            <div className="card-item-image-green-div"></div>
            <img
              alt="post image"
              className="card-item-image"
              src={item.background}
            />
          </div>
        </div>
      )}

      <div
        className={`card-item-content-container ${
          hasImage ? "col-6" : "col-12"
        }`}
      >
        <p className="card-item-category">{item.category.name}</p>
        <p className="card-item-title">{item.title}</p>
        <div className="card-item-author-container">
          <div className="card-item-author-item">
            <img
              alt="author"
              src={item.account.avatar}
              className="card-item-author-avatar"
            />
            <p className="card-item-author-name">{item.account.displayName}</p>
          </div>
          <div className="card-item-author-item">
            <CalendarOutlined />
            <p className="card-item-author-name">
              {formatTimeDifference(item.createdAt)}
            </p>
          </div>
          <div className="card-item-author-item">
            <ClockCircleOutlined />
            <p className="card-item-author-name">
              {calculateReadingTime(item.content, 80)}
            </p>
          </div>
        </div>
        <p>{mainContentHTML(item.content, longContent)}</p>
      </div>
      {hasImage && imagePosition && imagePosition === "right" && (
        <div className="col-6">
          <div className="card-item-image-container">
            <div className="card-item-image-green-div"></div>
            <img
              alt="post image"
              className="card-item-image"
              src={item.background}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
