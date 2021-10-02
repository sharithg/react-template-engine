import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTenent } from "../contexts/TenentContext";
import ENV from "../environment";

const Login = () => {
  const { currentUser } = useAuth();
  const { tenentToken } = useTenent();

  useEffect(() => {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host;
    console.log(currentUser);
    if (currentUser) {
      window.location.replace(baseUrl);
    }
    console.log(`${baseUrl}/authorize`);
    window.location.replace(
      `${ENV.AUTH_API_URL}/api/v1/auth/discord/login?tenent_token=${tenentToken}&redirect_uri=${baseUrl}/authorize`
    );
  }, [currentUser, tenentToken]);

  return <div></div>;
};

export default Login;
