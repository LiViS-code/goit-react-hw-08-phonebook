const getIsLoggedIn = state => state.authUser.isLoggedIn;
const getUserName = state => state.authUser.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
