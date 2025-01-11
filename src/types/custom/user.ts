import * as yup from "yup"

export const UserSchema= yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    role: yup
    .string()
    .required("Role is required")
    .oneOf(["Admin", "Applicant"], "Role must be either Admin or Applicant")
})
export const UserLoginSchema= yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
})


export type User = yup.InferType<typeof UserSchema> & {
    id?:string
};
export type UserLogin = yup.InferType<typeof UserLoginSchema>;

