class PostCreateModel {
  id: string;
  title: string;
  content: string;
  accountId: string;
  categoryId: string;

  constructor(
    id: string,
    title: string,
    content: string,
    accountId: string,
    categoryId: string,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.accountId = accountId;
    this.categoryId = categoryId;
  }
}

export default PostCreateModel;