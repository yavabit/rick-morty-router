import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../../../shared/mocks/locations';

export const Locations = () => {

	const [data] = useState(locations);

	return (
		<div>
			<Row gutter={20} justify={"center"}>
				{data.map((item) => (
					<Link to={`${item.id}`} key={item.id} style={{marginTop: 30}}>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
							>
								<Meta
									title={item.name}
									description={item.type}
								/>
							</Card>
						</Col>
					</Link>
				))}
			</Row>
		</div>
	);
}
