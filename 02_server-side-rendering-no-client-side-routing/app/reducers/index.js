import { combineReducers } from 'redux';
import text from './home';
import title from './title';

const Reducers = combineReducers({
    text,
    title
});

export default Reducers;
