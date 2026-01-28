import { getWeatherByCity } from "../api/weather.api";
import { useEffect, useState } from "react";
export default function Weathercard({ data }) {
  if (!data) return null;
  return (
    <div className="mt-3 border-0  mx-auto h-[90px] w-[310px] shadow-2xl rounded-lg  shadow-[0_-1px_18px_1px_rgba(0,0,0,0.3)] ">
      <div className="grid grid-cols-2 gap-6 jsutify-center items-center ">
        <div className=" mx-4 mt-1">
          <p className="text-ld font-bold text-gray-700">
            {data.city || "City"}
          </p>
          <p className="text-3xl font-bold text-gray-500">
            {data?.temperature || "N/A"}°C
          </p>
          <div className="flex">
            <p className="text-sm  font-semibold text-gray-700">FeelsLike:</p>
            <p className="text-sm  font-medium mx-1 text-gray-500">
              {data?.feeldLike || "N/A"}°C
            </p>
          </div>
        </div>

        <div className="mx-8  mt-1">
          <p className="text-lg font-bold text-gray-700">Humidity</p>
          <p className="text-3xl font-bold text-gray-500">
            {data?.humidity || "N/A"}%
          </p>

          <div className="flex">
            <p className="text-sm font-semibold text-gray-700 ">Weather: </p>
            <p className="text-sm capitalize font-medium mx-1 text-gray-500">
              {data?.weather || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
