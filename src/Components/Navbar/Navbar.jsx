import React, { useRef, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/copy.jpg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useTranslation } from "react-i18next";

const Navbar = ({ menu, setMenu }) => {
  const { t, i18n } = useTranslation();
  const menuRef = useRef();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false); // Закрити dropdown після вибору
  };

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Name" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>{t("nav.home")}</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>{t("nav.about")}</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>{t("nav.services")}</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>{t("nav.portfolio")}</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>{t("nav.contact")}</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} />}
        </li>

        {/* LANGUAGE DROPDOWN */}
        <div className="language-dropdown">
          <div className="dropdown-header" onClick={() => setIsLangOpen(!isLangOpen)}>
            🌐 {i18n.language.toUpperCase()} ▼
          </div>
          {isLangOpen && (
            <ul className="dropdown-list">
              <li onClick={() => changeLanguage("en")}>English</li>
              <li onClick={() => changeLanguage("ru")}>Русский</li>
            </ul>
          )}
        </div>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {t("nav.connect")}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
