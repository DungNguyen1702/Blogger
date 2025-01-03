import axiosClient from "./axiosClient";

const AccountAPI = {
  findTop3AccountsByPostCount: async () => {
    const url = "/api/accounts/top-authors";
    return axiosClient.applicationNoAuth.get(url);
  },
};

export default AccountAPI;