import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CashReduser } from "./StoreReduser/CashReduser";
import { CustomerReduser } from "./StoreReduser/CustomerReduser";

const rootReduser = combineReducers({
    cash: CashReduser,
    customers: CustomerReduser 
})



export const Store = createStore(rootReduser, applyMiddleware(thunk));
