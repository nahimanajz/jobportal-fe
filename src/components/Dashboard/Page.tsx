"use client";
import React, { ChangeEvent, useState } from "react";
import { Job } from "@/types/custom/job";
import Chart from "../Charts/chart";
import { useQuery } from "@tanstack/react-query";
import { getApplicationOvertime } from "@/app/services/dashboard";
import SelectGroupOne from "../FormElements/SelectGroup/SelectGroupOne";
import { OvertimeResponse } from "@/types/IDashboardResponse";
import Jobs from "../Tables/Jobs";
import { getAll, getCategories } from "@/app/services/jobs";


const Page = () => {
  const [interval, setInterval] = useState("day")
  const [category, setCategory] = useState<string>()


  const { data, isLoading, error } = useQuery({
    queryKey: ["applicationsOvertime", interval],
    queryFn: getApplicationOvertime,
  });

  // Jobs
  const { data: jobs, isLoading: loading, error: jobErr } = useQuery({
    queryKey: ["jobs", category],
    queryFn: getAll,
  });
  // job categorues
  const { data: categories, isLoading: catLoading, error: catErr } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const doOnchange = (e: ChangeEvent<HTMLSelectElement>) => {

    setInterval(e.target.value)
  }
  const onChangeSelectOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const categoryOptions = categories?.map((item) => item.category).splice(0, 10)

  return (
    <div className="flex md:flex-row flex-col w-full justify-between space-y-8 md-space-y-0">
      <div className="bg-white px-8 py-3 shadow w-full">
        <div className="flex justify-between bg-white">
          <span className="text-[22px] font-semibold leading-[33px] text-[#071C50] dark:text-white ">
            Job applications overtime
          </span>

        </div>

        <div className="mt-12 flex flex-col justify-start gap-4">
          <span className=" leading-[33px] text-[#333] dark:text-white">
            <div className="w-1/2">
              <SelectGroupOne
                options={["day", "week", "month", "year"]}
                label={"Filter Applications by date range"} name={"interval"}
                onChange={doOnchange}
              />
            </div>
          </span>

        </div>
        <div className="mt-12 flex flex-col justify-between gap-8">

          <Chart data={data as unknown as OvertimeResponse[]} />
        </div>
      </div>
      <div className="flex gap-8 w-full justify-end">
        <div className="shadow bg-white px-6 py-5">
       
          {categories &&
            <SelectGroupOne
              options={categoryOptions as string[]}
              label={"Job Categories"}
              name={"jobs"}
              onChange={onChangeSelectOption}

            />}
          <Jobs jobs={jobs?.jobs as Job[]} />

        </div>
      

      </div>
    </div>

  );
};

export default Page;
