"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "../cards/CardDataStats";
import * as Icon from "@/components/icons";
import Jobs from "../Tables/Jobs";
import Candidates from "../Tables/applications";


import { getAll as getCandidates } from "@/app/services/application";
import { getAll as getJobs } from "@/app/services/jobs";
import { User } from "@/types/custom/user";

import CardActivity from "../cards/CardActivity";
import { Job } from "@/types/custom/job";
import { Application } from "@/types/custom/application";
import ActionLink from "../common/ActionLink";

type DashboardProps = {
  jobs: Job[];
  applications: Application[];

};
const Page: React.FC = () => {
  const [data, setData] = useState<DashboardProps>();
  const [activeTab, setActiveTab] = useState(1);

  const getData = async () => {
   //TODO: fetch all jobs, and all application for admin and regular users
  };
 
  useEffect(() => {
    getData();
  }, []);

 
  return (
    <>
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold leading-[33px] text-[#071C50] dark:text-white">
          Overview
        </span>
        
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-6">
        <CardActivity
          count={33}
          title={"Interview Scheduled"}
          imgUrl={"/images/interview.svg"}
        />
        <CardActivity
          count={2}
          title={"Interview Feedback Pending"}
          imgUrl={"/images/feedback.svg"}
        />

      </div>
      <div className="mt-12 flex flex-col justify-start gap-4">
        <span className="text-[22px] font-semibold leading-[33px] text-[#333] dark:text-white">
            TODO: Add graph with filters 
        </span>
        
      </div>
      <div className="mt-12 flex flex-col justify-between gap-8">
        {/** Put Graph */}
      </div>
    </>
  );
};

export default Page;
