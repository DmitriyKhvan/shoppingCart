import { createStore } from 'redux';
import reduces from './reducers';

const store = createStore(reduces);

export default store;