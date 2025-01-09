import { FC } from "react";

interface PaginationProps {
    handlePageChange: any,
    filters: any,
    data: any
}

const Pagination: FC<PaginationProps> = ({ handlePageChange, filters, data }) => {
    return (
        <div className="mt-8 flex items-center justify-between">
            <button
                onClick={() => handlePageChange("prev")}
                disabled={filters.page === 1}
                className="rounded-md  bg-primary px-[16px] py-[8px] text-white  disabled:opacity-50 dark:bg-slate-600"
            >
                Previous
            </button>
            <span>
                Page {filters.page} of {data?.totalPages} out of {data?.totalCount}{" "}
                records
            </span>
            <button
                onClick={() => handlePageChange("next")}
                disabled={filters.page === data?.totalPages}
                className=" rounded-md  bg-primary px-[16px] py-[8px] text-white  disabled:opacity-50 dark:bg-slate-600"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;