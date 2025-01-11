import { FC } from "react";
import TextInputWithEvent from "../FormElements/TextInputWithEvent";
import { FiltersProps } from "@/types/IFilterProps";



const Filters: FC<FiltersProps> = ({ handleChange, setFilters, filters, className='bg-primary' }) => {
  return (
    <div className={`border-1 mb-4 flex h-auto w-full flex-wrap border-primary ${className} px-8 py-4 justify-between w-full dark:bg-slate-600`}>
      <div className="mb-4 flex flex-wrap gap-4 lg:flex-nowrap">
       
        <TextInputWithEvent
          name="title"
          label="Title"
          placeholder="Filter job by title"
          className={"bg-white"}
          onChange={handleChange}
        />
        <TextInputWithEvent
          name="description"
          label="Description"
          placeholder="Filter job by description"
          className={"bg-white"}
          onChange={handleChange}
        />
         <TextInputWithEvent
          name="location"
          label="location"
          placeholder="location"
          className={"bg-white"}
          onChange={handleChange}
        />
        <TextInputWithEvent
          name="category"
          label="category"
          placeholder="category"
          className={"bg-white"}
          onChange={handleChange}
        />
        <TextInputWithEvent
          name="dateFrom"
          label="Date From"
          type="date"
          placeholder="dateFrom"
          className={"bg-white"}
          onChange={handleChange}
        />

        <TextInputWithEvent
          name="dateTo"
          label="Date To"
          type="date"
          placeholder="dateTo"
          className={"bg-white"}
          onChange={handleChange}
        />
        <TextInputWithEvent
          name="sortBy"
          label="sortBy "
          placeholder="sortBy: ex: email, ..."
          className={"bg-white"}
          onChange={handleChange}
        />

        <button
          onClick={() =>
            setFilters({
              ...filters,
              sortOrder: filters.sortOrder === "asc" ? "desc" : "asc",
            })
          }
          className="w-full rounded bg-white px-4 text-primary h-[40px] self-center "
        >
          Sort: {filters.sortOrder ?? "asc"}
        </button>
      </div>
    </div>
  );
};

export default Filters;
