// import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import {
  calculateReadingTime,
  convertToHTML,
  formatTimeDifference,
} from "../../../../utils/string-utils";
import CommentItem from "./components/comment-item";
// import ReactQuillTest from "./components/react-quill-test";

const PostDetail = () => {
  // const { id } = useParams();

  const data = {
    createdAt: "03-01-2025 10:10:51",
    updatedAt: "06-01-2025 13:08:42",
    id: "6777553b13e28f3d0828e157",
    title: "The Wonders of Space Exploration",
    content:
      "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
    accountId: "6777553a13e28f3d0828e136",
    categoryId: "6777553a13e28f3d0828e143",
    category: {
      createdAt: "03-01-2025 10:10:50",
      updatedAt: "06-01-2025 13:08:42",
      id: "6777553a13e28f3d0828e143",
      name: "Science",
      image:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
      description: "Discover the wonders of science and technology.",
      isDeleted: false,
      posts: null,
    },
    account: {
      id: "6777553a13e28f3d0828e136",
      gmail: "user1@gmail.com",
      displayName: "user1",
      name: "John Doe",
      status: true,
      avatar:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
      background:
        "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
      isDeleted: false,
      role: "USER",
      posts: null,
      totalPosts: null,
    },
    background:
      "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
    isDeleted: false,
    viewTurn: 10,
    comments: [
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Atque sed cum nemo officiis voluptas. Praesentium et aperiam iste facere. Nostrum laboriosam provident quia et nisi velit.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Atque sed cum nemo officiis voluptas. Praesentium et aperiam iste facere. Nostrum laboriosam provident quia et nisi velit.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Atque sed cum nemo officiis voluptas. Praesentium et aperiam iste facere. Nostrum laboriosam provident quia et nisi velit.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Atque sed cum nemo officiis voluptas. Praesentium et aperiam iste facere. Nostrum laboriosam provident quia et nisi velit.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Nihil corrupti hic vel. Consequatur optio iure consequatur cum alias dolorem enim. Et facilis voluptas ab nihil inventore. Quisquam aut illum.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Nihil corrupti hic vel. Consequatur optio iure consequatur cum alias dolorem enim. Et facilis voluptas ab nihil inventore. Quisquam aut illum.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Nihil corrupti hic vel. Consequatur optio iure consequatur cum alias dolorem enim. Et facilis voluptas ab nihil inventore. Quisquam aut illum.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Nihil corrupti hic vel. Consequatur optio iure consequatur cum alias dolorem enim. Et facilis voluptas ab nihil inventore. Quisquam aut illum.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Exercitationem rerum dolore ex aspernatur esse nostrum. Explicabo architecto officia iste ex excepturi inventore eaque. Voluptatem distinctio sequi harum et voluptas culpa. Voluptates nihil nihil modi distinctio id. Eos libero ipsum occaecati et.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Exercitationem rerum dolore ex aspernatur esse nostrum. Explicabo architecto officia iste ex excepturi inventore eaque. Voluptatem distinctio sequi harum et voluptas culpa. Voluptates nihil nihil modi distinctio id. Eos libero ipsum occaecati et.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Exercitationem rerum dolore ex aspernatur esse nostrum. Explicabo architecto officia iste ex excepturi inventore eaque. Voluptatem distinctio sequi harum et voluptas culpa. Voluptates nihil nihil modi distinctio id. Eos libero ipsum occaecati et.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Exercitationem rerum dolore ex aspernatur esse nostrum. Explicabo architecto officia iste ex excepturi inventore eaque. Voluptatem distinctio sequi harum et voluptas culpa. Voluptates nihil nihil modi distinctio id. Eos libero ipsum occaecati et.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Ipsa laborum dolor recusandae at. Quo qui rem amet quas adipisci consequatur. Adipisci tempore voluptas sit possimus. Et aperiam recusandae veritatis consequatur expedita. Fugiat adipisci accusamus aut.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Ipsa laborum dolor recusandae at. Quo qui rem amet quas adipisci consequatur. Adipisci tempore voluptas sit possimus. Et aperiam recusandae veritatis consequatur expedita. Fugiat adipisci accusamus aut.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Ipsa laborum dolor recusandae at. Quo qui rem amet quas adipisci consequatur. Adipisci tempore voluptas sit possimus. Et aperiam recusandae veritatis consequatur expedita. Fugiat adipisci accusamus aut.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:55",
        updatedAt: "03-01-2025 10:10:55",
        id: "6777553f13e28f3d0828e1a7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        commentParentId: null,
        content:
          "Ipsa laborum dolor recusandae at. Quo qui rem amet quas adipisci consequatur. Adipisci tempore voluptas sit possimus. Et aperiam recusandae veritatis consequatur expedita. Fugiat adipisci accusamus aut.",
        isDeleted: false,
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
    ],
    likes: [
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e136",
          gmail: "user1@gmail.com",
          displayName: "user1",
          name: "John Doe",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e137",
          gmail: "user2@gmail.com",
          displayName: "user2",
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
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e138",
          gmail: "user3@gmail.com",
          displayName: "user3",
          name: "Alice Johnson",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f4",
        accountId: "6777553a13e28f3d0828e136",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f5",
        accountId: "6777553a13e28f3d0828e137",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f6",
        accountId: "6777553a13e28f3d0828e138",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
      {
        createdAt: "03-01-2025 10:10:58",
        updatedAt: "03-01-2025 10:10:58",
        id: "6777554213e28f3d0828e1f7",
        accountId: "6777553a13e28f3d0828e139",
        postId: "6777553b13e28f3d0828e157",
        account: {
          id: "6777553a13e28f3d0828e139",
          gmail: "user4@gmail.com",
          displayName: "user4",
          name: "Bob Brown",
          status: true,
          avatar:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/default-avatar_egtzs2.jpg",
          background:
            "https://res.cloudinary.com/deei5izfg/image/upload/v1735265201/background_bazx2p.jpg",
          isDeleted: false,
          role: "USER",
          posts: null,
          totalPosts: null,
        },
      },
    ],
    totalComments: null,
    totalLikes: null,
  };

  const onClickAuthor = () => {
    console.log("Author clicked" + data.account.id);
  };

  return (
    <div className="post-detail-container">
      <div className="post-detail-header-container">
        <div className="post-detail-header-image-container">
          <img
            alt={`post detail id ${data.id}`}
            src={data.background}
            className="post-detail-header-background"
          />
          <div className="post-detail-header-info-container">
            <p className="post-detail-header-category">{data.category.name}</p>
            <p className="post-detail-header-post-title">{data.title}</p>
            <div className="post-detail-header-author-container d-flex align-items-center">
              <p className="post-detail-header-author-by-text">By : </p>
              <div
                className="post-detail-header-author-info-container d-flex align-items-center"
                onClick={onClickAuthor}
              >
                <img
                  alt={`author ${data.account.name}`}
                  src={data.account.avatar}
                  className="post-detail-header-author-avatar"
                />
                <p className="post-detail-header-author-name">
                  {data.account.displayName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="post-detail-header-blur"></div>
      </div>
      <div className="post-detail-body-container">
        <div className="post-detail-body-time-info-container">
          <p>{formatTimeDifference(data.createdAt)}</p>
          <div className="post-detail-body-time-info-line"></div>
          <p>{calculateReadingTime(data.content)}</p>
        </div>
        <div className="post-detail-body-content">
          {convertToHTML(data.content)}
        </div>
        <div className="post-detail-body-line-comment-content"></div>
        <div className="post-detail-body-comment-container">
          {data.comments.map((comment) => (
            <CommentItem key={comment.id} data={comment} />
          ))}
        </div>
      </div>
      <div className="post-detail-footer-container">
        {/* <ReactQuillTest /> */}
      </div>
    </div>
  );
};

export default PostDetail;
