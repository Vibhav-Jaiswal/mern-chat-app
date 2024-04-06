import {configureStore,combineReducers} from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import userReducer from './userSlice'

const rootReduucer = combineReducers({
  theme: themeReducer,
  user: userReducer,
})

export const store = configureStore({
    reducer:rootReduucer
})