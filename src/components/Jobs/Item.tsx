import { Job } from "@/types/custom/job";
import { FC } from "react";

interface ItemProps {
    job: Job;
}

const Item: FC<ItemProps> = ({ job }) => {
    return (
        <div className="relative rounded-xl bg-white shadow-md">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2 font-bold text-xl font-bold"> Job: <span className="text-base font-normal">{job.title}</span></div>
                    <h3 className="font-bold text-xl font-bold">
                        Business Sector: <span className="text-base font-normal">{job.category}</span>
                    </h3>
                    <h3 className="font-bold text-xl font-bold">
                        City: <span className="text-base font-normal">{job.location}</span>
                    </h3>
                </div>
                <div className="mb-6">
                    <div className="text-gray-600 my-2 font-semibold text-lg"> Description:</div>
                    <h3 className="text-base">

                        {job.description}
                    </h3>
                </div>

                <h3 className="mb-2 text-green-500">
                    Posted at: {job.datePosted?.substring(0, 10)}
                </h3>

                <div className="border-gray-100 border"></div>

                <div className="mb-4 flex flex-col justify-between lg:flex-row">

                </div>
            </div>
        </div>
    );
};

export default Item;
