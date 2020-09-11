import { combineReducers} from  'redux';
import articles from './article';
import galeries from './gallery';


const rootReducer = combineReducers({
    articles,galeries
    
})

export default rootReducer;