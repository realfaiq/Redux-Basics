import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      );
  };
};

//Same as Above
export const createPost = (postData) => (dispatch) => {
  console.log("Action Called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
