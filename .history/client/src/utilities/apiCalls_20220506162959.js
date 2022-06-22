import axios from 'axios'

export const loginCall = async (user, dispatch) => {
    dispatch({ type: 'LOGIN_START'})
}