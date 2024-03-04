import React, { createContext, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContextType, User } from "./authTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to fetch auto login
async function fetchAutoLogin(token: string) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auto_login`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) throw new Error("Auto-login failed");
  return response.json();
}

async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await response.json();
  if (!response.ok || !data.token) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}

async function signupUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/users`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await response.json();
  if (!response.ok || !data.token) {
    throw new Error(data.message || "Signup failed");
  }
  return data;
}

async function logoutUser() {
  return {};
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  // useQuery for auto-login
  const autoLoginQuery = useQuery<User, Error>({
    queryKey: ["autoLogin"],
    queryFn: () => fetchAutoLogin(localStorage.getItem("token") || ""),
    enabled: !!localStorage.getItem("token"),
  });

  // useMutation for login, signup, and logout
  const loginMutation = useMutation<
    { token: string; user: User },
    Error,
    { email: string; password: string }
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["autoLogin"], data.user);
    },
  });

  const signupMutation = useMutation<
    { token: string; user: User },
    Error,
    { email: string; password: string }
  >({
    mutationFn: signupUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["autoLogin"], data.user);
    },
  });

  const logoutMutation = useMutation<{}, Error, void>({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.removeQueries({ queryKey: ["autoLogin"], exact: true });
    },
  });

  // Helper functions to perform mutations
  const login = async (email: string, password: string) =>
    loginMutation.mutate({ email, password });
  const signup = async (email: string, password: string) =>
    signupMutation.mutate({ email, password });
  const logout = () => logoutMutation.mutate();

  return (
    <AuthContext.Provider
      value={{
        currentUser: autoLoginQuery.data || null,
        isAuthenticated: autoLoginQuery.isSuccess,
        loading: autoLoginQuery.isLoading,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
