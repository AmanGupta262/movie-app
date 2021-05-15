import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';

const initialMovieState = {
    list: [],
    favourites: []
};

export default function movies(state = initialMovieState, action){
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            return{
                ...state,
                
            }
        default: 
            return state;
    }
}