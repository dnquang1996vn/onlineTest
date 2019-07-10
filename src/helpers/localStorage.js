export const getUserStorage = () =>
  JSON.parse(localStorage.getItem("auth_user"));

export const getTokenStorage = () => {
  let user = getUserStorage();
  console.log(user);
  return user.idToken;
};

export const setStorage = user => {
  localStorage.setItem("auth_user", JSON.stringify(user));
};

export const clearStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("auth_user");
};
