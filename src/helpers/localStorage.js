export const getUserStorage = () =>
  JSON.parse(localStorage.getItem("auth_user"));

export const getTokenStorage = () => {
  let user = getUserStorage();
  return user ? user.idToken : "";
};

export const setStorage = user => {
  localStorage.setItem("auth_user", JSON.stringify(user));
};

export const clearStorage = () => {
  localStorage.removeItem("auth_user");
};
