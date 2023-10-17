import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["ProductName", "Stock", "Price", "TotalSales"];

const TABLE_ROWS = [
  {
    ProductName: "Abstarct 3D",
    Stock: "32 in stock",
    Price: "$45.99",
    TotalSales: "20",
  },
  {
    ProductName: "Sarpens Illustration",
    Stock: "32 in stock",
    Price: "$45.99",
    TotalSales: "20",
  },
  {
    ProductName: "glasses",
    Stock: "32 in stock",
    Price: "$2000",
    TotalSales: "20",
  },
  {
    ProductName: "glasses",
    Stock: "32 in stock",
    Price: "$2000",
    TotalSales: "20",
  },
];

const ProductTable = () => {
  // const[value,setValue]=useState();
  return (
    
    <Card className="h-screen w-screen mt-8 ml-64 ">
      
      <table className="w-screen min-w-max shadow-2xl table-auto text-left  h-2/6  w-4/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <thead>
          <h1 className="ml-5">Product Sell</h1>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-6"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ ProductName, Stock, Price, TotalSales }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={ProductName}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      {ProductName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Stock}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {TotalSales}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default ProductTable;
