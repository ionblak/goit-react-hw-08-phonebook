const getIsAuthenticated = state => state.auth.IsAuthenticated;

const getUserName = state => state.auth.user.name;

export { getIsAuthenticated, getUserName };
