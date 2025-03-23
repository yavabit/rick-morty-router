import { ReactNode } from "react"
import { Home } from "../../pages/Home/Home"
import { Category } from "../../pages/Category/Category"
import { DetailedItem } from "../../shared/components/DetailedItem/DetailedItem"
import { Login } from "../../pages/Login/Login"
import { PrivateRoute } from "../../shared/components/PrivateRoute/PrivateRoute"

type RouteType = {
	key: number,
	label?: string
	path: string
	disabled: boolean
	element?: ReactNode
	isMenu?: boolean
	children?: RouteType[]
}

export const routes: RouteType[] = [
	{
		key: 0,
		label: 'Главная',
		path: '/',
		disabled: false,
		element: <Home/>,
		isMenu: true,
	},
	{
		key: 1,
		label: 'Категории',
		path: '/category/:category',
		disabled: false,
		isMenu: true,
		element: <PrivateRoute><Category/></PrivateRoute>
	},
	{
		key: 2,
		label: 'Категории',
		path: '/category/:category/:id',
		disabled: false,
		isMenu: false,
		element: <PrivateRoute><DetailedItem/></PrivateRoute>,
	},
	{
		key: 3,
		label: 'Вход',
		path: '/login',
		disabled: false,
		isMenu: false,
		element: <Login/>,
	}
]

export const getCategoryName = (category: string | undefined) => {
	switch(category) {
		case 'heroes': 
			return 'Герои'
		case 'locations': 
			return 'Локации'
		case 'episodes': 
			return 'Эпизоды'
		case 'category': 
			return 'Категории'
		default: 
			return category
	}
}