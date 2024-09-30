"use client";
import Navbar from "@/components/navbar";
import SwiperApp from "@/components/swiper";
import "./style.css";
import PricingSec from "./pricingSec";
import QuestionSec from "./questionSec";
import BottomSec from "./bottomSec";
import Footer from "./footer";
import Copyright from "./copyright";
import TeamSec from "./teamSec";
import IncreaseCounter from "../../components/increaseCounter";
import TherapistAndTreatment from "@/components/therapist_and_treatments";
import WelcomeSec from "@/components/welcome_section";
import IndividualSec from "@/components/individual_therapy";
import SwiperApp2 from "@/components/swiper2";

const Home = () => {
  return (
    <div className="home">
      
      <Navbar />
      <SwiperApp />
      <TherapistAndTreatment />
      <IncreaseCounter />
      <TeamSec />
      <PricingSec />
      <QuestionSec />
      <BottomSec />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
