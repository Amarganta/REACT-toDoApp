import React from "react";
import { Search } from "react-bootstrap-icons";
import { Bell, ArrowLeft } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import avatar from "../../../../../../assets/img/avatar-1.jpg";
import { useTranslation } from "react-i18next";
// import menuItems from "./data";

const NavBar = () => {
  const { goBack } = useHistory();
  const [t, i18n] = useTranslation("global");
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li>
              <button className="btn" onClick={goBack}>
                <ArrowLeft />
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <Search />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="btn btn-primary shadow" type="submit">
                {t("navbar.Search")}
              </button>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#e"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item">
                  <a
                    onClick={() => i18n.changeLanguage("es")}
                    href="#/action-2"
                  >
                    Spanish
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    onClick={() => i18n.changeLanguage("en")}
                    href="#/action-1"
                  >
                    English
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#e">
                <Bell />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#e">
                <Grid3x3GapFill />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#e">
                <Gear />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#e"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={avatar}
                  alt="user-avatar"
                  width="32"
                  className="rounded-circle ms-1 me-2"
                />
                Dominic Keller
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#e">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#e">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#e">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
