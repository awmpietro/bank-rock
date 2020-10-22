import webserver from "./webserver";

export const login = async credentials => {
  try {
    return webserver.post("/login", credentials);
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const register = async credentials => {
  try {
    return webserver.post("/register", credentials);
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    return webserver.get("/login/logout");
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const session = async () => {
  try {
    return webserver.get("/login/session");
  } catch (error) {
    throw new Error(error.response.data);
  }
};
