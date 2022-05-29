import React from 'react';

const Scroll = (props) => {
	return (
		// the below style is jsx based eg: overflowY in css is overflow-y
		<div style={{overflowY:'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;