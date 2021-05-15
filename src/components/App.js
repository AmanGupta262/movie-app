import React from 'react';

import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;

    //make api call
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    });
    //dispatch action
    store.dispatch(addMovies(data));
  }

  render() {
    const {store} = this.props;
    const {list} = store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Fvourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
