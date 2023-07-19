import Search from "../../Components/Search/Search";
import Illustration from "../../assets/images/hero-illustration.svg";
import AllHouses from "../AllHouses/AllHouses";
import GetStarted from "./Partials/GetStarted/GetStarted";


export default function Home() {
	return (
        <>
        <section className="relative overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 to-white pointer-events-none -z-10" aria-hidden="true" />
  
        {/* Illustration */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <img src={Illustration} className="max-w-none"  alt="Hero Illustration" />
        </div>
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-28 pb-8 md:pt-36 md:pb-16">
            {/* Hero content */}
  
            <div className="max-w-4xl mx-auto text-center ">
              {/* Copy */}
              <h2 className="text-xl md:text-5xl font-extrabold !leading-[1.3] font-jakarta mb-6"> Rent it & Make it of Your Own <br /> Find Your <span className='color-brand-2' > Dream Home</span> Today!</h2>
  
              <p className="text-base md:text-lg font-medium text-gray-500 mb-8">
                Discover your dream place that propel your soothing mind forward
                <br className="hidden md:block" /> Join House Hunter today and unlock limitless opportunities!
              </p>
  
              <Search />

            
  
            </div>
          </div>
        </div>
      </section>
      <AllHouses/>
      <GetStarted/>
      </>
	);
}
