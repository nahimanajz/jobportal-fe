"use client";
import React, { useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/Layouts/PublicLayout";
import TextInput from "@/components/FormElements/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserLogin, UserLoginSchema } from "@/types/custom/user";
import * as Icon from "@/components/icons";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLogin> = async (credentials) => {
    try {
     const res= await signIn("credentials", {...credentials, redirect:false})
     console.log(res)
     if(res?.ok){
      router.push("/")
     }
      
    } catch (error) {
      console.log("the problem is ====>", error)
      toast.error("Invalid username or password");
    }
     //console.log("response", res)
    
     // router.push("/");
    
  };

  return (
    <PublicLayout title="Sign to Jobboard">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Email"
          name={"email"}
          register={register}
          errors={errors}
          svg={<Icon.EnvelopeIcon />}
        />
        <TextInput
          type="password"
          label="Password"
          name={"password"}
          register={register}
          errors={errors}
          svg={<Icon.LockIcon onClick={togglePassword} />}
        />

        <div className="mb-5">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>

        <div className="mt-6 text-center">
          <p>
            Don’t have any account?{" "}
            <Link href="/auth/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </PublicLayout>
  );
};

export default SignIn;
