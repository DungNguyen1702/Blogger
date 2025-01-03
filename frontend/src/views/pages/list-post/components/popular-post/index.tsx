import { Swiper, SwiperSlide } from "swiper/react";
import type { Post } from "../../../../../models";
import CardItem from "../card-item";
import "./index.scss";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const chunkArray = (arr: Post[], size: number): Post[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const PopularPost = () => {
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

  const dataPairs = chunkArray(data, 2);

  return (
    <div className="list-post-popular-post-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {dataPairs.map((pair, index) => (
          <SwiperSlide key={index}>
            {pair.map((item) => (
              <div key={item.id} className="list-post-popular-post-item">
                <CardItem hasImage={false} longContent={100} item={item} />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularPost;
