import { ADD_POST,CHANGE_FAVOURITE_STATUS } from "./actionTypes";

export const addComment = (comment) => ({
  type: ADD_POST,
  payload: {
      comment
  }
});

export const changeFavouriteStatus = (commentObject) => ({
  type: CHANGE_FAVOURITE_STATUS,
  payload: {
      commentObject
  }
});


