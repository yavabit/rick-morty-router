import { useCallback, useRef, useState } from "react";
import { CharacterType } from "../../../shared/mocks/characters";
import { Card, Col, Row, Skeleton } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import { useInfinityScroll } from "../../../shared/hooks/useInfinityScroll";

export const Heroes = () => {
	const [page, setPage] = useState(1)
	const {data, loading, error, hasMore} = useInfinityScroll<CharacterType>('character', page);

	const observer = useRef<IntersectionObserver | null>(null);

	const lastNodeRef = useCallback((node: HTMLElement | null) => {
		if(loading) return

		if(observer.current) {
			observer.current.disconnect();
		}

		observer.current = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting && hasMore) {
				setPage(prevState => prevState + 1)
			}
		})

		if(node) {
			observer.current.observe(node)
		}
	}, [hasMore])

	return (
		<div>
			{error && <div>Ошибка получения данных</div>}			
			{data.length > 0 && <Row gutter={20} justify={"center"}>
				{data.map((item, index) => (
					<Link 
						to={`${item.id}`} 
						key={item.id} 
						style={{marginTop: 30}}
						ref={data.length - 10 === index + 1 ? lastNodeRef : undefined}
					>
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
			</Row>}
			{<Skeleton loading={loading} active/>}
		</div>
	);
};
