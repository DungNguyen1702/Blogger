import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import {
  calculateReadingTime,
  formatTimeDifference,
  mainContentHTML,
} from "../../../../../utils/string-utils";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CardItem = (props: any) => {
  const { hasImage, longContent, data } = props;
  console.log(data);
  const item = {
    createdAt: "30-12-2024 15:30:22",
    updatedAt: "30-12-2024 15:30:22",
    id: "67725a1e014dfd73ad527ced",
    title: "The Wonders of Space Exploration",
    content:
      "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
    accountId: "67725a1d014dfd73ad527ccc",
    categoryId: "67725a1d014dfd73ad527cd9",
    category: {
      createdAt: "30-12-2024 15:30:21",
      updatedAt: "30-12-2024 15:30:21",
      id: "67725a1d014dfd73ad527cd9",
      name: "Science",
      image:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
      description: "Discover the wonders of science and technology.",
      isDeleted: false,
    },
    account: {
      id: "67725a1d014dfd73ad527ccc",
      gmail: "user1@gmail.com",
      displayName: "user1",
      name: "John Doe",
      status: true,
      avatar:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
      background:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
      isDeleted: false,
      role: "USER",
    },
    background:
      "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
    isDeleted: false,
  };
  return (
    <div className="card-item-container row d-flex align-items-center">
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
      {hasImage && (
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
