import type { Account } from "./account_entity";

export interface Comment {
  id : string;
  accountId : string;
  postId : string;
  commentParentId : string;
  content : string;
  isDeleted : boolean;
  account : Account;
  replies : Comment[];
  createdAt : string;
  updatedAt : string;
}