import { config } from "@/config";
import { JobResponse } from "@/types/custom/job";
import { filterEmptyValues } from "@/util";
import axios from "axios";

export const getAllFiltered = async (query?: any):Promise<JobResponse> => {
  const params= filterEmptyValues(query.queryKey[1])
    const { data } = await axios.get(`${config()}/jobs`,{
      params
    }
  );
    return data;
  };
  export const getAll = async ():Promise<JobResponse> => {
    const { data } = await axios.get(`${config()}/jobs`);
    return data;
  };
