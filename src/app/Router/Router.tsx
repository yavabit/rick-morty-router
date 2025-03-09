import { Route, Routes } from "react-router-dom";
import { routes } from "./RouterConfig";
import { NotFound } from "../../pages/NotFound/NotFound";

export const Router = () => {

	return (
		<Routes>
			{routes.map((item) => (
				<Route key={item.key} path={item.path} element={item.element}>
					{item.children &&
						item.children.map((_item) => (
							<Route key={_item.key} path={_item.path} element={_item.element}/>
						))}
				</Route>
			))}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
