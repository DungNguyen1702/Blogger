import type { Post } from "./post_entity";
import type { AccountRoleEnum } from "../enum/AccountRoleEnum";

export interface Account {
  id : string;
  gmail : string;
  password : string;
  name : string;
  avatar : string;
  status : boolean;
  role : AccountRoleEnum;
  background : string;
  isDeleted : boolean;
  posts : Post[];
  totalPost : number;
  createdAt : string;
  updatedAt : string;
}