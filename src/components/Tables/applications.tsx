"use client";
import { FC } from "react";

import { Application, ApplicationResponse } from "@/types/custom/application";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplication, update } from "@/app/services/application";
import { toast } from "react-toastify";

interface IProps {
  data: ApplicationResponse[];
}
const Appliations: FC<IProps> = ({ data }) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: update,
    onSuccess: (respo) => {
      queryClient.invalidateQueries({ queryKey: ['applications'] })
      console.log("response", respo)
      
    },
    onError:(err:any)=>{
      console.log(err)
      toast.error(err.response.data.message)
    }
  })
  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: (respo) => {
      queryClient.invalidateQueries({ queryKey: ['applications'] })
      console.log("response while deleting", respo)
      
    },
    onError:(err:any)=>{
      console.log(err)
      toast.error(err.response.data.message)

    }
  })

  const updateStatus = (id:string, status:string) => {
    updateMutation.mutate({id, status } as Application)
    
  }
  const handleDelete = (id:string) => {
    deleteMutation.mutate(id)
  }

  return (

    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-primary">Job Listings</h1>
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-green-100">
              <th className=" p-2">Applicant</th>
              <th className=" p-2">Job title</th>
              <th className=" p-2">Status</th>
              <th className=" p-2">Date Posted</th>
              <th className=" p-2">Date Applied</th>
              <th className=" p-2"> Change Status or Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((record: ApplicationResponse) => (
                <tr key={record.id} className="text-center hover:bg-green-50">
                  <td className=" p-2">{record.user.email}</td>
                  <td className=" p-2">{record.job.title}</td>
                  <td className=" p-2">{record.status}</td>
                  <td className=" p-2">{record.job.datePosted?.substring(0, 10)}</td>
                  <td className=" p-2">{record.dateApplied}</td>
                  <td className=" p-2">
                    <div className="flex gap-4">
                    
                      <span onClick={() => updateStatus(record.id, "Reviewed")} className="px-3 py-1 bg-primary rounded-xl text-white cursor-pointer"> Review</span>
                      <span onClick={() => updateStatus(record.id, "Accepted")} className="px-3 py-1 bg-secondary rounded-xl text-white cursor-pointer">Accept</span>

                      <span onClick={() => handleDelete(record.id)} className="px-3 py-1 bg-black rounded-xl text-white cursor-pointer">Delete</span>
                    </div>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appliations;
