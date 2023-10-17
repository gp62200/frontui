import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Order = () => {
  return (
    <div className="grid grid-cols-4 mt-4 ml-64">
      <div className="flex w-56 rounded-lg bg-white shadow-2xl  ">
        <img className="h-16 w-16 mt-9 ml-2 " src="dollar-symbol.png" alt="" />
        <div className="flex flex-col justify-start p-4">
          <p className=" text-base text-neutral-600 dark:text-neutral-200">
            Earning
          </p>
          <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
            $198k
          </h5>

          <p className="text-xs  dark:text-neutral-300">
            <span className="text-green-600 font-semibold">↑ 37.8% </span> this
            month
          </p>
        </div>
      </div>
      <div className="flex  w-56 rounded-lg bg-white shadow-2xl dark:bg-neutral-700 ">
        <img className="h-16 w-16 mt-9 " src="order-history.png" alt="" />
        <div className="flex flex-col justify-start p-6">
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Order
          </p>

          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            $2.4k
          </h5>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            <span className="text-red-600 font-semibold">↓ 2% </span>
            this month
          </p>
        </div>
      </div>
      <div className="flex w-60 rounded-lg bg-white shadow-2xl dark:bg-neutral-700 ">
        <img className="h-20 w-20 mt-7 " src="wallet (1).png" alt="" />
        <div className="flex flex-col justify-start p-6">
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Balance
          </p>

          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            $2.4k
          </h5>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            <span className="text-red-600 font-semibold">↓ 2% </span>
            this month
          </p>
        </div>
      </div>
      <div className="flex w-60 rounded-lg bg-white shadow-2xl dark:bg-neutral-700 ">
        <img className="h-16 w-16 mt-7 " src="sales.png" alt="" />
        <div className="flex flex-col justify-start p-2">
          <p className=" text-base text-neutral-600 dark:text-neutral-200">
            Total sales
          </p>
          <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
            $89k
          </h5>

          <p className="text-xs  dark:text-neutral-300">
            <span className="text-green-600 font-semibold">↑ 11% </span>
            this week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
