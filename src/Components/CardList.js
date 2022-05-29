import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

	const cardsArray = robots.map((robot, i)  => {
		return (<Card key={i} id={robot.id} name={robot.name} email={robot.email} />);
	});

	return(
		// return as a single component
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;