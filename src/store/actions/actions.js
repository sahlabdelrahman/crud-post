import axios from "axios";

import * as types from "./types";

const url = process.env.REACT_APP_API;

export const getPosts = () => async (dispatch) => {
  await axios
    .get(`${url}`)
    .then((res) =>
      dispatch({
        type: types.GET_POSTS,
        payload: res.data.slice(0, 20),
      })
    )
    .catch((error) => console.log(error));
};

export const getPost = (id) => async (dispatch) => {
  await axios
    .get(`${url}/${id}`)
    .then((res) =>
      dispatch({
        type: types.GET_POST,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const deletePost = (id) => async (dispatch) => {
  await axios
    .delete(`${url}/${id}`)
    .then((res) => {
      dispatch({
        type: types.DELETE_POST,
        payload: id,
      });
    })
    .catch((error) => console.log(error));
};

export const editPostAction = (id, post) => async (dispatch) => {
  await axios
    .put(`${url}/${id}`, { ...post })
    .then((res) => {
      dispatch({
        type: types.EDIT_POST,
        payload: {
          ...res.data,
        },
      });
    })
    .catch((error) => console.log(error));
};

export const searchPosts = (searchValue) => async (dispatch) => {
  await axios
    .get(`${url}`)
    .then((res) => {
      dispatch({
        type: types.SEARCH_POTS,
        payload: searchValue,
      });
    })
    .catch((error) => console.log(error));
};
