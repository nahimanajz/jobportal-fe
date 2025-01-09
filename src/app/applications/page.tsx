"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getAll } from "../services/application";
import {ChangeEvent, useState } from "react";
import ApplicationTable from "@/components/Tables/applications";
import ActionLink from "@/components/common/ActionLink";
import { useQuery } from "@tanstack/react-query";
import Pagination from "@/components/common/Pagination";
import ApplicationFilters from "@/components/applications/Filters";

 const Page = () => {

  const [filters, setFilters] = useState<any>({
      page: 1,
      pageSize: 10,
    });
    const { data, isLoading, error } = useQuery({
      queryKey: ["applications", filters],
      queryFn: getAll,
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
    console.log(data)
  return (
    <DefaultLayout>
       <ApplicationFilters
          handleChange={handleChange}
          setFilters={setFilters}
          filters={filters}
          />

      <ApplicationTable data={data?.applications ?? []} />
      <Pagination handlePageChange={handlePageChange} filters={filters} data={data} />

    </DefaultLayout>
  );
};
export default Page;
