import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './reducers/todosReducer';

function visibilityReducer(state = 'SHOW_ALL', action) {
  if (action.type === 'visibility/filterSet') {
    return action.payload;
  }
  return state;
}

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
});

export function createStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
