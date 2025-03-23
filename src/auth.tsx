import { AuthContext } from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { getCookie } from "./utils";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const cookieToken = getCookie("session");
        if (cookieToken) setToken(cookieToken);
        setIsReady(true);
    }, []);

    return (
        <AuthContext.Provider value={{ token, isAuthenticated: !!token, setToken, isReady }}>
            {children}
        </AuthContext.Provider>
    );
};