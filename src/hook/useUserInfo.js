export const useUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo ? JSON.parse(userInfo) : null;
};

export const useUserToken = () => {
  const atk = localStorage.getItem("atk");
  return atk ? JSON.parse(atk) : null;
};
