export const loginStart = (user) => ({
    type: 'LOGIN_START',
})

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS'
})

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
})