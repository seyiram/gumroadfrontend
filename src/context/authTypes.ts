
export interface User {
    id: number;
    email: string;
  }
  
  export interface AuthContextType {
    currentUser: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (email: string, password: string) => Promise<void>;
  }
  