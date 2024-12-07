// Customer hook
//  Tạo ra các hook riêng ===> 
//- có thể sử dụng các hook khác 
// - Tuân thủ các quy đinh về React Hooks

import { useContext } from "react"
import { ProviderContext } from "./Provider"


// Tạo 2 hook để đọc state và dispatch từ global
//  useSelector(callback)
//  useDispatch()
export const useDispatch = () => {
    const { dispatch } = useContext(ProviderContext);
    return dispatch;
}
export const useSelector = (callback) => {
    // callback để lọc dữ liệu
    if (typeof callback !== "function") {
        throw new Error("Callback phải là 1 function")
    }
    const { state } = useContext(ProviderContext);
    return callback(state);

}