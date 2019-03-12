import { configureStore } from 'redux-starter-kit'
import rotateReducer from './reducers/rotateReducer';

const store = configureStore({
  reducer: rotateReducer
})
export default store;