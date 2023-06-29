import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MeetTeam from "./components/MeetTeam";
import Navbar from "./components/Navbar";
import OurSuccess from "./components/OurSuccess";
import OurWork from "./components/OurWork";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
      <OurSuccess />
      <MeetTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
