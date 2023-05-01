import {configureStore} from '@reduxjs/toolkit'
import  booksReducer  from '../Redux/BookSlice'
 const store = configureStore({

    reducer: {
        booksReducer:booksReducer
       }
})
export default store;