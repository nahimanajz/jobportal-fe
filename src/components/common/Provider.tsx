"use client"

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IProvider } from "@/types/IProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const queryClient = new QueryClient();

export function Provider({ children, isSignedIn }: IProvider) {

    return (
      <>
      <ToastContainer />
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
      </>
    );
  
}
