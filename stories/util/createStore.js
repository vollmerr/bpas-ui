import { createStore, compose, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  form,
});

const configureStore = initialState => (
  createStore(
    rootReducer,
    {form: {}},
    composeEnhancers(),
  )
);

export default configureStore;
