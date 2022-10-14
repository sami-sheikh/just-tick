import React from "react";
import TableHead from "./TableHead";

function Table({ data }) {
  return (
    <div className="w-full text-black py-24">
      <div className="w-full max-w-6xl mx-auto">
        <table className="table-auto border-collapse border border-lightslate w-full">
          <TableHead data={data.headings} />
          <tbody>
            {data.rowsData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-grey border border-lightslate px-3 pt-2 text-sm">
                    {item.client}
                  </td>
                  <td className="text-grey border border-lightslate px-3 pt-2 text-sm">
                    {item.system}
                  </td>
                  <td className="text-grey border border-lightslate px-3 pt-2 text-sm">
                    {item.targetDate}
                  </td>
                  {item.data?.map((subData, i) => {
                    return (
                      <td
                        className="text-grey border border-lightslate px-3 pt-2"
                        key={i}
                      >
                        <div className="flex gap-3 items-center" key={i}>
                          {subData.map((data, i) => {
                            return (
                              <div
                                className={`w-4 h-4 rounded-sm relative group cursor-pointer ${
                                  data.status === 1
                                    ? "bg-emerald-500"
                                    : data.status === 2
                                    ? "bg-gray-700"
                                    : data.status === 3
                                    ? "bg-red"
                                    : ""
                                }`}
                                key={i}
                              >
                                <div
                                  className={`hidden group-hover:block absolute left-0 translate-x-[-50%] bg-black text-white z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 rounded-2xl min-w-[13rem] text-center  ${
                                    index === 0
                                      ? "top-[120%] tooltip-top-arrow"
                                      : "bottom-[120%] tooltip-bottom-arrow"
                                  }`}
                                >
                                  <p className="font-medium">{data.title}</p>
                                  <p>{data.targetDate}</p>
                                  <p>{data.user}</p>
                                  <p>{data.date}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
