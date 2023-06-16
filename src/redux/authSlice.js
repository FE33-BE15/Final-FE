import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const signUpUser = createAsyncThunk('signupuser', async(body)=>{
    console.log(body)
    const res = await fetch("https://api-baries.cyclic.app/users/register", {
        method: "POST",
        headers:{
            'content-type': 'application/json',

        },
        body: JSON.stringify(body)
    })
    console.log(res,"tanda")
    return await res.json();
});

export const signInUser = createAsyncThunk('signinuser', async(body)=>{
    console.log(body.password);
    const res = await fetch("https://api-baries.cyclic.app/users/login", {
        method: "POST",
        headers:{
            'content-type': 'application/json',

        },
        body: JSON.stringify({email : body.email, password : body.pass})
    })
    return await res.json();
});

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addToken: (state) => {
            state.token = localStorage.getItem('token');
        },
        addUser: (state) => {
            state.token = localStorage.getItem('user');
        },
        logout: (state) => {
            state.token = null;
            localStorage.clear();
        }
    },
    extraReducers: {
        //Login
        [signInUser.pending]: (state)=>{
            state.loading = true
        },
        [signInUser.fulfilled]: (state,{payload:{error,msg,token,user}})=>{
            state.loading = false
            if(error){gender
                state.error = error;
            }else{
                state.msg = msg;
                state.token = token;
                state.user = user;

                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                // localStorage.setItem('id', user.id)
            }

        },
        [signInUser.rejected]: (state)=>{
            state.loading = true
        },
        //Register
        [signUpUser.pending]: (state)=>{
            state.loading = true
        },
        [signUpUser.fulfilled]: (state,{payload:{error,msg}})=>{
            state.loading = false
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [signUpUser.rejected]: (state)=>{
            state.loading = true
        }
    }
});

export const {addToken, addUser, logout} = authSlice.actions; 
export default authSlice.reducer