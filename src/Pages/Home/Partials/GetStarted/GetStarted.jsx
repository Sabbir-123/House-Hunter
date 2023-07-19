import Button from "../../../../Components/Buttons/Button";
import { Care_data } from "../../../../Shared/Config/Constant";
import GetStartedImg from '../../../../assets/images/GetStarted.png'

const GetStarted = () => {
  
    const { getStarteds } = Care_data;
    // distructure
    const { title, description, heading } = getStarteds;
  
  
    return (
      <section className="w-full bg-[#6366f1] md:py-16 py-8 md:mt-14 mt-8">
        <div className="container">
          <div className="flex items-center justify-between gap-5 md:flex-row flex-col">
            <div className="flex flex-col lg:gap-6 md:gap-4 gap-3 px-[15px] md:px-0">
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-white sm:text-[30px] md:text-[40px] lg:text-[60px] text-xl font-[500] lg:leading-[65px] md:leading-[48px]">
                    {title}
                  </h2>
                </div>
              </div>
              {/*  */}
              <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                <div className="flex flex-col sm:gap-3 gap-2 md:w-[446px]">
                  <h2 className="lg:text-[32px] md:text-[22px] sm:text-lg text-md text-white font-[500]">
                    {heading}
                  </h2>
                  <p className="text-[#CCDDDC] sm:text-lg font-[200]">
                    {description}
                  </p>
                  <form className="flex gap-3 md:gap-5 lg:pt-12 md:pt-10 pt-3 sm:flex-row flex-col">
                    <input
                      className="w-full md:py-1 py-[10px] px-3 rounded-md border-none outline-none md:text-[16px] text-sm"
                      type="text"
                      placeholder="Email address"
                    />
                    <Button
                      className="px-4 !py-[10px] !rounded-md bg-[#1A1919] text-white hover:!text-white border border-[#1A1919] hover:border-white"
                      type="submit"
                    >
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            {/* image */}
  
            <div className="">
              <div className="lg:w-[550px] lg:h-[500px] md:w-[275px] relative w-[285px] h-[230px]">
                <img
                  src={GetStartedImg}
                  alt="GetStartedImg"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GetStarted;
  
