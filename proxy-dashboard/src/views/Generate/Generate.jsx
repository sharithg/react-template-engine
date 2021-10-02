import React, { useState } from "react";
import { Card, Dropdown, Button, List } from "../../components";
import { useData } from "../../contexts/DataContext";
import { getResource } from "../../utils";
import { useAuth } from "../../contexts/AuthContext";
import "./Generate.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useWindowDimensions from "../../utils/useWindowDimentions";
import ENV from "../../environment";

// import { ButtonSecondary } from "../";

// import { countries } from "../../constants";
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const Generate = () => {
  const [quantity, setQuantity] = useState(50);
  const { userData } = useData();
  const [currentPlan, setCurrentPlan] = useState(userData[0]);
  const [country, setCountry] = useState(userData[0]?.countries[0]?.display);
  const [proxyList, setProxyList] = useState([]);
  const [proxyListLoading, setProxyListLoading] = useState(false);
  const [proxyListCopied, setProxyListCopied] = useState(false);
  const { width } = useWindowDimensions();
  const [genType, setGenType] = useState("Sticky");

  const { jwt } = useAuth();

  return (
    <div>
      <Card>
        <div className="box-title">
          <h1>Generate</h1>
        </div>
        <div
          style={
            width < 767
              ? {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  // width: "100%",
                }
              : {}
          }
        >
          {width < 767 ? (
            <>
              <Dropdown
                title="Proxy Pool"
                onSelectChange={(e) =>
                  setCurrentPlan(
                    userData.find((p) => p.product_name === e.target.value)
                  )
                }
                options={userData.map((p) => p.product_name)}
                width={150}
                disabled={userData.length === 0}
              />
              <Dropdown
                title="Country"
                options={
                  currentPlan?.countries
                    ? currentPlan.countries
                        .map((c) => c.display)
                        .sort((a, b) => {
                          return a.toLowerCase().localeCompare(b.toLowerCase());
                        })
                    : []
                }
                value={country}
                onSelectChange={(e) => {
                  console.log(e);
                  setCountry(e.target.value);
                }}
                width={150}
                disabled={userData.length === 0}
              />
              <Dropdown
                title="Type"
                options={["Sticky", "Rotating"]}
                width={150}
                onSelectChange={(e) => setGenType(e.target.value)}
                disabled={userData.length === 0}
              />
              <Dropdown
                title="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                width={150}
                disabled={userData.length === 0}
              />
            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Dropdown
                  title="Proxy Pool"
                  onSelectChange={(e) =>
                    setCurrentPlan(
                      userData.find((p) => p.product_name === e.target.value)
                    )
                  }
                  options={userData.map((p) => p.product_name)}
                  width={150}
                  disabled={userData.length === 0}
                />
                <Dropdown
                  title="Country"
                  value={country}
                  options={
                    currentPlan?.countries
                      ? currentPlan.countries
                          .map((c) => c.display)
                          .sort((a, b) => {
                            return a
                              .toLowerCase()
                              .localeCompare(b.toLowerCase());
                          })
                      : []
                  }
                  onSelectChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  width={150}
                  disabled={userData.length === 0}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Dropdown
                  title="Type"
                  options={["Sticky", "Rotating"]}
                  width={150}
                  disabled={userData.length === 0}
                  onSelectChange={(e) => setGenType(e.target.value)}
                />
                <Dropdown
                  title="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="text"
                  width={150}
                  disabled={userData.length === 0}
                />
              </div>
            </>
          )}
        </div>
        {quantity > 5000 ? (
          <small>Quantity cannot be greater than 5000</small>
        ) : (
          ""
        )}
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Button
            title={userData.length === 0 ? "No plan purchased" : "Generate"}
            display="flex"
            disabled={
              quantity > 5000 || proxyListLoading
                ? true
                : false || userData.length === 0
            }
            onClick={() => {
              console.log(currentPlan, quantity, country, genType);
              const query = `${
                currentPlan.plan
              }/${quantity}/${country}/${genType.toUpperCase()}`;
              setProxyListLoading(true);
              getResource(
                `${ENV.PRODUCT_API_URL}/api/v1/data/generate/${query}`,
                jwt
              ).then((v) => {
                const [data] = v;
                setProxyList(data.list);
                setProxyListCopied(false);
                setProxyListLoading(false);
              });
            }}
            isLoading={proxyListLoading}
            gear={userData.length !== 0}
          />
        </div>
      </Card>

      <Card>
        <List proxyList={proxyList} />
        <div className="button__container">
          <CopyToClipboard
            text={proxyList.reduce((p, v) => `${p}${v}`, "")}
            onCopy={() => {
              setProxyListCopied(true);
              setTimeout(() => {
                setProxyListCopied(false);
              }, 2000);
            }}
          >
            <Button
              disabled={proxyList.length === 0}
              title={proxyListCopied ? "Copied" : "Copy"}
              copied={proxyListCopied}
            />
          </CopyToClipboard>
          <div style={{ marginLeft: 40 }} />
          <Button
            disabled={proxyList.length === 0}
            title="Download"
            onClick={() => download("proxylist.txt", proxyList.join(""))}
          />
        </div>
      </Card>
    </div>
  );
};

export default Generate;
