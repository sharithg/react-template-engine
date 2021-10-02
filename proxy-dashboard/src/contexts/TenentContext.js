import React, { useState, useContext, useEffect } from "react";

const TenentContext = React.createContext();

export const TenentProvider = ({ children }) => {
  const [tenentToken, setTenentToken] = useState(null);
  const [tenentLoading, setTenentLoading] = useState(true);
  const [tenentError, setTenentError] = useState();

  useEffect(() => {
    const url =
      window.location.hostname === "localhost" ? "http://localhost:8888" : "";
    fetch(url + "/.netlify/functions/tenentToken")
      .then((r) => r.json())
      .then((r) => {
        setTenentToken(r.tenent_token);
        setTenentLoading(false);
      })
      .catch((err) => {
        setTenentLoading(false);
        setTenentError(err.message);
      });
  }, [setTenentToken]);

  const value = { tenentToken, tenentLoading, tenentError };
  return (
    <TenentContext.Provider value={value}>
      {!tenentLoading && children}
    </TenentContext.Provider>
  );
};

export const useTenent = () => useContext(TenentContext);
