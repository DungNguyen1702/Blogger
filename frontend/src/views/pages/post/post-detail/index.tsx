import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import {
  calculateReadingTime,
  convertToHTML,
  formatTimeDifference,
} from "../../../../utils/string-utils";
import CommentItem from "./components/comment-item";
import { useEffect, useRef, useState } from "react";
import PostAPI from "../../../../api/postAPI";
import type { Post } from "../../../../type/entities";
// import ReactQuillTest from "./components/react-quill-test";

const PostDetail = () => {
  const isCalled = useRef(false);
  const { id } = useParams();

  const [data, setData] = useState<Post | null>(null);

  const callApi = async () => {
    const response = await PostAPI.getPostDetail(id + "");
    setData(response.data);
  };

  useEffect(() => {
    if (!isCalled.current) {
      callApi();
      isCalled.current = true;
    }
  });

  const onClickAuthor = () => {
    if (data && data.account) {
      console.log("Author clicked" + data.account.id);
    }
  };

  return (
    <div>
      {data && (
        <div className="post-detail-container">
          <div className="post-detail-header-container">
            <div className="post-detail-header-image-container">
              <img
                alt={`post detail id ${data.id}`}
                src={data.background}
                className="post-detail-header-background"
              />
              <div className="post-detail-header-info-container">
                <p className="post-detail-header-category">
                  {data.category.name}
                </p>
                <p className="post-detail-header-post-title">{data.title}</p>
                <div className="post-detail-header-author-container d-flex align-items-center">
                  <p className="post-detail-header-author-by-text">By : </p>
                  <div
                    className="post-detail-header-author-info-container d-flex align-items-center"
                    onClick={onClickAuthor}
                  >
                    <img
                      alt={`author ${data.account.name}`}
                      src={data.account.avatar}
                      className="post-detail-header-author-avatar"
                    />
                    <p className="post-detail-header-author-name">
                      {data.account.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-detail-header-blur"></div>
          </div>
          <div className="post-detail-body-container">
            <div className="post-detail-body-time-info-container">
              <p>{formatTimeDifference(data.createdAt)}</p>
              <div className="post-detail-body-time-info-line"></div>
              <p>{calculateReadingTime(data.content)}</p>
            </div>
            <div className="post-detail-body-content">
              {convertToHTML(data.content)}
            </div>
            <div className="post-detail-body-line-comment-content"></div>
            <div className="post-detail-body-comment-container">
              {data.comments.map((comment) => (
                <CommentItem key={comment.id} data={comment} />
              ))}
            </div>
          </div>
          <div className="post-detail-footer-container">
            {/* <ReactQuillTest /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
