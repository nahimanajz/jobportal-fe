import { config } from "@/config";
import { CategoryResponse, JobResponse } from "@/types/custom/job";
import { filterEmptyValues } from "@/util";
import axiosConfig from "@/util/axios-config";
import axios from "axios";

export const getAllFiltered = async (query?: any):Promise<JobResponse> => {
  const params= filterEmptyValues(query.queryKey[1])
    const { data } = await axios.get(`${config()}/jobs`,{
      params
    }
  );
    return data;
  };
  export const getAll = async (category?:any):Promise<JobResponse> => {
    const value =  category.queryKey[1]
    const { data } = await axios.get(`${config()}/jobs?category=${value}`);
    return data;
  };
  export const getCategories = async ():Promise<CategoryResponse[]> => {
    const { data } = await axiosConfig.get(`${config()}/jobs/categories`);
    return data;
  };
