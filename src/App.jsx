import { useState } from "react";
import EducationalSection from "./EducationalSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import InputSection from "./InputSection";
import InteractiveVisuals from "./InteractiveVisuals";
import Navbar from "./Navbar";
import SolarChargeGraph from "./SolarChargingGraph";


function App() {
  const [showresult, setShowResult] = useState(false);

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <InputSection setShowResult={setShowResult} />
      {showresult && (
        <div className="min-h-screen px-20 py-6 bg-gray-100  dark:bg-black">
          <SolarChargeGraph />
        </div>
      )}
      <InteractiveVisuals />
      <EducationalSection />
      <Footer />
    </div>
  );
}

export default App;
