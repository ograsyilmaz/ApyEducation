import { AcitonsTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case AcitonsTypes.SET_PRODUCTS:
      return {...state,products:payload};

    

    default:
      return state;
  }
};


export const selectedProductReducer = (state={},{type,payload})=>{
  switch (type) {
    case AcitonsTypes.SELECTED_PRODUCT:
      return {...state,...payload};

    case AcitonsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}