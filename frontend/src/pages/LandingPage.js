import Hero from "../components/LandingPage/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/ContactUs";
import Statistics from "../components/LandingPage/Statistics";
import Objectives from "../components/LandingPage/Objectives";
import Programs from "../components/LandingPage/ProgramPage";
import Partners from "../components/LandingPage/Partners";
import EventsCalendar from "../components/LandingPage/EventsCalendar";
import { useRef } from "react";

const LandingPage = () => {
  const contactRef = useRef(null);

  return (
    <div className="LandingPage mt-5">
      <Navbar contactRef={contactRef} />
      <Hero />
      <Statistics />
      <Objectives />
      <Programs />
      <EventsCalendar/>
      <Partners />
      <Contact ref={contactRef} />
    </div>
  );
};

export default LandingPage;
