import webserver from "./webserver";

export const fetchStatement = async () => {
  try {
    return webserver.get("/statement");
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const fetchBalance = async () => {
  try {
    return webserver.get("/balance");
  } catch (error) {
    throw new Error(error.response.data);
  }
};

