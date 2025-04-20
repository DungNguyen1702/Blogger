import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import axiosClient from "../api/axiosClient";

// Định nghĩa kiểu dữ liệu cho context
interface AccountContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  account: any; // Thay 'any' bằng kiểu dữ liệu cụ thể của account nếu có
  setAccount: (account: any) => void; // Thay 'any' bằng kiểu dữ liệu cụ thể của account nếu có
}

// Tạo context với giá trị mặc định
const AccountContext = createContext<AccountContextType>({
  token: null,
  setToken: () => {},
  account: null,
  setAccount: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [account, setAccount] = useState<any>(
    JSON.parse(localStorage.getItem("account") || "null")
  );

  const providerValue = useMemo(
    () => ({ token, setToken, account, setAccount }),
    [token, setToken, account, setAccount]
  );

  useEffect(() => {
    if (token) {
      // Set authenticate token to axios
      axiosClient.application.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      axiosClient.formData.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      // User logout
      delete axiosClient.application.defaults.headers.common["Authorization"];
      delete axiosClient.formData.defaults.headers.common["Authorization"];

      setAccount(null);
      localStorage.removeItem("token");
      localStorage.removeItem("account");
    }
  }, [token]);

  useEffect(() => {
    if (account) {
      localStorage.setItem("account", JSON.stringify(account));
    }
  }, [account]);

  return (
    <AccountContext.Provider value={providerValue}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;