import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { BiRefresh } from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  return (
    <div>
      <div className="shadow-md shadow-blue-500/50 border border-gray-300 rounded-md p-4 my-2 flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[400px] pb-12 px-12">
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] min-[320px]:mb-6 sm:mb-8">
          <p className="font-roboto text-lg font-medium">
            All Tasks - Status Wise
          </p>
          <button>
            <BiRefresh size="25px" />
          </button>
        </div>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            plugins: { legend: { display: true } },
          }}
        />
      </div>
    </div>
  );
};

export default DonutChart;
