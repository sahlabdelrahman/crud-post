import * as types from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  searchResults: [],
  loading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
      };
    case types.EDIT_POST: {
      return {
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              title: action.payload.title,
              body: action.payload.body,
            };
          } else {
            return { ...post };
          }
        }),
        loading: false,
      };
    }

    case types.SEARCH_POTS: {
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        posts: state.posts.filter((post) => {
          if (action.payload === "") {
            return post;
          } else if (
            post.title
              .toLowerCase()
              .includes(action.payload.toLocaleLowerCase())
          ) {
            return post;
          }
        }),
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
