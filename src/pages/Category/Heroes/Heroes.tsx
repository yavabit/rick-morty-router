import { useState } from "react";
import { characters } from "../../../shared/mocks/characters";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";

export const Heroes = () => {
	const [data] = useState(characters);

	return (
		<div>
			<Row gutter={20} justify={"center"}>
				{data.map((item) => (
					<Link to={`${item.id}`} key={item.id} style={{marginTop: 30}}>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 340 }}
								cover={
									<img
										alt="example"
										src={item.image}
									/>
								}
							>
								<Meta
									title={`${item.name}`}
								/>								
							</Card>
						</Col>
					</Link>
				))}
			</Row>
		</div>
	);
};
