export const saveAccessTokenLs = (access_Token) => {
  localStorage.setItem("access_token", access_Token);
};

export const clearAccessTokenFromLs = () => {
  localStorage.removeItem("access_token");
};

export const getAccessTokenFromLs = () =>
  localStorage.getItem("access_token") || "";
