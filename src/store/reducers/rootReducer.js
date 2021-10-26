import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  data: postsReducer,
});

export default rootReducer;
