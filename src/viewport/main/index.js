import { DiscoIcon, CartIcon, GalleryIcon, ClubIcon, RetailIcon, FashionIcon, TalkIcon, ExhibitionIcon } from "../../svgIcon/svg";
import BannerImg from "../../../src/assets/banner-img01.png";
import BannerLogo from "../../../src/assets/bannerLogo.png";
import AboutImg from "../../../src/assets/about-bg.png";
import virtualAvatar01 from "../../../src/assets/virtual-avatar01.jpg";


import { FaCheckCircle, FaHome, FaUser} from "react-icons/fa";


const Main = () => {
  return (
    <div className="wrapper">
      <div className="banner" id="home">
        <div className="container">
          <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-6 wow pulse animated d-flex align-items-center" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="text-wrap">
                  <h1 className="heading">We are building</h1>
                  <img src={BannerLogo} alt="bannerLogo" className="img-fluid w-75" /> <br></br>
                  <button target="#" className="btn block-btn common-btn mt-5" href="#About_Us">Learn More</button>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <img src={BannerImg} alt="bannerImg" className="img-fluid bannerImg" />
              </div>
          </div>
        </div>
      </div>

      <div className="about-us p-80" id="About_Us">
        <div className="container">
          <div className="row d-flex align-items-center text-white">
            <div className="col-lg-6">
              <div className="about-img-wrap wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <img src={AboutImg} alt="aboutImg" className="img-fluid aboutImg w-90" />
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h1 className="author mb-2 mb-lg-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">About Us</h1>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              Made on the XREngine we are building The Nexus, a downtown district in a massive space station. A collaborative universe we can build together. The Nexus is an entertainment hub in the Metaverse. Located in Freeside Station, high above Earth, The Nexus features a world-class venue, shopping, galleries, night life, games, events and transportation to other worlds. The Nexus is readily available from the browser but can be connected to from any participating application.
              </p>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              The Nexus is inspired and conceptualized as an utopic future of our new spaces.  The possibility to use the metaverse as an experiment to design new cities.
              </p>
              <ul className="pe-5 list-unstyled wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="900ms">
                <li><FaCheckCircle />Playful, Informative, Immersive, Friendly.</li>
                <li><FaCheckCircle />Information and data awareness.</li>
                <li><FaCheckCircle />Positive feelings related to technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-do p-80" id="What_We_Do">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h6 className="small-text text-shadow text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">What To Do In</h6>
              <h1 className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">The Metaverse</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">An end-to-end framework for the web, built on popular Javascript frameworks. Scalable multiplayer infrastructure with voice, video, expressive avatars a visual editor and portals between worlds. Build your own games and social experiences and link them together.</p>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-5">
            <ul className="list-unstyled">
              <li className="wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list">
                  <h3>Spaces</h3>
                  <p className="mb-0">In the metaverse you can generate spaces or select from a catalogue: Gallery, Retail, Auditorium, Club, or Room.</p>
                </div>
              </li>
              <li className="wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list hidden">
                  <h3>Avatars</h3>
                  <p className="mb-0">In the metaverse everyone has an avatar, you can either make your own avatar or select from a catalogue.</p>
                </div>
              </li>
              <li className="wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list">
                  <h3>NFT’s</h3>
                  <p className="mb-0">In the metaverse everything you own will be a digital asset, you can buy, sell, or trade them as NFTs in the marketplace.</p>
                </div>
              </li>
              <li className="wow fadeInLeft animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list hidden">
                  <h3>Events</h3>
                  <p className="mb-0">In the metaverse you can host many different kinds of events: fashion shows, talk shows, exhibitions, even parties!</p>
                </div>
              </li>
            </ul>
            </div>
            <div className="col-md-2 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <ul className="list-unstyled">
              <li className="icon-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <FaHome className="icons-border" />
              </li>
              <li className="icon-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <FaUser className="icons-border" />
              </li>
              <li className="icon-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <CartIcon className="icons-border" />
              </li>
              <li className="icon-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <DiscoIcon className="icons-border" />
              </li>
              </ul>
            </div>
            <div className="col-md-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
            <ul className="list-unstyled">
              <li className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list hidden">
                  <h3>Spaces</h3>
                  <p className="mb-0">In the metaverse you can generate spaces or select from a catalogue: Gallery, Retail, Auditorium, Club, or Room.</p>
                </div>
              </li>
              <li className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list">
                  <h3>Avatars</h3>
                  <p className="mb-0">In the metaverse everyone has an avatar, you can either make your own avatar or select from a catalogue.</p>
                </div>
              </li>
              <li className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list hidden">
                  <h3>Spaces</h3>
                  <p className="mb-0">In the metaverse you can generate spaces or select from a catalogue: Gallery, Retail, Auditorium, Club, or Room.</p>
                </div>
              </li>
              <li className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="work-list">
                  <h3>Events</h3>
                  <p className="mb-0">In the metaverse you can host many different kinds of events: fashion shows, talk shows, exhibitions, even parties!</p>
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
              <h6 className="small-text text-shadow text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Create Your Own </h6>
              <h1 className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">Virtual Spaces</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">You can generate your own space in one of 5 categories: Gallery, Retail, Auditorium, Club, or Room. Our spaces 
are not replicas of real spaces, or cartoonish environments, they are optimized designs of the future.</p>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="virtual-space-list">
                  <div className="VR-space-icon">
                  <GalleryIcon />
                  </div>
                  <h3>Gallery</h3>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of Lorem Ipsum is simply...</p>
                  <button target="#" className="common-button">get now</button>
                </div>
            </div>
            <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
                <div className="virtual-space-list">
                  <div className="VR-space-icon">
                  <ClubIcon />
                  </div>
                  <h3>Club</h3>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of Lorem Ipsum is simply...</p>
                  <button target="#" className="common-button">get now</button>
                </div>
            </div>
            <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                <div className="virtual-space-list">
                  <div className="VR-space-icon">
                  <RetailIcon />
                  </div>
                  <h3>Retail</h3>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of Lorem Ipsum is simply...</p>
                  <button target="#" className="common-button">get now</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="virtual-avatar p-80 text-center" id="virtual-avatar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="small-text text-shadow text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Create Your Own </h6>
              <h1 className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">Virtual Avatar</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">You can select from our wide range of avatars and customize them to your liking. You can also purchase NFTs and 
wearables (like shoes, clothes, and accessories) to further enhance your characters.</p>
            </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="virtual-avatar-list">
                    <img src={virtualAvatar01} alt="virtual Avatar" className="img-fluid" />
                    <h4 className="mt-3">Gallery</h4>
                    <button target="#" className="common-button">get now</button>
                  </div>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
                  <div className="virtual-avatar-list">
                    <img src={virtualAvatar01} alt="virtual Avatar" className="img-fluid" />
                    <h4 className="mt-3">Gallery</h4>
                    <button target="#" className="common-button">get now</button>
                  </div>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                  <div className="virtual-avatar-list">
                    <img src={virtualAvatar01} alt="virtual Avatar" className="img-fluid" />
                    <h4 className="mt-3">Gallery</h4>
                    <button target="#" className="common-button">get now</button>
                  </div>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="900ms">
                  <div className="virtual-avatar-list">
                    <img src={virtualAvatar01} alt="virtual Avatar" className="img-fluid" />
                    <h4 className="mt-3">Gallery</h4>
                    <button target="#" className="common-button">get now</button>
                  </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="900ms">
                <button target="#" className="common-button mb-0">View More</button>
              </div>
            </div>
        </div>
      </div>

      <div className="Host-events p-80 text-center" id="Host-events">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-shadow mb-2 mb-lg-4 text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Host Events</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">You can select from our wide range of avatars and customize them to your liking. You can also purchase NFTs and 
wearables (like shoes, clothes, and accessories) to further enhance your characters.</p>
            </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="host-events-list">
                    <TalkIcon />
                    <h4 className="mt-3 mb-0">Talkshow</h4>
                    <button target="#" className="underline-text">Contact us</button>
                  </div>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
                  <div className="host-events-list">
                    <FashionIcon />
                    <h4 className="mt-3 mb-0">Fashion show</h4>
                    <button target="#" className="underline-text">Contact us</button>
                  </div>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                  <div className="host-events-list">
                    <ExhibitionIcon />
                    <h4 className="mt-3 mb-0">Exhibitions</h4>
                    <button target="#" className="underline-text">Contact us</button>
                  </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="900ms">
                <button target="#" className="common-button mb-0">View More</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
