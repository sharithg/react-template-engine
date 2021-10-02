import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const Authenticate = () => {
  const { setJWT } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const access_token = urlParams.get("access_token");
    const bufferObj = Buffer.from(access_token, "base64");
    setJWT(bufferObj.toString("utf-8"));
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host;
    window.location.replace(baseUrl);
  }, [setJWT]);

  return <div></div>;
};

export default Authenticate;
