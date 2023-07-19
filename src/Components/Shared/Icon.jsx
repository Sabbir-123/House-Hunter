/* eslint-disable react/prop-types */

import { cx } from "../../Shared/Config/Constant";
import { icons } from "../../Shared/lib/icons";

const Icon = ( name, className, onClick ) => {
	const IconComponent = icons[name];

	if (!IconComponent) {
		return null;
	}

	return (
		<IconComponent onClick={onClick} className={cx("text-[16px]", className)} />
	);
};

export default Icon;
