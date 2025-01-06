import axiosClient from "../axiosClient";
const AccountAPI = {
  loginAccount: (account: any) => {
    const url = "/auth/login";
    return axiosClient.applicationNoAuth.post(url, account);
  },
  registerAccount: (account: any) => {
    const url = "/auth/signup";
    return axiosClient.applicationNoAuth.post(url, account);
  },
  updateAccount: (newAccount: any) => { 
    const url = "/api/v1/account/update";
    return axiosClient.applicationNoAuth.post(url, newAccount);
  },
  updatePassword: (newPassword: any) => {
    const url = "/api/v1/account/changePassword";
    return axiosClient.application.post(url, newPassword);
  },
  getAllAccountByAdmin: () => {
    const url = "api/v1/admin/getAllAccount";
    return axiosClient.application.get(url);
  },
  deleteAccount: (accountId: any, isDeleted: any) => {
    const url = `/api/v1/admin/deleteAccount`;
    return axiosClient.application.post(url, {
      id: accountId,
      isDeleted: isDeleted ? true : false
    });
  }
};

export default AccountAPI;
