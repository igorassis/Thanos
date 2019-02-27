import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/Index';

export default createStore(rootReducer, applyMiddleware(thunk));