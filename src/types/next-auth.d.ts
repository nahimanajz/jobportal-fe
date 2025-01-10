// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

  interface Session {
    user: {
      role: string
      email:string
    } & DefaultSession["user"]
  }
  interface User {
    role: string
    email:string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email:string
    role: string
  }
}