import {
  InstagramOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { IMAGES } from "../../constants/images";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-start-container row">
        <div className="col-lg-6 col-sm-12 d-flex align-items-center">
          <img alt="logo" className="footer-logo" src={IMAGES.logo_slogan} />
          <p className="footer-slogan">
            " Where inspiration meets storytelling - share your voice, inspire
            the world "
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 row d-flex align-items-center">
          <div className="col-lg-6 col-sm-12">
            <p className="footer-start-title">Contact the Publisher</p>
            <div className="footer-start-content">
              <p>
                <strong>Gmail: </strong>
              </p>
              <p className="footer-start-content-main">
                vandung17022003@gmail.com
              </p>
            </div>
            <div className="footer-start-content">
              <p>
                <strong>Phone: </strong>
              </p>
              <p className="footer-start-content-main">0905116391</p>
            </div>
            <div className="footer-start-content">
              <p>
                <strong>Address: </strong>
              </p>
              <p className="footer-start-content-main">
                111 Phan Thanh Stress, Thac Gian Ward, Thanh Khe District, Da
                Nang City
              </p>
            </div>
            <p className="footer-start-title">Follow us on</p>
            <div className="d-flex justify-content-between footer-start-icon-container">
              <TikTokOutlined />
              <InstagramOutlined />
              <YoutubeOutlined />
              <FaSquareFacebook />

            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <p className="footer-start-title">Our location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.6046940000265!2d108.20581807459985!3d16.063518139591782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b49ec3e80d%3A0x3e7c7e65812fee07!2zMTExIFBoYW4gVGhhbmgsIFRo4bqhYyBHacOhbiwgVGhhbmggS2jDqiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1734935323894!5m2!1svi!2s"
              className="footer-iframe"
              title="Our location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-end-container">
        <p>Dec 2024 | Blogger Publisher Studio</p>
      </div>
    </div>
  );
};

export default Footer;
