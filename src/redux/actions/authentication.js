export const registerUser = ( name, email, password, isLoggedIn) => ({
    type: 'REGISTER',
    payload: {
        id: new Date().getTime(),
        name,
        email,
        password,
        isLoggedIn
    },
    
});

export const login = ( userRegistered, isLoggedIn) => ({
    type: 'LOGIN',
    payload: {
        userRegistered,
        isLoggedIn
    }
}
);

export const logout = () => ({
    type: 'LOGOUT'

})