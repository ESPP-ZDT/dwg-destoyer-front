import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FileReducer from './reducers/FileReducer'; // your root reducer

const store = createStore(FileReducer, applyMiddleware(thunk));

export default store;