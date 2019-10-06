import { combineReducers } from 'redux';
import postReducer from "./postReducer";
import postStatusReducer from "./postStatusReducer";


export default combineReducers(
    { postReducerTest : postReducer,
        changeFavouriteStatusTest:postStatusReducer
    }
)

