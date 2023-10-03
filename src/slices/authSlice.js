import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null,
    token: localStorage.getItem("user_token") ? JSON.parse(localStorage.getItem("user_token")) : null
}

/*
{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null,
}
*/
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) =>{
            const {userInfo, token} = action.payload
            state.userInfo = userInfo
            state.token = token
            console.log(action.payload)
            localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo))
            localStorage.setItem("user_token", JSON.stringify(action.payload.token))
        },
        logOut: (state, action) =>{
            state.userInfo = null
            state.token = null
            localStorage.removeItem("userInfo")
            localStorage.removeItem("user_token")
        }
    }
})

export const {setUserInfo, logOut} = authSlice.actions

export default authSlice.reducer