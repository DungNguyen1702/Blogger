import axiosClient from "./axiosClient";

const UploadImageAPI = {
  UploadSingleImage: async (formData: FormData) => {
    const url = `/api/guest/upload/single-image`;
    return axiosClient.formDataNoAuth.post(url, formData);
  },
};

export default UploadImageAPI;
