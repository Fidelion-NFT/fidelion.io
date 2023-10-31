import { legacy_createStore as createStore } from 'redux';
import { languegeReducer } from './reducers';

export const store = createStore(languegeReducer);