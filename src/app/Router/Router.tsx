import { Route, Routes } from "react-router-dom";
import { routes } from "./RouterConfig";
import { NotFound } from "../../pages/NotFound/NotFound";
import { AuthProvider } from "../../context/AuthProvider";
import ErrorBoundary from "../../shared/components/ErrorBoundary/ErrorBoundary";

export const Router = () => {
	return (
		<AuthProvider>
			<Routes>
				{routes.map((item) => (
					<Route 
						key={item.key} 
						path={item.path} 
						element={
							<ErrorBoundary>{item.element}</ErrorBoundary>
						}>
						{item.children &&
							item.children.map((_item) => (
								<Route
									key={_item.key}
									path={_item.path}
									element={_item.element}
								/>
							))}
					</Route>
				))}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AuthProvider>
	);
};
