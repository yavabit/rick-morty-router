import { Card, Col, Row, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInfinityScroll } from '../../../shared/hooks/useInfinityScroll';
import { EpisodeType } from '../../../shared/types/Response';

export const Episodes = () => {
	const [page, setPage] = useState(1)
	const {data, loading, error, hasMore} = useInfinityScroll<EpisodeType>('episode', page);
  
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
						ref={data.length === index + 1 ? lastNodeRef : undefined}
					>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
							>
								<Meta
									title={item.name}
									description={item.episode}
								/>
							</Card>
						</Col>
					</Link>
				))}
			</Row>}
			{<Skeleton loading={loading} active/>}
		</div>
	);
}
