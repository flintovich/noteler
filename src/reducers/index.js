import { combineReducers } from 'redux';

import notes from './notes';
import categories from './categories';

export default combineReducers({ notes, categories });