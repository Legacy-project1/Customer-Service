import { axiosInstance } from "./axiosInstance";

// register user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// login user
export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-current-user");
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all users
export const GetAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-users");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// update user status
export const updateUserStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `/api/users//update-user-status/${id}`,
      {status}
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
