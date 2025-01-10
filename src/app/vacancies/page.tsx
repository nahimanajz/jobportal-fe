"use client";

import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllFiltered } from "../services/jobs";
import Loader from "@/components/common/Loader";
import Item from "@/components/Jobs/Item";
import PublicNavBar from "@/components/navs/PublicNav";
import { Job } from "@/types/custom/job";
import { useSession } from "next-auth/react";
import JobsTable from "@/components/Tables/Jobs";
import Pagination from "@/components/common/Pagination";
import Filters from "@/components/Jobs/FilterFields";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function JobList() {
  const { status } = useSession();

  const [filters, setFilters] = useState<any>({
    page: 1,
    pageSize: 10,
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs", filters],
    queryFn: getAllFiltered,
  });

  const handlePageChange = (direction: string) => {
    setFilters((prev: any) => ({
      ...prev,
      page: direction === "next" ? prev.page + 1 : prev.page - 1,
    }));
  };
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  if (status === "authenticated") {
    return (
      <DefaultLayout>
         <Filters
          handleChange={handleChange}
          setFilters={setFilters}
          filters={filters}
          
        />
        <JobsTable jobs={data?.jobs as unknown as Job[]} />
        <Pagination
          handlePageChange={handlePageChange}
          filters={filters}
          data={data}
        />

      </DefaultLayout>
    );
  }
  return (
    <>
      <PublicNavBar />

      <section className="mb-0 bg-blue-50 px-4 py-10">
        <div className="container-xl m-auto lg:container">
          <h2 className="mb-6 text-center text-3xl font-bold text-primary">
            Available Vacancies
          </h2>
        </div>

        <Filters
          handleChange={handleChange}
          setFilters={setFilters}
          filters={filters}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {data?.jobs.map((job: Job, index: number) => (
              <Item job={job} key={index} />
            ))}
          </div>
        )}
        <Pagination
          handlePageChange={handlePageChange}
          filters={filters}
          data={data}
        />
      </section>
    </>
  );
}
