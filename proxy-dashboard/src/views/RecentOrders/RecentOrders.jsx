import React, { useEffect, useState } from "react";
import { getResource } from "../../utils";
import "./RecentOrders.css";
import ENV from "../../environment";
import { useAuth } from "../../contexts/AuthContext";

const getRecentOrders = async (jwt) => {
  const [data, err] = await getResource(
    `${ENV.PRODUCT_API_URL}/api/v1/products/transactions`,
    jwt
  );
  return data;
};

const RecentOrders = () => {
  const { jwt } = useAuth();
  const [transactions, setTransactions] = useState();
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [color, setColor] = useState("white");
  const [current, setCurrent] = useState();

  useEffect(() => {
    setTransactionsLoading(true);
    getRecentOrders(jwt).then((v) => {
      setTransactions(v);
      setTransactionsLoading(false);
    });
  }, [jwt]);

  if (transactionsLoading || !transactions) return <h6>Loading...</h6>;

  return (
    <div className="list">
      <div className="box-title">
        <h1>Recent Orders</h1>
      </div>
      <div className="list__view__container">
        <div className="list__view" style={{ whiteSpace: "nowrap" }}>
          <table style={{ width: "100%", padding: 5 }}>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Data</th>
              <th>Plan</th>
            </tr>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td
                  style={{
                    color: current === transaction.id ? color : "white",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    setCurrent(transaction.id);
                    setColor("orange");
                  }}
                  onMouseLeave={() => {
                    setCurrent(transaction.id);
                    setColor("white");
                  }}
                  onClick={() => {
                    setCurrent(transaction.id);
                    setColor("green");
                    window.navigator.clipboard.writeText(transaction.id);
                  }}
                >
                  {transaction.id.substring(0, 15)}
                </td>
                <td>${transaction.amount / 100}</td>
                <td>{transaction.data_gb}</td>
                <td>{transaction.name}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
