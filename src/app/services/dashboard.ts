import { config } from "@/config";
import { OvertimeResponse } from "@/types/IDashboardResponse";
import axiosConfig from "@/util/axios-config";

export const getApplicationOvertime = async (interval:any):Promise<OvertimeResponse> => {
    const intervalValue= interval.queryKey[1]
    const { data } = await axiosConfig.get(`${config()}/dashboard/applications/over-time?interval=${intervalValue}`);
    return data;
  };