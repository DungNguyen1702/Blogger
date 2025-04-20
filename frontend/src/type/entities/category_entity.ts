import type { Post } from "../../models";

export interface Category {
  id: string;
  name: string;
  description: string;
  image : string;
  isDeleted: boolean;
  posts : Post[];
  createdAt: string;
  updatedAt: string;
}