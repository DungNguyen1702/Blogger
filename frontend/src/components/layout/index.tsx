import Header from "../header";

const Layout = (props: any) => {
  // const {} = props;
  return <div className="layout-container">
    <div className="layout-header">
      <Header />
    </div>
    <div className="layout-content">
      {props.children}
    </div>
  </div>;
};

export default Layout;
