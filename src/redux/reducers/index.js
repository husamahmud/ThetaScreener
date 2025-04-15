import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import swapTransactionReducer from './fetchSwapTransactionReducer';

const rootReducer = combineReducers({
  tokenReducer,
  swapTransactionReducer
});

export default rootReducer;