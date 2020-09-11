export default function(state={}, action){
    switch(action.type){
        case 'GET_GAL':
            return {...state, galData:action.payload}

      
      
        default:
            return state
    }
}