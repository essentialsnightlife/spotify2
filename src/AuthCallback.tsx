import {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokens } from "@/apis/spotify";
import { setCookie } from "@/utils";
import { useAuth } from "@/hooks/useAuth";

const AuthCallback = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setToken } = useAuth();
    const hasRun = useRef(false);

    useEffect(() => {
        if (isAuthenticated) navigate("/", { replace: true });
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (isAuthenticated || hasRun.current) return;
        hasRun.current = true;

        const authCode = new URLSearchParams(window.location.search).get("code");
        if (!authCode) {
            navigate("/login", { replace: true });
            return;
        }

        const handleAuth = async () => {
            try {
                const tokens = await getAccessTokens(authCode);
                setCookie("session", tokens.access_token);
                setCookie("refresh", tokens.refresh_token);
                setToken(tokens.access_token);
                navigate("/", { replace: true });
            } catch (err) {
                console.error("Auth error:", err);
                alert("Login failed. Try again.");
                navigate("/login");
            }
        };

        handleAuth();
    }, [isAuthenticated, navigate, setToken]);

    return <>Logging you in...</>;
};

export default AuthCallback;
