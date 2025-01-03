export interface Account {
  id: string;
  gmail: string;
  displayName: string;
  name: string;
  status: boolean;
  avatar: string;
  background: string;
  isDeleted: boolean;
  role: string;
}

export interface Category {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  image: string;
  description: string;
  isDeleted: boolean;
}

export interface Post {
  createdAt: string;
  updatedAt: string;
  id: string;
  title: string;
  content: string;
  accountId: string;
  categoryId: string;
  category: Category;
  account: Account;
  background: string;
  isDeleted: boolean;
}
