import * as yup from "yup";

export const JobSchema = yup.object({
  title: yup.string().required(),
  category: yup.string().required().email(),
  location: yup.string().required(),
  description: yup.string().required(),
});

export type Job = yup.InferType<typeof JobSchema> & {
  id?: string;
  datePosted?: string;
};

export type JobResponse = {
  jobs: Job[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
};
export type CategoryResponse = {
  category: string;
};
