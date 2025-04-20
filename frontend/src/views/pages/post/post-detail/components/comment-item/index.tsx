import { useState } from "react";
import { formatTimeDifference } from "../../../../../../utils/string-utils";
import "./index.scss";
import CommentInput from "../comment-input";
import type { Comment } from "../../../../../../type/entities";
import CommentAPI from "../../../../../../api/commentAPI";

const CommentItem = (props: any) => {
  const { data } = props;

  const [isViewReply, setIsViewReply] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [replies, setReplies] = useState(data.replies);

  const handleReply = async (comment: Comment) => {
    try {
      const responseReply = await CommentAPI.createComment(comment);

      const newReply = responseReply.data;

      console.log(newReply);

      setReplies([...replies, newReply]);
    } catch (error) {}
  };

  return (
    <div className="comment-item-container">
      <div className="comment-item-avatar-container">
        <img
          src={data.account.avatar}
          alt="avatar"
          className="comment-item-avatar"
        />
      </div>
      <div className="comment-item-content">
        <div className="comment-item-author">
          <p className="comment-author-name">{data.account.name}</p>
        </div>
        <div className="comment-item-text">
          <p>{data.content}</p>
        </div>
        <div className="comment-item-function">
          <p className="comment-created-date">
            {formatTimeDifference(data.createdAt, false)}
          </p>
          <p className="comment-function-button">Like</p>
          {data.commentParentId === "" && (
            <p
              className="comment-function-button"
              onClick={() => setIsReply(!isReply)}
            >
              Reply
            </p>
          )}
          {isViewReply && (
            <p
              className="comment-function-button"
              onClick={() => setIsViewReply(false)}
            >
              Collapse
            </p>
          )}
        </div>

        {replies && replies.length > 0 && !isViewReply && (
          <div
            className="comment-reply-account-container"
            onClick={() => {
              setIsViewReply(true);
              console.log(replies);
            }}
          >
            <img
              src={replies[0].account.avatar}
              alt={`${replies[0].account.name} avatar`}
              className="comment-reply-account-avatar"
            />
            <p className="comment-function-button">
              {replies[0].account.name} has replied
            </p>
          </div>
        )}

        {isViewReply && (
          <div className="comment-reply-container">
            {replies.map((reply: any) => (
              <CommentItem data={reply} />
            ))}
          </div>
        )}

        {isReply && data.commentParentId === "" && (
          <CommentInput handleReply={handleReply} commentParentId={data.id} />
        )}
      </div>
    </div>
  );
};

export default CommentItem;
