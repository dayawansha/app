import {CHANGE_FAVOURITE_STATUS} from "./../actions/actionTypes";
// const initialState = [{
//     comment: "",
//     id: 0
// }];

const initialState = [];

const postStatusReducer = (state = initialState, action)  => {

    switch (action.type) {
        case CHANGE_FAVOURITE_STATUS: {
            const {commentObject} = action.payload;
            // const {favourite} = action.payload.favourite;

            console.log("commentObject", commentObject);
            // console.log("favourite", favourite);

            // console.log("@action.payloade ", action.payload);
            console.log("...state", ...state);
            return [
                ...state,
                {
                    comment: commentObject.comment,
                    id: commentObject.id,
                    favourite: true
                }
            ];
        }

        default:
            return state;
    }
}

export default postStatusReducer
