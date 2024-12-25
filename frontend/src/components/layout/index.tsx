import Footer from "../footer";
import Header from "../header";
import "./index.scss";

const Layout = (props: any) => {
  // const {} = props;
  return <div className="layout-container">
    <div className="layout-header-wrapper">
      <Header />
    </div>
    <div className="layout-content">
      {props.component}
    </div>
    <div className="layout-footer-wrapper">
      <Footer />
    </div>
  </div>;
};

export default Layout;
