import React from 'react';

const MovieSearchBox = (props) => {
	return (
		<div>
			<input
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value.trim())}
				placeholder='Type the name of the movie'
				name='search'
			></input>
		</div>
	);
};

export default MovieSearchBox;