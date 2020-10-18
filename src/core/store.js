import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./combinedReducer";

const middleware = applyMiddleware(
  thunk,
  promise,
  logger
);

export const store = createStore(reducer, middleware);