import { AcitonsTypes} from "../contants/action-types"
export const setProducts=(products)=>{
    return {
        type:AcitonsTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProduct=(product)=>{
    return {
        type:AcitonsTypes.SELECTED_PRODUCT,
        payload:product,
    }
}

export const removeSelectedProduct=()=>{
    return {
        type:AcitonsTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}