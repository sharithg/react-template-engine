import React, { useState } from "react";
import { Button, Card } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import useWindowDimensions from "../../utils/useWindowDimentions";
import ENV from "../../environment";

const getPriceText = (currentBuyingPrice) => {
  const price = JSON.parse(currentBuyingPrice);
  if (price.is_active) {
    return "Buy";
  }
  return "Out of stock";
};

const isPriceDisabled = (currentBuyingPrice) => {
  const price = JSON.parse(currentBuyingPrice);
  if (price.is_active) {
    return false;
  }
  return true;
};

// const getPriceId = (currentBuyingPrice) => {
//   const price = JSON.parse(currentBuyingPrice);
//   return price.id;
// };

const PriceItem = ({ product }) => {
  const [currentBuyingPrice, setCurrentBuyingPrice] = useState(
    JSON.stringify(product.prices.sort((a, b) => a.data_gb - b.data_gb)[0])
  );
  const { width } = useWindowDimensions();

  const { jwt } = useAuth();

  const [checkoutLoading, setCheckoutLoading] = useState(false);

  return (
    <Card bg>
      <h1>{product.name}</h1>
      <ul style={{ marginLeft: 20, marginBottom: 10 }}>
        <li>Private pools with 100 Million+ residential IPs</li>
        <li>Independent IP pools</li>
        <li>Unbanned on all sites</li>
      </ul>
      <div
        style={
          width < 767
            ? {}
            : { display: "flex", justifyContent: "space-between" }
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <select
            style={{ width: 100, marginTop: 6, marginRight: 15 }}
            onChange={(e) => setCurrentBuyingPrice(e.target.value)}
          >
            {product.prices
              .sort((a, b) => a.data_gb - b.data_gb)
              .map((p) => (
                <option key={p.id} value={JSON.stringify(p)}>
                  {p.data_gb}
                </option>
              ))}
          </select>
          <Button
            title={getPriceText(currentBuyingPrice)}
            disabled={isPriceDisabled(currentBuyingPrice) || checkoutLoading}
            isLoading={checkoutLoading}
            onClick={() => {
              setCheckoutLoading(true);
              fetch(
                `${ENV.PRODUCT_API_URL}/api/v1/products/checkout/${
                  product.id
                }/${JSON.parse(currentBuyingPrice).id}`,
                {
                  headers: new Headers({
                    Authorization: `JWT ${jwt}`,
                  }),
                }
              )
                .then((res) => {
                  if (!res.ok) {
                    return null;
                  }
                  return res.json();
                })
                .then((data) => {
                  setCheckoutLoading(false);
                  console.log(data);
                  window.location.href = data.link;
                })
                .catch((e) => {
                  console.log(e);
                  setCheckoutLoading(false);
                });
            }}
          />
        </div>
        <h3 style={{ marginTop: 15 }}>
          ${JSON.parse(currentBuyingPrice).price / 100}
        </h3>
      </div>
    </Card>
  );
};

export default PriceItem;
