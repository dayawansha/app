import {ADD_POST} from "./../actions/actionTypes";
// const initialState = [{
//     comment: "",
//     id: 0
// }];

const initialState = [];

const postReducer = (state = initialState, action)  => {
    // console.log("@action.type ",action.type);
    // console.log("@id ", state.length);
    switch (action.type) {
        case ADD_POST: {
            const {comment} = action.payload;
            // const {id} = action.payload;
            // console.log("@action.type ", action.type);
            // console.log("@action.payloade ", action.payload);
            // console.log("@state", state);
            // console.log("...state", ...state);
            return [
                ...state,
            {
                comment: comment,
                id: state.length + 1,
                favourite:false
            }
            ];
        }

        default:
            return state;
    }
}

export default postReducer
