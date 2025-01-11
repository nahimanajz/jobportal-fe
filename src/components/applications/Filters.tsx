import { FiltersProps } from "@/types/IFilterProps";
import { FC } from "react";
import TextInputWithEvent from "../FormElements/TextInputWithEvent";

const ApplicationFilters: FC<FiltersProps> = ({
  handleChange,
  setFilters,
  filters,
  className = "bg-primary",
}) => {
  return (
    <div
      className={`border-1 mb-4 flex h-auto w-full flex-wrap border-primary ${className} px-8 py-4 dark:bg-slate-600`}
    >
      <div className="mb-4 flex md:flex-row flex-col justify-between gap-4 w-full ">
      <TextInputWithEvent
          name="location"
          label="Job location"
          placeholder="Filter by Job location"
          className={"bg-white"}
          onChange={handleChange}
        />
        <TextInputWithEvent
          name="status"
          label="status"
          placeholder="Status, ex: Pending, Reviewed or Offered"
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
          className="w-full rounded bg-white px-4 text-primary h-[40px] self-center"
        >
          Sort: {filters.sortOrder ?? "asc"}
        </button>
      </div>
    </div>
  );
};

export default ApplicationFilters;
