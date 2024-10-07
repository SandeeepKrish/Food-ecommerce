import{createStore} from "redux";
import parent from "./redux/reducers/main";
const store=createStore(
    parent

);

export default store;
