const getIsLoggedIn = state => state.userAuth.isLoggedIn;

const getUsername = state => state.userAuth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
export default authSelectors;