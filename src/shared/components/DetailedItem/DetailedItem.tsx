import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { characters, CharacterType } from "../../mocks/characters";
import { locations, LocationType } from "../../mocks/locations";
import { episodes, EpisodeType } from "../../mocks/episodes";
import { Card } from "antd";

type StateType = LocationType | EpisodeType | CharacterType | undefined

const reducer = (_: StateType, action: {type: string, id: string}) => {
	const id = Number(action.id)

	switch(action.type) {
		case 'heroes':		
			return characters.find(item => item.id === id)
		case 'locations':
			return locations.find(item => item.id === id)
		case 'episodes':
			return episodes.find(item => item.id === id)
	}
}

export const DetailedItem = () => {
	const { id, category } = useParams();

	const [state, dispatch] = useReducer(reducer, undefined)

	useEffect(() => {	
		if(category && id)	
			dispatch({ type: category, id: id });
	}, [category, id])

	return (
		state && (
			<Card title={state.name}>
				{Object.keys(state).map(key => {
					if(['created', 'id'].includes(key) == false) {
						return <p>{`${key}: ${state[key as keyof StateType]}`}</p>
					}
					if(key == 'created') {
						return <p>{`${key}: ${new Date(state[key]).toLocaleDateString()}`}</p>
					}
				})}
			</Card>
		)
	)
};
