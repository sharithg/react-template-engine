import React, { useContext, useState, useEffect } from "react";
// import Firebase from "firebase";
import useLocalStorage from "react-use-localstorage";
import ENV from "../environment";

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const [jwt, setJWT] = useLocalStorage("jwt", null);

  useEffect(() => {
    setUserLoading(true);
    fetch(`${ENV.AUTH_API_URL}/api/v1/user/details`, {
      headers: new Headers({
        Authorization: `JWT ${jwt}`,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return null;
        }
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setUserLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUserLoading(false);
      });
  }, [jwt]);

  const value = {
    currentUser,
    userLoading,
    setCurrentUser,
    setJWT,
    jwt,
  };

  return (
    <AuthContext.Provider value={value}>
      {!userLoading && children}
    </AuthContext.Provider>
  );
};
