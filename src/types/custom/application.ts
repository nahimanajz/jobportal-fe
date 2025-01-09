import * as yup from "yup"
import { User } from "./user";
import { Job } from "./job";

export const ApplicationSchema = yup.object({
  userId: yup.string().optional(),
  jobId: yup.string().required(),
  jobTitle: yup.string().optional(),
  status:yup.string().default("Pending"),
});

export type Application = yup.InferType<typeof ApplicationSchema> & {
  id?:string,
  dateApplied?:string,
  status?: "Pending"|"Reviewed"|"Offered"|string,

};

export type ApplicationResponse = {
    user: User,
    job: Job
    status: "Pending"| "Reviewed"| "Offered" | string,
    id: string,
    dateApplied: Date | any
} 