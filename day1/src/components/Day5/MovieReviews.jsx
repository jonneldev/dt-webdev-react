import { useState } from 'react';

const StarRating = ({ rating, onRateChange }) => {
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div>
      {stars.map((star) => (
        <span 
          key={star} 
          onClick={() => onRateChange(star)} 
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            // TODO: change color either gray or gold
            color: star <= rating? "gold" : "gray"
            
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Movie = ({
  id,
  title,
  rating,
  onRateChange
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <StarRating 
        rating={rating}
        onRateChange={(newRating) => onRateChange(id, newRating)} //TODO
      />
    </div>
  );
};

const MovieList = ({
  movies,
  movieData,
  onRateChange,
  onReviewSubmit,
}) => {
  return (
    <>
      {movies.map((movie) => (

        // call Movie component
        <Movie 
          // Call the movie component
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movieData[movie.id]?.rating || 0}
          onRateChange={onRateChange}
        />
      ))}
    </>
  );
};

const MovieReviews = () => {
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
    },
    {
      id: 2,
      title: "The Great Gatsby",
    },
  ];

  const [movieData, setMovieData] = useState({});

  const handleRateChange = (movieId, newRating) => {
    setMovieData((prevData) => ({
      ...prevData,
      [movieId]: {
        ...prevData[movieId],
        rating: newRating
      }
    }))
  }

  return (
    <MovieList 
      movies={initialMovies}
      movieData={movieData}
      onRateChange={handleRateChange} //TODO
      onReviewSubmit={() => {}} //TODO
    />
  );
};

export default MovieReviews;