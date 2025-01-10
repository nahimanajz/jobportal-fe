import { config } from "@/config";
import { Application, ApplicationResponse } from "@/types/custom/application";
import { filterEmptyValues } from "@/util";
import  axiosConfig  from "@/util/axios-config";

export const getAll = async (query?:any):Promise<ApplicationResponse | any> => {
    const params= filterEmptyValues(query.queryKey[1])
    const { data } = await axiosConfig.get(`${config()}/applications`, {params});
    return data;
  };
  export const create = async (application: Application):Promise<Application> => {
    const { data } = await axiosConfig.post(`${config()}/applications`, application);
    return data;
  };
  export const update = async ({id, status}: Application):Promise<Application> => {
    const { data } = await axiosConfig.patch(`${config()}/applications/${id}`, {status});
    return data;
  };
  export const deleteApplication = async (id: string):Promise<Application> => {
    const { data } = await axiosConfig.delete(`${config()}/applications/${id}`);
    return data;
  };