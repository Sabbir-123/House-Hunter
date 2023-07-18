/* eslint-disable react/prop-types */
import { Drawer } from "@mantine/core";
import MobileItems from "./MobileItems";
import MobileAuthSide from "./MobileAuthSide";


const Sidebar = ({ opened, close }) => {
  return (
    <Drawer opened={opened} onClose={close}>
      <div className="flex flex-col gap-[15px] justify-between px-[10px]">
        <MobileItems />
        <MobileAuthSide />
      </div>
    </Drawer>
  );
};

export default Sidebar;
