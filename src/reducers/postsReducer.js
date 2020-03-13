import * as actions from "../actions/postsActions";
import { lightTheme, darkTheme } from "../theme";

export const initialState = {
  posts: [],
  loading: false,
  hadErrors: false,
  theme: lightTheme
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hadErrors: false
      };
    case actions.GET_CMS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hadErrors: false
      };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErorrs: true };
    default:
      return state;
  }
}
