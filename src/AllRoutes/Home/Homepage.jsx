import AllRooms from "../../Components/HomePageComponents/AllRooms/AllRooms";
import AvailibiltyCheck from "../../Components/HomePageComponents/AvailibiltyCheck/AvailibiltyCheck";
import DelphiDetail from "../../Components/HomePageComponents/DelphiDetail/DelphiDetail";
import DelphiMap from "../../Components/HomePageComponents/DelphiMap/DelphiMap";
import Dining from "../../Components/HomePageComponents/Dining/Dining";
import Events from "../../Components/HomePageComponents/Events/Events";
import ImageGallery from "../../Components/HomePageComponents/ImageGallery/ImageGallery";
import HeroSwiper from "../../Components/Swiper/HeroSwiper";

const Homepage = () => {
  const swiperSources = [
    "https://i.ibb.co/jGqmgh4/delphi-homepage-header-02-64be922fb6da0.webp",
    "https://i.ibb.co/dgfMtzH/delphi-homepage-header-03-64be9232a7dca.webp",
    "https://i.ibb.co/qxhzH7Q/delphi-homepage-header-01-64be922c9b933.webp",
  ];

  return (
    <div>
      <section className="px-5">
        <HeroSwiper imageSources={swiperSources} />
      </section>
      <section className="px-5 pt-5">
        <AvailibiltyCheck />
      </section>
      <section className="px-5 pb-10">
        <DelphiDetail />
      </section>
      <section className="flex">
        <AllRooms />
      </section>
      <section className="">
        <Dining />
      </section>
      <section className="px-5 z-50 relative">
        <Events />
      </section>
      <section className="z-40 bg-cover min-h-[50rem] -mt-[10rem] items-center flex justify-center mx-auto relative bg-center bg-white xl:bg-[url('https://i.ibb.co/6FHFP8P/delphi-homepage-map-64be9613eb4a4.jpg')] lg:bg-[url('https://i.ibb.co/6FHFP8P/delphi-homepage-map-64be9613eb4a4.jpg')] md:bg-[url('https://i.ibb.co/6FHFP8P/delphi-homepage-map-64be9613eb4a4.jpg')]">
        <DelphiMap />
      </section>
      <section >
        <ImageGallery />
      </section>
    </div>
  );
};

export default Homepage;
