import axios from 'axios';

const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

  const response = await axios.post('https://api.cloudinary.com/v1_1/cloud_name/image/upload', formData); // Replace with your Cloudinary cloud name
  return response.data.secure_url;
};

export default uploadImageToCloudinary;