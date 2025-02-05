import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import FeatureSection from "./components/FeatureSection"

const app = () => {
  return (
   <>
   <Navbar />
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <HeroSection />
   <FeatureSection />
   </div>
   </>
  )
}

export default app
