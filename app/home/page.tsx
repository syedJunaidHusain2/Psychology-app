"use client";
import "./style.css";
import PricingSec from "./pricingSec";
import QuestionSec from "./questionSec";
import BottomSec from "./bottomSec";
import Footer from "./footer";
import Copyright from "./copyright";
import TeamSec from "./teamSec";
import WelcomeSec from "../components/welcome_section";
import TherapistAndTreatment from "../components/therapist_and_treatments";
import IndividualSec from "../components/individual_therapy";
import SwiperApp2 from "../components/swiper2";
import IncreaseCounter from "../components/increaseCounter";
import SwiperApp from "../components/swiper";


const Home = () => {
  return (
    <div className="home">
      <SwiperApp />
      <WelcomeSec />
      <TherapistAndTreatment />
      <IndividualSec />
      <IncreaseCounter />
      <SwiperApp2 />
      {/* <TeamSec />
      <PricingSec />
      <QuestionSec />
      <BottomSec />
      <Footer />
      <Copyright /> */}
    </div>
  );
};

export default Home;
