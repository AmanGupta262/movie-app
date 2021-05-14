import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {

  componentDidMount() {
    //make api call
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    });
    //dispatch action
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
  }

  render() {
    const {store} = this.props;
    const movies = store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Fvourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
