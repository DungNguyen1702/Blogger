import { Routes, Route, Navigate } from "react-router-dom";
import { LoadableComponent } from "../../components/loadable-component";
import GuestRoute from "./guest-route";
import UserRoute from "./user-route";
import Layout from "../../components/layout";

const Homepage = LoadableComponent(() => import("../pages/homepage"));
const Login = LoadableComponent(() => import("../pages/auth/login/login"));
const ListPost = LoadableComponent(() => import("../pages/list-post"));

const AllRoutes = () => {
  return (
    <Routes>
      {/* Guest route */}
      <Route element={<GuestRoute />}>
        <Route path="/" element={<Navigate to={"/homepage"} />} />

        <Route path="/homepage" element={<Layout component={<Homepage />} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/posts" element={<Layout component={<ListPost />} />} />
      </Route>

      {/* User route */}
      <Route element={<UserRoute />}>
        {/* <Route path="/user/dashboard" element={<Dashboard/>}/> */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
