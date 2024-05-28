import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email, GitHub, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assets/HEicon.png" alt="logo" />
        </a>
        <div className="footer_left_socials">
          <a href="https://github.com/hamideghbali">
            <GitHub className="footer_left_socials_icon" style={{ color: "black" }} />
          </a>
          <a href="https://wa.me/4374990651">
            <WhatsApp className="footer_left_socials_icon" style={{ color: "black" }} />
          </a>
          <a href="https://www.instagram.com/hamideghbali.005">
            <Instagram className="footer_left_socials_icon" style={{ color: "black" }} />
          </a>
        </div>
      </div>

      <div className="footer_center">
        <h3>Quick Links</h3>
        <ul className="footer_links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocationOn />
          <p>Your Address Here</p>
        </div>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>hardinegh@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
