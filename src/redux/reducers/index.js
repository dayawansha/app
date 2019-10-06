import { combineReducers } from 'redux';
import PostReducer from "./PostReducer";
import postStatusReducer from "./postStatusReducer";


export default combineReducers(
    { PostReducerTest : PostReducer,
changeFavouriteStatusTest:postStatusReducer}
)

