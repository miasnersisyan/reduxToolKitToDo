
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './data/dataSlicer'

const store = configureStore({
    reducer : {
        data : dataReducer
    }
})

export default store


