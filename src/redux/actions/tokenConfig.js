export const tokenConfig = (getState) => {
  // Get the token from localStorage

  const token = getState().auth.token;

  // Headers

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = token;
  }

  return config;
};
