import { Button, Input } from "antd";
import { IMAGES } from "../../constants/images";
import "./index.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = () => {
    console.log();
  };
  const handleLogIn = () => {
    navigate("/auth/login");
  };
  const onClickSearchIcon = () => {
    setIsSearch(!isSearch);
  };

  const handleNavigation = (path: string) => {
    navigate("/" + path);
  };

  const handleOnClickLogo = () => {
    navigate("/homepage");
  };
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <div className="header-container">
      <div className="header-logo-container" onClick={handleOnClickLogo}>
        <img alt="logo" src={IMAGES.logo_no_slogan} className="header-logo" />
        <p className="header-logo-name">Blogger</p>
      </div>

      {/* Toggle Button (chỉ hiển thị trên màn hình nhỏ) */}
      <button
        className="navbar-toggler d-sm-block d-md-none header-toggle"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </button>

      {/* Menu Content Container */}
      <div
        className={`header-menu-content-container ${isMenuOpen ? "open" : ""}`}
      >
        <div className="header-search-container">
          {isSearch && (
            <Input
              placeholder="Find the perfect blog title"
              className="header-search-input"
            />
          )}
          <SearchOutlined
            className="header-search-button"
            onClick={onClickSearchIcon}
          />
        </div>
        <div className="header-menu-container">
          <div
            className={`header-menu-item ${
              location.pathname === "/homepage"
                ? "header-menu-item-selected"
                : ""
            }`}
            onClick={() => {
              handleNavigation("homepage");
            }}
          >
            Home
          </div>
          <div
            className={`header-menu-item ${
              location.pathname === "/blogs" ? "header-menu-item-selected" : ""
            }`}
            onClick={() => {
              handleNavigation("blogs");
            }}
          >
            Blogs
          </div>
          <div
            className={`header-menu-item ${
              location.pathname === "/about" ? "header-menu-item-selected" : ""
            }`}
            onClick={() => {
              handleNavigation("about");
            }}
          >
            About
          </div>
          <div
            className={`header-menu-item ${
              location.pathname === "/articles"
                ? "header-menu-item-selected"
                : ""
            }`}
            onClick={() => {
              handleNavigation("articles");
            }}
          >
            Articles
          </div>
          <div
            className={`header-menu-item ${
              location.pathname === "/contact-us"
                ? "header-menu-item-selected"
                : ""
            }`}
            onClick={() => {
              handleNavigation("contact-us");
            }}
          >
            Contact Us
          </div>
        </div>
        <div className="header-auth-container">
          <Button className="header-auth-button" onClick={handleLogIn}>
            Log in
          </Button>
          <Button className="header-auth-button" onClick={handleSignUp}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
