import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import Brand from "../../../Components/Brands/Brand";
import { icons } from "../../../Shared/lib/icons";
import MenuItems from "./MenuItems";
import AuthSide from "./AuthSide";
import Sidebar from "../Helpers/Sidebar";

export default function Navbar() {
    const [opened, { open, close }] = useDisclosure(false);
   
  
  
    return (
      <nav className="w-full h-16 fixed top backdrop-blur-lg z-[999]">
        <div className="py-4 shadow bg-white !z-[999]">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="relative md:w-[100px] w-[82px]  cursor-pointer">
                <Link to="/">
                  <Brand />
                </Link>
              </div>
  
              <div onClick={open} className=" lg:hidden block">
                <span className="text-2xl text-black cursor-pointer">
                  {icons.menu}
                </span>
              </div>
              <div className="lg:block hidden">
                <MenuItems />
              </div>
  
              <div className="lg:flex hidden items-center gap-5">
                <AuthSide />
              </div>
            </div>
          </div>
  
        <div className="md:hidden block">
          <Sidebar opened={opened} close={close} />
        </div>
        </div>
      </nav>
    );
  }
  
