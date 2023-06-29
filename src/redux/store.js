import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import rootReducer from "./reducer";
//*npm i redux-devtools-extension /para instalar el compose sin usar el codigo de const = compose etc
import { composeWithDevTools } from "redux-devtools-extension";

//*const = composeRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
