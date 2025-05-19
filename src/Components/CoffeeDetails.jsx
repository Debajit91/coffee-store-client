import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, price, photo, details } = coffee;
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <img
        className="w-full h-64 object-cover rounded"
        src={photo}
        alt={name}
      />
      <h2 className="text-2xl font-bold mt-4 text-gray-700">{name}</h2>
      <p className="text-gray-700">
        <strong>Price:</strong> ${price}
      </p>
      {details && <p className="text-gray-600 mt-4">{details}</p>}
    </div>
  );
};

export default CoffeeDetails;
