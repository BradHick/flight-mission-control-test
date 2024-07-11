import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import api from './api'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
})

type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, api.middleware)
})

export { type RootState }
export type Store = typeof store
export type Dispatch = Store['dispatch']
export default store
