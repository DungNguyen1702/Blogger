
import { Routes, Route } from "react-router-dom";
import { LoadableComponent } from "../../components/loadable-component";
import GuestRoute from "./guest-route";
import UserRoute from "./user-route";

const Homepage = LoadableComponent(() => import("../pages/homepage"));
const Login = LoadableComponent(() => import("../pages/auth/login"));

const AllRoutes = () => {
  return (
    <Routes>
      {/* Guest route */}
      <Route element={<GuestRoute/>}>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/auth/login" element={<Login/>}/>
      </Route>

      {/* User route */}
      <Route element={<UserRoute/>}>
        {/* <Route path="/user/dashboard" element={<Dashboard/>}/> */}
      </Route>
    </Routes>
  )
}

export default AllRoutes