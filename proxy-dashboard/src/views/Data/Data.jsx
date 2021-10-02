import React from "react";
// import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";
import { Dropdown } from "../../components";
import { useState } from "react";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import "./Data.css";
import { getFormattedDate } from "../../utils";

const getPercentage = (total_gb, data_usage) => {
  return (data_usage / total_gb) * 100;
};

const Data = () => {
  const { userData } = useData();

  const [currentPlan, setCurrentPlan] = useState(
    userData.length === 0 ? { total_gb: 0, data_usage: 0 } : userData[0]
  );

  console.log(userData);

  // if (userData.length === 0) return <h1>No plans purchased yet</h1>;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span className="top-header">
            <div className="box-title">
              <h1>Data Used</h1>
            </div>
            <Dropdown
              options={userData.map((p) => p.product_name)}
              onSelectChange={(e) =>
                setCurrentPlan(
                  userData.find((p) => p.product_name === e.target.value)
                )
              }
              disabled={userData.length === 0}
              width={150}
              style={{
                marginLeft: "50px",
              }}
            />
          </span>
          <div
            style={{
              marginLeft: "10px",
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 500 }}>
              {currentPlan.data_used}GB
            </span>
            <span style={{ fontSize: 20 }}> of {currentPlan.total_gb}GB</span>
          </div>
          <br />
          <br />
          <h3
            style={{
              marginLeft: "10px",
              fontWeight: 500,
            }}
          >
            {getFormattedDate()}
          </h3>
        </div>
        <div
          style={{
            marginRight: "20px",
          }}
        >
          <CircularProgress
            percent={
              userData.length === 0
                ? 0
                : getPercentage(currentPlan.total_gb, currentPlan.data_used)
            }
          />
        </div>
      </div>
      {userData.length === 0 ? (
        <h4 className="no-plan">No plan purchased</h4>
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
