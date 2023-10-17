import React from "react";

import ProductTable from "./ProductTable";
import Order from "./Order";
import Chart from "./Chart";

const Home = () => {
  return (
    <div>
      <figure className=" ml-64">
        Hello there,
        <img
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          className="w-8"
        />
      </figure>

      <Order />
      <Chart />
      <ProductTable />
    </div>
  );
};

export default Home;
