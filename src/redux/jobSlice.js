import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    jobs:[],
    initialized:false,
    isError:false
}

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setJob: (state, action) =>{
            state.jobs = action.payload;
            state.initialized = true;
            state.isError = false;
        },
        setError: (state)=>{
            state.isError = true;
            state.initialized =true;
        }


    }
})

export const {setJob, setError} = jobSlice.actions;

export default jobSlice.reducer;

