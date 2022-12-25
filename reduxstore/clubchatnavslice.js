import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const sidebarnav = []

const navslice = createSlice({
    name:'handlenav',
    initialState,
    reducers:{
        opennav(state){
            console.log("ok open")
            {
                console.log("state =>  ",sidebarnav)
            }
            sidebarnav.push("hjell in sidebar")
        },
        closenav(){
            console.log("ok close")
        }
    }
})

export const { opennav , closenav } = navslice.actions

export default navslice.reducer