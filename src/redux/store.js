import { configureStore } from "@reduxjs/toolkit";


import auth from "./slices/AuthSlice"
import user from './slices/UserSlice.js'


export default configureStore({
    reducer: {
        auth,
        user
    }
})