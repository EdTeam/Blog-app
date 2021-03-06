import { ADD_COMMENT } from "../Constants/Action-Types";

const blogComments = [
	{id:1, blogId:1, text: "this is my comment", createdOn: new Date()}
]

const comments = (state = blogComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
       action.payload.id = state.length;
       return [...state, action.payload];
    default:
      return state;
  }
};
export default comments;