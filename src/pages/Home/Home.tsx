import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { categories } from "../../shared/mocks/categories";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<Row gutter={100} justify={'center'}>
				{categories.map((item) => (
					<Link to={item.link} key={item.key}>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
								cover={
									<img
										alt="example"
										src={item.img}
									/>
								}
							>
								<Meta title={item.label} />
							</Card>
						</Col>
					</Link>
				))}
			</Row>
		</div>
	);
};
