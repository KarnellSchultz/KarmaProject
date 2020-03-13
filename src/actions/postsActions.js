import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
/// gql ^
// const CMS_POST = gql`
//   {
//     posts {
//       id
//       title
//     }
//   }
// `;
// Create reduct action types

export const GET_POSTS = "GET POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_CMS_SUCCESS = "GET_CMS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// Create Redux action creators that return an action

export const getPosts = () => ({
  type: GET_POSTS
});

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});

export const getCMSSuccess = posts => ({
  type: GET_CMS_SUCCESS,
  payload: posts
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE
});

// Combine them all in an asynchronous thunk

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts());
    try {
      const client = new ApolloClient({
        uri:
          "https://api-euwest.graphcms.com/v1/ck5xurgaz2vik01fghe9ce6g6/master"
      });
      client
        .query({
          query: gql`
            {
              posts {
                id
                title
                body
              }
            }
          `
        })
        .then(result => dispatch(getCMSSuccess(result.data.posts)));
      // dispatch(getCMSSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
