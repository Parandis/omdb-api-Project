import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import MovieSearchBox from './components/MovieSearchBox';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('Dune');
	const apiKey = '102d521'; 

	const getMovieRequest = async (searchValue) => {
		try {
			const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const responseJson = await response.json();
			if (responseJson.Error) {
				throw new Error(responseJson.Error);
			}
			if (responseJson.Search) {
				setMovies(responseJson.Search);
			} else {
                setMovies([]);
            }
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const handleSearchChange = (value) => {
		setSearchValue(value);
	};
	
	useEffect(() => {
		if (searchValue === '') {
		  getMovieRequest('dune');
		}
	}, [searchValue]);

  return (
		<div className='container movie-app p-0'>
			<div className='d-flex justify-content-between my-4'>
				<MovieHeader heading='Movies' />
				<MovieSearchBox searchValue={searchValue} setSearchValue={handleSearchChange} />
			</div>
			<div className='movie-list'>
				{movies.length > 0 ? ( 
                    <MovieList
                        movies={movies}
                    />
                ) : (
                    <div>No movies found</div>
                )}
			</div>
		</div>
  );
}

export default App;
