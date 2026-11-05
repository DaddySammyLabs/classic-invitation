import Header from "@/components/ui/header/ Header";

import HeroPhoto from "@/components/screens/hero-big-photo/HeroPhoto";
import Hero from "@/components/screens/hero/Hero";

import Invitation from "@/components/screens/invitation/Invitation";
import Timer from "@/components/ui/timer/Timer";
import Location from "@/components/ui/location/Location";
import Program from "@/components/ui/program/Program";
import DressCode from "@/components/screens/dress-code/DressCode";
import RSVP from "@/components/ui/form/RSVP";

import FooterBeige from "@/components/ui/footer-beige/FooterBeige";
import Footer from "@/components/ui/footer/Footer";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <HeroPhoto />
        <Hero />

        <Invitation />
        <Timer />
        <Location />
        <Program />
        <DressCode />
        <RSVP />

        <FooterBeige />
      </main>
      <Footer />
    </>
  );
}

export default Home;
