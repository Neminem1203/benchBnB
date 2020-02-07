import { combineReducers} from "redux";
import filterReducer from "./filters_reducer";

const uiReducer = combineReducers({filter: filterReducer});

export default uiReducer;