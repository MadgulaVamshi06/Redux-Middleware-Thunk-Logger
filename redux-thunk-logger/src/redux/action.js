
import { FETCH_COFFEE_SUCCESS,FETCH_FAILURE } from "./actiontype";

export const fetchCoffee = () => {
    return async (dispatch) =>{
        try{
            const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee");
            const data = await res.json();
            dispatch({type : FETCH_COFFEE_SUCCESS , payload : data.data})
        }catch (error){
            dispatch({type : FETCH_FAILURE,payload : error.message})
        }
    }
}



