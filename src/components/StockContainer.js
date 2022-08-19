import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksArray, onStockClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksArray.map((stock) => <Stock key={stock.id} stock={stock} onStockClick={onStockClick} />)}
    </div>
  );
}

export default StockContainer;
