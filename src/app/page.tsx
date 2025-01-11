"use client"
import Insights from "@/components/Dashboard/Page";
import Vacancies from "./vacancies/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {status} = useSession()

  if(status === "authenticated") {
    return (
      <DefaultLayout>
        <Insights />
      </DefaultLayout>
    );
  }
  return <Vacancies />
  
}
