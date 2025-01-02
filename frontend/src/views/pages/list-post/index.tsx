// import { useState } from "react";
import "./index.scss";
// import fakeData from "../../../data/fake_data.json";
import GreenTag from "../../../components/green-tag";
import FeaturedMonth from "./components/featured-month";
import PopularPost from "./components/popular-post";
import { Button, Pagination } from "antd";
import { FormOutlined } from "@ant-design/icons";
import CardItem from "./components/card-item";
import { useEffect, useState } from "react";
import type { Post } from "../../../models";
import GreenButton from "../../../components/button/green-button";

const ListPost = () => {
  // const [monthPosts, setMonthPosts] = useState(fakeData.posts.slice(0, 5));
  // const [popularPosts, setPopularPosts] = useState(fakeData.posts.slice(0, 5));

  const data: Post[] = [
    {
      createdAt: "30-12-2024 15:30:22",
      updatedAt: "30-12-2024 15:30:22",
      id: "1",
      title: "The Wonders of Space Exploration",
      content:
        "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
      accountId: "67725a1d014dfd73ad527ccc",
      categoryId: "67725a1d014dfd73ad527cd9",
      category: {
        createdAt: "30-12-2024 15:30:21",
        updatedAt: "30-12-2024 15:30:21",
        id: "67725a1d014dfd73ad527cd9",
        name: "Science",
        image:
          "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
        description: "Discover the wonders of science and technology.",
        isDeleted: false,
      },
      account: {
        id: "67725a1d014dfd73ad527ccc",
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
      },
      background:
        "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
      isDeleted: false,
    },
    {
      createdAt: "30-12-2024 15:30:22",
      updatedAt: "30-12-2024 15:30:22",
      id: "2",
      title: "The Wonders of Space Exploration",
      content:
        "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
      accountId: "67725a1d014dfd73ad527ccc",
      categoryId: "67725a1d014dfd73ad527cd9",
      category: {
        createdAt: "30-12-2024 15:30:21",
        updatedAt: "30-12-2024 15:30:21",
        id: "67725a1d014dfd73ad527cd9",
        name: "Science",
        image:
          "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
        description: "Discover the wonders of science and technology.",
        isDeleted: false,
      },
      account: {
        id: "67725a1d014dfd73ad527ccc",
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
      },
      background:
        "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
      isDeleted: false,
    },
    {
      createdAt: "30-12-2024 15:30:22",
      updatedAt: "30-12-2024 15:30:22",
      id: "3",
      title: "The Wonders of Space Exploration",
      content:
        "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
      accountId: "67725a1d014dfd73ad527ccc",
      categoryId: "67725a1d014dfd73ad527cd9",
      category: {
        createdAt: "30-12-2024 15:30:21",
        updatedAt: "30-12-2024 15:30:21",
        id: "67725a1d014dfd73ad527cd9",
        name: "Science",
        image:
          "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
        description: "Discover the wonders of science and technology.",
        isDeleted: false,
      },
      account: {
        id: "67725a1d014dfd73ad527ccc",
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
      },
      background:
        "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
      isDeleted: false,
    },
    {
      createdAt: "30-12-2024 15:30:22",
      updatedAt: "30-12-2024 15:30:22",
      id: "4",
      title: "The Wonders of Space Exploration",
      content:
        "<p>Space exploration has captivated humanity for centuries, offering a glimpse into the vast and mysterious universe. From the first moon landing to the discovery of exoplanets, space exploration has expanded our understanding of the cosmos. Advances in technology, such as powerful telescopes and spacecraft, have enabled scientists to study distant galaxies, black holes, and the origins of the universe. Moreover, space exploration has practical applications, such as satellite technology for communication and weather forecasting. As we continue to explore space, it inspires curiosity, innovation, and a sense of wonder. Whether through NASA missions or private space companies, space exploration holds the key to unlocking the secrets of the universe.</p>",
      accountId: "67725a1d014dfd73ad527ccc",
      categoryId: "67725a1d014dfd73ad527cd9",
      category: {
        createdAt: "30-12-2024 15:30:21",
        updatedAt: "30-12-2024 15:30:21",
        id: "67725a1d014dfd73ad527cd9",
        name: "Science",
        image:
          "https://res.cloudinary.com/deei5izfg/image/upload/v1735283172/Blogger/Category/science_pq13sb.jpg",
        description: "Discover the wonders of science and technology.",
        isDeleted: false,
      },
      account: {
        id: "67725a1d014dfd73ad527ccc",
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
      },
      background:
        "https://img.freepik.com/free-vector/space-exploration-concept_23-2148587587.jpg",
      isDeleted: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [currentPosts, setCurrentPosts] = useState<typeof data>([]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreatePost = () => {
    console.log("Create post");
  };

  return (
    <div className="list-post-container">
      <div className="list-post-header-container row">
        <div className="list-post-header-left-container col-lg-8 col-sm-12">
          <GreenTag emphasizeWord="Featured" normalWorld="This Month" />
          <FeaturedMonth />
        </div>
        <div className="list-post-header-right-container col-lg-4 col-sm-12">
          <GreenTag emphasizeWord="Popular" normalWorld="Posted" />
          <PopularPost />
        </div>
      </div>
      <div className="list-post-body-container row">
        <div className="list-post-body-left-container col-lg-8 col-sm-12">
          <div className="list-post-create-post-container">
            <p className="list-post-create-post-title">
              Share Your Day With Our Readers
            </p>
            <GreenButton
              handleButton={handleCreatePost}
              content={
                <div className="green-button-content">
                  <FormOutlined />
                  Write On Notebook
                </div>
              }
            />
          </div>
          {currentPosts.map((item, index) => (
            <div className="list-post-item-container">
              <CardItem
                hasImage={true}
                longContent={200}
                item={item}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
          <div className="list-post-pagination-container">
            <Pagination
              current={currentPage}
              total={data.length}
              pageSize={postsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false}
              itemRender={(_, type, originalElement) => {
                if (type === "prev") {
                  return <a>Previous</a>;
                }
                if (type === "next") {
                  return <a>Next</a>;
                }
                return originalElement;
              }}
            />
          </div>
        </div>
        <div className="list-post-body-left-container col-lg-4 d-sm-none"></div>
      </div>
    </div>
  );
};

export default ListPost;
