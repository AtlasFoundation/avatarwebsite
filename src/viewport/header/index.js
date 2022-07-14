import { Fragment } from "react";
import { FaBars, FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <div className="header_top">
        <nav className="navbar navbar-expand-lg">
          <div className="container wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="col-md-7">
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <div class="hamburger-toggle">
                  <FaBars className="hamburger" />
                </div>
              </button>
              <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="nav navbar-nav flex-row">
                  <li className="nav-item nav-link">
                    <a href="#home" className="nav-anchor">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#What_We_Do" className="nav-anchor">
                      Metaverse
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Open-Source" className="nav-anchor">
                      space
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#projects" className="nav-anchor">
                      avatars
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Testimonial" className="nav-anchor">
                      events
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Testimonial" className="nav-anchor">
                      extras
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2">
            <ul className="nav navbar-nav flex-row social-icons">
              <li className="nav-item nav-link">
                <a href="#hh">
                  <FaFacebookF />
                </a>
              </li>

              <li className="nav-item nav-link">
                <a href="#hh">
                  <FaTwitter />
                </a>
              </li>

              <li className="nav-item nav-link">
                <a href="#hh">
                  <FaDiscord />
                </a>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
