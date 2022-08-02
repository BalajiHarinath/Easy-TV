import axios from "axios";

export const signupService = async (userDetails) => {
  const response = await axios.post("/api/auth/signup", {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    password: userDetails.password,
  });
  return response;
};

export const loginService = async (userDetails) => {
  const response = await axios.post("/api/auth/login", {
    email: userDetails.email,
    password: userDetails.password,
  });
  return response;
};

export const testloginService = async () => {
  const response = await axios.post("/api/auth/login", {
    email: "testuser@gmail.com",
    password: "testuser123",
  });
  return response;
};
