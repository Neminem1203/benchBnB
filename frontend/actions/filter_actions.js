export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import {fetchBenches} from "./benches_actions"
// export const updateBounds = (bounds)=>{
//     return{
//         type: UPDATE_BOUNDS,
//         bounds
//     }
// }

export const updateBounds = (bounds) =>{
    return (dispatch, getState) => {
        dispatch({type: UPDATE_BOUNDS, bounds})
        dispatch(fetchBenches(getState().ui.filter.bounds));
    }
}