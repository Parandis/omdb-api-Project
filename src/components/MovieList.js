import React from 'react';
import image from '../image.png';

const MovieList = (props) => {
    if (Array.isArray(props.movies)) {
        return (
            <div className='row'>
                {props.movies.map((movie, index) => (
                    <div key={movie.imdbID} className='movie text-center col-xl-3 col-lg-4 col-md-6 col-sm-12 my-4'>
                        <img src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : image} alt={movie.Title && movie.Title !== 'N/A' ? movie.Title : 'Movie Poster'} title={movie.Title && movie.Title !== 'N/A' ? movie.Title : 'Movie Poster'} className='mb-3 mx-2' />
                        <div className='movie-content d-flex flex-column justify-content-between'>
                            <h5>{movie.Title && movie.Title !== 'N/A' ? movie.Title : 'The title is unavailable'}</h5>
                            <p>({movie.Year && movie.Year !== 'N/A' ? movie.Year : 'The year is unavailable'})</p>
                            <button className='movie-button mx-auto'>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return <div>No movies available</div>;
    }
};

export default MovieList;