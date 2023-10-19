import { appReducer } from './appReducer';
/**
 * 
 * @param reducers 
 * @returns (prevState, action, ...args) => reducer
 */
const reduceReducers = (...reducers) => (prevState, action, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, action, ...args),
    prevState,
);

export default reduceReducers(appReducer);
