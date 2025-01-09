import { ReactNode } from "react";

export interface IProvider{
    children: ReactNode,
    isSignedIn?:boolean
}
export interface IJobQuery{
    queryParams:any
}