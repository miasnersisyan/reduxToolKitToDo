import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allData : [{text : 'Learn Js',complated : false,id : Math.random()}],
 
}

const dataSlicer = createSlice({
    name : 'data',
    initialState : initialState,
    reducers : {
        changeData : (state,action) => {
            state.allData = action.payload
        },
       
    }
})

export const { changeData, changeNum1 } = dataSlicer.actions

export default dataSlicer.reducer
