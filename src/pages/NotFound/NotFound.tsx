import { Link } from 'react-router-dom'
import banner from '../../shared/assets/images/not-found.jpg'

export const NotFound = () => {
  return (
	<div>
		<div>Страница не найдена</div>
		<div><img src={banner} alt="" /></div>
		<Link to={'/'}>Перейти на главную</Link>
	</div>
  )
}
