import {createStore} from 'redux';
import SignUpReducer from './SignUpReducer';

// const rootReducer = {
//     signup: SignUpReducer
// }
const store = createStore(SignUpReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;