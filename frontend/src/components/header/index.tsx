import { Button, Input } from "antd";
import { IMAGES } from "../../constants/images";
import "./index.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log();
  };
  const handleLogIn = () => {};
  const onClickSearchIcon = () => {
    setIsSearch(!isSearch);
  };

  const handleOnClickLogo = () => {
    navigate("/homepage");
  };

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
          <div className="header-menu-item header-menu-item-selected">Home</div>
          <div className="header-menu-item">About</div>
          <div className="header-menu-item">Articles</div>
          <div className="header-menu-item">Contact Us</div>
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
