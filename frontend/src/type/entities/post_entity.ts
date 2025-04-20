import type { Account } from "./account_entity";
import type { Category } from "./category_entity";
import type { Comment } from "./comment_entity";
import type { Like } from "./like_entity";

export interface Post {
  id: string;
  title : string;
  content: string;
  accountId : string;
  categoryId : string;
  category : Category;
  account: Account;
  background : string;
  isDeleted : boolean;
  viewTurn : number;
  comments : Comment[];
  likes : Like[];
  totalLikes : number;
  totalComments : number;
  createdAt : string;
  updatedAt : string;
}