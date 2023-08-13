import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "../api/AuthApi";


const initialState = {

// global state
    // isLoading: false,
    message: null,
    isLoggedIn: false,
    // isError: false,
    // isSuccess: false,

// GET ALL USERS
    user: null,
// OWNER STATE
    LoginLoading: false,
    LoginError: false,
    LoginSuccess: false,
    LogOutSuccess: false,
// OWNER STATE
    LoginLoadingResp: false,
    LoginErrorResp: false,
    LoginSuccessResp: false,
    LogOutSuccessResp: false,

}

//sotre data in AsyncStorage
const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await localStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
};

//get data from AsyncStorage
 const getDataFromStorage = async () => {
    try {
      const jsonValue = await localStorage.getItem("user");
    //   console.log("GET LOCAL STORAGE", jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
};

// ADMIN LOGIN
export const SignIn = createAsyncThunk(
    
    'auth/SignIn', async(adminInfos, thunkAPI)=>{
        
        const {rejectWithValue} = thunkAPI

        try {
        const response = await AuthApi.loginOwner(adminInfos);
        if (response.token) {
            const loginObjectResponse = {
                email: response.email,
                username: response.username,
                address: response.address,
                id: response.id,
                status: response.status,
                token: response.token,
            };
            await storeData(loginObjectResponse);
            const userObject = await getDataFromStorage();
            if (userObject) {
                return userObject
            }
        } else {
            const error = response.error;
            console.log("", error)
            return rejectWithValue(error);
        }
        
        } catch (error) {
            console.debug("LOGIN", error)
        }

})

// RESPONSIBLE LOGIN
export const SignInResp = createAsyncThunk(
    
    'auth/SignInResp', async(adminInfos, thunkAPI)=>{
        
        const {rejectWithValue} = thunkAPI

        try {
        const response = await AuthApi.loginResponsible(adminInfos);
        if (response.token) {
            const loginObjectResponse = {
                id: response.id,
                id_store: response.id_store,
                id_owner: response.id_owner,
                email: response.email,
                username: response.username,
                address: response.address,
                status: response.status,
                token: response.token,
            };
            await storeData(loginObjectResponse);
            const userObject = await getDataFromStorage();
            if (userObject) {
                return userObject
            }
        } else {
            const error = response.error;
            console.log("LOGIN RESPONSIBLE ERROR", error)
            return rejectWithValue(error);
        }
        
        } catch (error) {
            console.debug("LOGIN", error)
        }

})

export const CheckToken = createAsyncThunk(
    'auth/CheckToken',
    async (data, thunkAPI)=>{
        const {rejectWithValue} = thunkAPI
        try{
            const result =  await getDataFromStorage();
            if (result) {
                return result
            }
            else {
                return rejectWithValue("error: ", "No token available");
            }
        } 
        catch(error){ 
            return rejectWithValue(error) 
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout", async () => {
    await AuthApi.logout();

});

const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        reset: (state) =>{
            state.message = null

            // LOGIN ADMIN
            state.LoginLoading = false
            state.LoginError = false
            state.LoginSuccess = false
            state.LogOutSuccess = false

            state.LoginLoadingResp = false
            state.LoginErrorResp = false
            state.LoginSuccessResp = false
            state.LogOutSuccessResp = false


        }
    },
    
    extraReducers:{
        // Add Token -----------------------------------------------
        [CheckToken.fulfilled]:(state,action)=>{
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        // Owner Login------------------------------------------------------
        [SignIn.pending]: (state, action) =>{
            state.LoginLoading = true
        },
        [SignIn.fulfilled]: (state, action) =>{
            state.LoginLoading = false
            state.LoginSuccess = true
            state.isLoggedIn = true
            state.user = action.payload
        },
        [SignIn.rejected]: (state, action) =>{
            state.LoginLoading = false
            state.LoginError = true
            state.message = action.payload
        },

        // responsible Login------------------------------------------------------
        [SignInResp.pending]: (state, action) =>{
            state.LoginLoadingResp = true
        },
        [SignInResp.fulfilled]: (state, action) =>{
            state.LoginLoadingResp = false
            state.LoginSuccessResp = true
            state.isLoggedIn = true
            state.user = action.payload
        },
        [SignInResp.rejected]: (state, action) =>{
            state.LoginLoadingResp = false
            state.LoginErrorResp = true
            state.message = action.payload
        },

        // LogOut -------------------------------------------------------------------
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }, 
         
    }
})

export const { reset } = AuthSlice.actions
export default AuthSlice.reducer