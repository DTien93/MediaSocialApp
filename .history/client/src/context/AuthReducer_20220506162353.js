const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case 'LOGIN_SUCCESS':
                return {
                    user: action.payload,
                    isFetching: false,
                    error: false,
                }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: true
            }
        case 'LOG_OUT':
            return {
                    user: null,
                    isFetching: false,
                    error: false
            }
        case 'UNFOLLOW':
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: state.user.followings.filter(
                        
                    )
                }
            }
            default:
                return state
    }
}