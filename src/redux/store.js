import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import WeatherReducer from "./weather/weatherReducer.js";

const Store = createStore(
  WeatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
