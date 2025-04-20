
import type { Post } from "./post_entity";
import type { Account } from "./account_entity";

export interface Like {
  id : string;
  accountId : string;
  postId : string;
  account : Account;
  post : Post;
  createdAt : string;
  updatedAt : string;
}
