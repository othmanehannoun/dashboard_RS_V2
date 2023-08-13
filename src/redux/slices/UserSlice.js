import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../api/UserApi"

const initialState = {

// global state
    isLoading: false,
    message: null,
    isError: false,
    isSuccess: false,
// GET ALL USERS
    users: null,
// GET One USER
    getUser: null,

}

export const GetAllUsers = createAsyncThunk(
    'user/GetAllUsers', async(data, thunkAPI)=>{
        // console.log("EE", data);
       const {rejectWithValue} = thunkAPI
       try{
            const json = await UserApi.getallClients();
            const res = json.users
            console.log('GET ALLLLLLL USER1:', res)
            return res
       }
       catch(error){
            console.log('MMMMMMMMMMMMM KKK')
           console.log(error.response.data);
           return rejectWithValue(error.response.data) 
       }
})

export const Get_User = createAsyncThunk(
    'user/Get_User', async(data, thunkAPI)=>{
        // console.log("EE", data);
       const {rejectWithValue} = thunkAPI
       try{
            const json = await UserApi.getClientById(data);
            const res = json.user
            console.log('GET USERZZ:', data)
            return res
       }
       catch(error){
            console.log('G33USER3334444')
           console.log(error);
           return rejectWithValue(error.response.data) 
       }
})

export const ContratClient = createAsyncThunk(
    'user/ContratClient', async(data, thunkAPI)=>{
        // console.log("EE", data);
       const {rejectWithValue} = thunkAPI
       try{
            const json = await UserApi.getClientByContrat(data);
            const res = json.contrat
            console.log('GET 22 ContratClient:', data, res)
            
            return res
       }
       catch(error){
            console.log('ContratClient rrrreeeeeeeeeeeeeeee')
           console.log(error);
           return rejectWithValue(error.response.data) 
       }
})

const CategorySlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        reset: (state) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = null
            state.getUser = null
        }
    },
    
    extraReducers:{
        // Get User -----------------------------------------------------------------
        [GetAllUsers.pending]: (state, action) =>{
            state.isLoading = true
        },
        [GetAllUsers.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            // console.log("action.payload:", action.payload);
            state.users = action.payload
        },   
        [GetAllUsers.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // Get User -----------------------------------------------------------------
        [Get_User.pending]: (state, action) =>{
            state.isLoading = true
         },
         [Get_User.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            // console.log("action.payload:", action.payload);
            state.getUser = action.payload
        },   
         [Get_User.rejected]: (state, action) =>{
             state.isLoading = false
             state.isError = true
             state.message = action.payload
         },
        // Get User -----------------------------------------------------------------
        [ContratClient.pending]: (state, action) =>{
            state.isLoading = true
         },
         [ContratClient.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.clinet_contrat = action.payload
            // console.log("action.payload:", action.payload);
        },   
        [ContratClient.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },
         
    }
})

export const { reset } = CategorySlice.actions
export default CategorySlice.reducer