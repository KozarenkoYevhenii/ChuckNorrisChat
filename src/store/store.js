import { createStore } from "redux";
import dialogsReducer from "../reducers/dialogsReducer";

  
const store = createStore(dialogsReducer)

export default store;