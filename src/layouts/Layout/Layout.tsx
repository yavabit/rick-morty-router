import { ReactNode, useEffect, useState } from "react";
import { Layout as AntLayout, Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link, useLocation } from "react-router-dom";
import { getCategoryName } from "../../app/Router/RouterConfig";

export const Layout = ({ children }: { children?: ReactNode }) => {

	const [breads, setBreads] = useState([{title: <Link to={'/'}>Главная</Link>}])

	const location = useLocation();

	useEffect(() => {
		const locArr = location.pathname.split('/').filter(item => item != '')
		const breadsCopy = [{title: <Link to={'/'}>Главная</Link>}]
		let path = '';

		locArr.map(item => {
			path += '/'+item
			breadsCopy.push({
				title: <Link to={path}>{getCategoryName(item)}</Link>
			})
		})
		setBreads(breadsCopy)
	}, [location])

	return (
		<AntLayout style={{background: 'rgb(240, 242, 245)'}}>
			<Content style={{ padding: "0 48px" }}>
				<Breadcrumb style={{ margin: "16px 0" }} items={breads}/>
				<div
					style={{
						background: 'rgb(255, 255, 255)',
						minHeight: '100vh',
						padding: 24,
						borderRadius: '10px',
						
					}}
				>
					{children}
				</div>
			</Content>
		</AntLayout>
	);
};
