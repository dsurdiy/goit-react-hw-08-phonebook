const getIsLogin = state => state.auth.isLogin;
const getEmail = state => state.auth.user.email;
const getAuthError = state => state.auth.error;

const authSelectors = {
  getIsLogin,
  getEmail,
  getAuthError,
};

export default authSelectors;
