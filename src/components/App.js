import React from 'react';

import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;

    //make api call
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
      console.log(store.getState());
    });
    //dispatch action
    store.dispatch(addMovies(data));
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1)
      return true;
    return false;
  };

  changeTab = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  }
  render() {
    const { store } = this.props;
    const{movies} = store.getState() // {movies: {}, search: {}}
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites? favourites: list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites? 'active-tabs': ''}`} onClick={() => this.changeTab(true)}>Fvourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={store.dispatch}
                isFavourite={this.isFavourite(movie)}
             />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display</div> : null}
        </div>
        
      </div>
    );
  }
}

export default App;
