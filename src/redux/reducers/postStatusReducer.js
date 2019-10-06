import {CHANGE_FAVOURITE_STATUS} from "./../actions/actionTypes";
// const initialState = [{
//     comment: "",
//     id: 0
// }];

const initialState = [];

const postStatusReducer = (state = initialState, action)  => {

    switch (action.type) {
        case CHANGE_FAVOURITE_STATUS: {
            const {comment} = action.payload;
            // const {id} = action.payload;
            console.log("@action.type @ postStatusReducer ", action.type);
            // console.log("@action.payloade ", action.payload);
            // console.log("@state", state);
            // console.log("...state", ...state);
            return [
                ...state,
                {

                }
            ];
        }

        default:
            return state;
    }
}

export default postStatusReducer
