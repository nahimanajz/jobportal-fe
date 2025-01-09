"use client";
import { Job } from "@/types/custom/job";
import { FC } from "react";
import * as Icon from "@/components/icons";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { create } from "@/app/services/application";
import { Application } from "@/types/custom/application";

interface IProps {
  jobs: Job[];
}
const Jobs: FC<IProps> = ({ jobs }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: create,
    onSuccess: (resp) => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Application sent!!");
    },
    onError: (err) => {
      console.log(err);
      toast.error("something went wrong");
    },
  });
  const handleApply = (job: Job) => {
    mutation.mutate({jobId:job.id, status: "Pending"} as Application)
  
  };

  return (
    <div className="p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-primary">Job Listings</h1>
      <table className="w-full border-collapse ">
        <thead>
          <tr className="bg-green-100">
            <th className=" p-2">Title</th>
            <th className=" p-2">Category</th>
            <th className=" p-2">Location</th>
            <th className=" p-2">description</th>
            <th className=" p-2">Date Posted</th>
            <th className=" p-2"> Action </th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((job) => (
              <tr key={job.id} className="text-center hover:bg-green-50">
                <td className=" p-2">{job.title}</td>
                <td className=" p-2">{job.category}</td>
                <td className=" p-2">{job.location}</td>
                <td className=" p-2">{job.description}</td>
                <td className=" p-2">{job.datePosted?.substring(0, 10)}</td>
                <td className=" p-2">
                  <button
                    className="w-full bg-primary px-4 py-3 text-white hover:bg-white hover:text-primary"
                    onClick={() => handleApply(job)}
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobs;
