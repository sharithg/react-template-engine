import React, { useContext, useState, useEffect } from "react";
// import Firebase from "firebase";
import { useAuth } from "./AuthContext";
import ENV from "../environment";

const DataContext = React.createContext({});

export function useData() {
  return useContext(DataContext);
}

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const { jwt } = useAuth();

  useEffect(() => {
    fetch(`${ENV.PRODUCT_API_URL}/api/v1/data`, {
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
        console.log(data);
        setUserData(data);
        setDataLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setDataLoading(false);
      });
  }, [jwt]);

  const value = {
    userData,
  };

  // if (dataLoading) return <h1>Loading...</h1>;

  return (
    <DataContext.Provider value={value}>
      {!dataLoading && children}
    </DataContext.Provider>
  );
};
