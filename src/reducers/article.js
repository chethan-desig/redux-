export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state, latestData:action.payload}
        case 'GET_DETAIL':
            return {...state, artistData:action.payload}
      
      
        default:
            return state
    }
}