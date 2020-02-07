import {UPDATE_BOUNDS} from "../actions/filter_actions";

const initialState={bounds: { northEast: { lat: 37.79971, lng: -122.39208 }, southWest: { lat: 37.77187, lng: -122.47791 } }}

export default (state=initialState, action) =>{
    Object.freeze(state);
    switch(action.type){
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
        default:
            return state;
    }
}