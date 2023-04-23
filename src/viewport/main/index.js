import {
  DiscoIcon,
  CartIcon,
  GalleryIcon,
  ClubIcon,
  RetailIcon,
  FashionIcon,
  TalkIcon,
  ExhibitionIcon,
} from "../../svgIcon/svg";
import BannerImg from "../../../src/assets/banner-img01.png";
import BannerLogo from "../../../src/assets/bannerLogo.png";
import AboutImg from "../../../src/assets/about-bg.png";
import virtualAvatar01 from "../../../src/assets/virtual-avatar01.jpg";

import { FaCheckCircle, FaHome, FaUser } from "react-icons/fa";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="banner" id="home">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-7 col-md-6 wow pulse animated d-flex align-items-center"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <div className="text-wrap">
                <h1 className="heading">We are building</h1>
                <img
                  src={BannerLogo}
                  alt="bannerLogo"
                  className="img-fluid w-75"
                />{" "}
                <br></br>
                <button
                  target="#"
                  className="btn block-btn common-btn mt-5"
                  href="#About_Us"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 wow fadeInLeft animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <img
                src={BannerImg}
                alt="bannerImg"
                className="img-fluid bannerImg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-us p-80" id="About_Us">
        <div className="container">
          <div className="row d-flex align-items-center text-white">
            <div className="col-lg-6">
              <div
                className="about-img-wrap wow fadeInLeft animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <img
                  src={AboutImg}
                  alt="aboutImg"
                  className="img-fluid aboutImg w-90"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h1
                className="author mb-2 mb-lg-4 wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                About Us
              </h1>
              <p
                className="pe-5 wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                The Nexus is about interconnection. We are passionate about the
                software we build to enable a more connected world. 
              </p>
              <p
                className="pe-5 wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="800ms"
              >
                We imagine a place for writers, poets, actors, artists, data scientists,
                software engineers, philosophers, psychologists, people from all
                walks of life to gather together and build something beautiful
                and worthy of collective effort. We believe we can build
                something unique, community-owned, and open to all.
              </p>
              <ul
                className="pe-5 list-unstyled wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                <li>
                  <FaCheckCircle />
                  Community Owned
                </li>
                <li>
                  <FaCheckCircle />
                  Open Source
                </li>
                <li>
                  <FaCheckCircle />
                  Interconnected
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-do p-80" id="What_We_Do">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h6
                className="small-text text-shadow text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                What To Do In
              </h6>
              <h1
                className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                The Metaverse
              </h1>
              <p
                className=" tagline text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                Nexus is a city in the open verse, built with software,
                determination, and love. The Nexus serves as a virtual downtown,
                a global commons, a connection point leveraging technology to
                bring us closer to the world we want, and the web we want.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">
              <ul className="list-unstyled">
                <li
                  className="wow fadeInLeft animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list">
                    <h3>Spaces</h3>
                    <p className="mb-0">
                      In the metaverse you can generate spaces or select from a
                      catalogue: Gallery, Retail, Auditorium, Club, or Room.
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInLeft animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list hidden">
                    <h3>Social</h3>
                    <p className="mb-0">
                      Build your own games and social experiences and link them
                      together
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInLeft animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list">
                    <h3>Gaming</h3>
                    <p className="mb-0">
                      Scalable multiplayer infrastructure with voice, video,
                      expressive avatars, a visual editor and portals between
                      worlds.
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInLeft animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list hidden">
                    <h3>Events</h3>
                    <p className="mb-0">
                      In the metaverse you can host many different kinds of
                      events: fashion shows, talk shows, exhibitions, even
                      parties!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-md-2 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <ul className="list-unstyled">
                <li
                  className="icon-wrap wow fadeInUp animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <FaHome className="icons-border" />
                </li>
                <li
                  className="icon-wrap wow fadeInUp animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <FaUser className="icons-border" />
                </li>
                <li
                  className="icon-wrap wow fadeInUp animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <CartIcon className="icons-border" />
                </li>
                <li
                  className="icon-wrap wow fadeInUp animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <DiscoIcon className="icons-border" />
                </li>
              </ul>
            </div>
            <div
              className="col-md-5 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <ul className="list-unstyled">
                <li
                  className="wow fadeInRight animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list hidden">
                    <h3>Open Source</h3>
                    <p className="mb-0">
                      An end-to-end framework for the web, built on popular
                      Javascript frameworks.
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInRight animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list">
                    <h3>Avatars</h3>
                    <p className="mb-0">
                      In the metaverse everyone has an avatar, you can either
                      make your own avatar or select from a catalogue.
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInRight animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list hidden">
                    <h3>Spaces</h3>
                    <p className="mb-0">
                      In the metaverse you can generate spaces or select from a
                      catalogue: Gallery, Retail, Auditorium, Club, or Room.
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInRight animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="work-list">
                    <h3>Events</h3>
                    <p className="mb-0">
                      In the metaverse you can host many different kinds of
                      events: fashion shows, talk shows, exhibitions, even
                      parties!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="virtual-space p-80 text-center" id="virtual-space">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6
                className="small-text text-shadow text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                Create Your Own{" "}
              </h6>
              <h1
                className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                Virtual Spaces
              </h1>
              <p
                className=" tagline text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="800ms"
              >
                You can generate your own space in one of 5 categories: Gallery,
                Retail, Auditorium, Club, or Room. Our spaces are not replicas
                of real spaces, or cartoonish environments, they are optimized
                designs of the future.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <div className="virtual-space-list">
                <div className="VR-space-icon">
                  <GalleryIcon />
                </div>
                <h3>AI Agents</h3>
                <p className="mb-0">
                  We built a software stack to create interesting, story-driven
                  agents to populate the city. Each one has a unique personality
                  and is capable of open-ended conversation. The AI agents can
                  build relationships with each other, form meta-narratives and
                  keep the world rich and interesting for all.
                </p>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="700ms"
            >
              <div className="virtual-space-list">
                <div className="VR-space-icon">
                  <ClubIcon />
                </div>
                <h3>World Engine</h3>
                <p className="mb-0">
                  We built our own browser-based 3D world engine to power
                  projects like The Nexus. The engine runs on every platform, in
                  the browser and native, including VR and mobile. publicly
                  available game engine to include full MMO multiplayer
                  deployment at scale, built on React, three.js and many other
                  open source frameworks and libraries.
                </p>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="800ms"
            >
              <div className="virtual-space-list">
                <div className="VR-space-icon">
                  <RetailIcon />
                </div>
                <h3>Interoperable</h3>
                <p className="mb-0">
                  Interoperability between different worlds is critical for the
                  success of an open metaverse. We need specifications for
                  avatars, wearables and equipment that are adopted across
                  different platforms so that users can seamlessly bring their
                  stuff anywhere and creators can maximize the value and reach
                  of the assets they create.
                </p>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="virtual-avatar p-80 text-center" id="virtual-avatar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6
                className="small-text text-shadow text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                Create Your Own{" "}
              </h6>
              <h1
                className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                Virtual Avatar
              </h1>
              <p
                className=" tagline text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="800ms"
              >
                You can select from our wide range of avatars and customize them
                to your liking. You can also purchase NFTs and wearables (like
                shoes, clothes, and accessories) to further enhance your
                characters.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <div className="virtual-avatar-list">
                <img
                  src={virtualAvatar01}
                  alt="virtual Avatar"
                  className="img-fluid"
                />
                <h4 className="mt-3">Gallery</h4>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="700ms"
            >
              <div className="virtual-avatar-list">
                <img
                  src={virtualAvatar01}
                  alt="virtual Avatar"
                  className="img-fluid"
                />
                <h4 className="mt-3">Gallery</h4>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="800ms"
            >
              <div className="virtual-avatar-list">
                <img
                  src={virtualAvatar01}
                  alt="virtual Avatar"
                  className="img-fluid"
                />
                <h4 className="mt-3">Gallery</h4>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="900ms"
            >
              <div className="virtual-avatar-list">
                <img
                  src={virtualAvatar01}
                  alt="virtual Avatar"
                  className="img-fluid"
                />
                <h4 className="mt-3">Gallery</h4>
                <button target="#" className="common-button">
                  get now
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              className="col-12 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="900ms"
            >
              <button target="#" className="common-button mb-0">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Host-events p-80 text-center" id="Host-events">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1
                className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                Host Events
              </h1>
              <p
                className=" tagline text-white wow fadeInUp animated"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                You can select from our wide range of avatars and customize them
                to your liking. You can also purchase NFTs and wearables (like
                shoes, clothes, and accessories) to further enhance your
                characters.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <div className="host-events-list">
                <TalkIcon />
                <h4 className="mt-3 mb-0">Talkshow</h4>
                <button target="#" className="underline-text">
                  Contact us
                </button>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="700ms"
            >
              <div className="host-events-list">
                <FashionIcon />
                <h4 className="mt-3 mb-0">Fashion show</h4>
                <button target="#" className="underline-text">
                  Contact us
                </button>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="800ms"
            >
              <div className="host-events-list">
                <ExhibitionIcon />
                <h4 className="mt-3 mb-0">Exhibitions</h4>
                <button target="#" className="underline-text">
                  Contact us
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              className="col-12 wow fadeInUp animated"
              data-wow-duration="1000ms"
              data-wow-delay="900ms"
            >
              <button target="#" className="common-button mb-0">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
