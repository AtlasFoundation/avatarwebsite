import Linkedin from "../../../src/assets/linkedin.png";
import twitter from "../../../src/assets/twitter.png";
import discord from "../../../src/assets/discord.png";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-80 pb-0">
      <div className="container pb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 overflow-hidden">
            <div id="footer-sidebar-first" className="company detail">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">About Us</h4>
            <p className="text-white mt-3 mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Making a 3D space you are in complete control of should be easy. The web provides the right context and tool to create natural integrations to existing platforms, that works across all devices and performs as well as native apps.</p>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-2 overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Legal Info</h4>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><a href="about">Risk Warnings</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><a href="about">Privacy Policy</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><a href="about">security</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms"><a href="about">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-2 info-section overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Contact Us</h4>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><a href="about"> <FaMapMarkerAlt /> san rafael, CA 94901 US.</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><a href="about"><FaPhoneAlt /> +44 (0) 333 577 0799</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><a href="about"><FaEnvelope /> Thenexuscity@gmail.com</a></li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 overflow-hidden">
            <h4 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Subscribe Us</h4>
            <div className="subscribe-wrap mb-4">
              <form id="subscribe-blog" className="d-flex wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                <div id="subscribe-email">
                  <input
                    type="email"
                    name="email"
                    className="has-undefinedpx-font-size"
                    placeholder="Enter your email"
                    value=""
                    id="subscribe-field"
                  />
                </div>
                <div id="subscribe-submit">
                  <button type="submit" className="blue-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="follow">
              <img src={Linkedin} alt="linkedin" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" />
              <img src={twitter} alt="twitter" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms" />
              <img src={discord} alt="discord" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms" />
            </div>
          </div>
        </div>

      </div>
      <div className="container border-top">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>© Copyright The Nexus 2022. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
