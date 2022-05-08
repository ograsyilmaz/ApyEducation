import { combineReducers   } from "redux";
import {productReducer,selectedProductReducer} from './productReducer.js';

const reducers =combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default reducers