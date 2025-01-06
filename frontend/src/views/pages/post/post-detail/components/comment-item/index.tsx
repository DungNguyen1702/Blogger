import { formatTimeDifference } from "../../../../../../utils/string-utils";
import "./index.scss";

const CommentItem = (props: any) => {
  const { data } = props;

  return (
    <div className="comment-item-container">
      <div className="comment-item-avatar-container">
        <img src={data.account.avatar} alt="avatar" className="comment-item-avatar"/>
      </div>
      <div className="comment-item-content">
        <div className="comment-item-author">
          <p>{data.account.displayName}</p>
        </div>
        <div className="comment-item-text">
          <p>{data.content}</p>
        </div>
        <div className="comment-item-function">
          <p>{formatTimeDifference(data.createdAt, false)}</p>
          <p>Like</p>
          <p>Reply</p>
        </div>
        <p>View all</p>
      </div>
    </div>
  );
};

export default CommentItem;
