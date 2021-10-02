import React from "react";
import "./List.css";

const listData = (proxy_list) => {
  const lists = [];
  for (let i = 0; i < proxy_list.length; i++) {
    lists.push(proxy_list[i]);
  }

  return lists;
};

export default function List({ proxyList }) {
  return (
    <div className="list">
      {/* <div className="list__view__container"> */}
      <div className="list__view" style={{ whiteSpace: "nowrap" }}>
        {listData(proxyList).map((v) => (
          <p>{v}</p>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
