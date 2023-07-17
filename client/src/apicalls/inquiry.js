
import { axiosInstance } from "./axiosInstance";

export const GetInquiries = async () => {
  try {
    const response = await axiosInstance.get("/admin/inquiry");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch inquiries");
  }
};
