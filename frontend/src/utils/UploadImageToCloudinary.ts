import axiosClient from '../api/axiosClient';

const UploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('images', file);
  return axiosClient.formDataNoAuth.post('/api/guest/upload/single-image', formData); // Replace with your Cloudinary cloud name
};

export default UploadImageToCloudinary;