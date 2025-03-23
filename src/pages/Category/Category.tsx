import { useParams } from "react-router-dom";
import { Heroes } from "./Heroes/Heroes";
import { Locations } from "./Locations/Locations";
import { Episodes } from "./Episodes/Episodes";
import { getCategoryName } from "../../app/Router/RouterConfig";

export const Category = () => {
	const { category } = useParams();

	return (
		<div>
			<div style={{fontSize: 20}}>{getCategoryName(category)}</div>
			<div>
				{category === "heroes" && <Heroes />}
				{category === "locations" && <Locations />}
				{category === "episodes" && <Episodes />}
			</div>
		</div>
	);
};
