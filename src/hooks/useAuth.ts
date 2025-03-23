import {createContext, useContext} from "react";

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    setToken: (token: string | null) => void;
    isReady: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
