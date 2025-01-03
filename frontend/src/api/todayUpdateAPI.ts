import axiosClient from "./axiosClient";

const TodayUpdateAPI = {
  getTodayUpdateByDate: async (dateString: String) => {
    const url = `/api/today-update?dateString=${dateString}`;
    return axiosClient.applicationNoAuth.get(url);
  },
};

export default TodayUpdateAPI;
