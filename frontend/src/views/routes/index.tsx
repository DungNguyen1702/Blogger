import { Routes, Route, Navigate } from "react-router-dom";
import { LoadableComponent } from "../../components/loadable-component";
import GuestRoute from "./guest-route";
import UserRoute from "./user-route";
import DocumentDrafting from "../pages/post/create-post";

const Layout = LoadableComponent(() => import("../../components/layout"));
const Homepage = LoadableComponent(() => import("../pages/homepage"));
const Login = LoadableComponent(() => import("../pages/auth/login/login"));
const ListPost = LoadableComponent(() => import("../pages/list-post"));
const PostDetail = LoadableComponent(() => import("../pages/post/post-detail"));

const AllRoutes = () => {
  return (
    <Routes>
      {/* Guest route */}
      <Route element={<GuestRoute />}>
        <Route path="/" element={<Navigate to={"/homepage"} />} />

        <Route path="/homepage" element={<Layout component={<Homepage />} />} />
        <Route path="/auth/login" element={<Layout component={<Login />} />} />
        <Route
          path="/create-post"
          element={<Layout component={<DocumentDrafting />} />}
        />
        <Route path="/blogs" element={<Layout component={<ListPost />} />} />
        <Route
          path="/blogs/:id"
          element={<Layout component={<PostDetail />} />}
        />
      </Route>

      {/* User route */}
      <Route element={<UserRoute />}>
        {/* <Route path="/user/dashboard" element={<Dashboard/>}/> */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
