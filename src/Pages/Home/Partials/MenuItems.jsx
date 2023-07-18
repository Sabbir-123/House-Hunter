import { menuData } from "../../../Shared/Config/Constant";
import MenuItem from "./MenuItem";


const MenuItems = () => {
  return (
    <ul className="bg-white flex  gap-10 space-x-4  border-[#DAD9D9]">
      {menuData.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))}
    </ul>
  );
};

export default MenuItems;
