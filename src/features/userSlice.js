import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail:null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, actions) =>{
            state.userName = actions.payload.userName // setUsername (action.payload)
            state.userEmail = actions.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userName = null;
            state.userEmail = null;
        }
    }
});

export const {setActiveUser,  setUserLogOutState} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer