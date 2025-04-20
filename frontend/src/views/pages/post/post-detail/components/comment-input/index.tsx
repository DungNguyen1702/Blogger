import { SendOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import "./index.scss";
import { Button } from "antd";
import { useState } from "react";

const CommentInput = (data: any) => {
  const account = {
    id: "677b87d1cf0756199afb6d26",
    gmail: "user2@gmail.com",
    name: "Jane Smith",
    status: true,
    avatar:
      "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
    background:
      "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
    isDeleted: false,
    role: "USER",
    posts: null,
    totalPosts: null,
  };

  const [content, setContent] = useState("");

  const handleRepy = () => {
    data.handleReply({
      account: account,
      content: content,
      commentParentId: data.commentParentId,
      accountId : account.id,
      postId : data.postId
    });
    setContent("");
  };

  return (
    <div className="comment-input-container">
      <img
        src={account.avatar}
        className="comment-input-account-avatar"
        alt={`${account.name}'s avatar`}
      />
      <TextArea
        className="comment-input"
        maxLength={255}
        autoSize={{ minRows: 1, maxRows: 4 }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button className="comment-input-send" onClick={handleRepy}>
        <SendOutlined />
      </Button>
    </div>
  );
};

export default CommentInput;
