import { login } from "@/app/services/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
  session: {strategy:"jwt"},
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@mydomain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }: any) {
        try {
          const user = await login({ email, password });
          return user.data;
          
        } catch (error) {
  
          return null
        }
        
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: any) {
      if (user) return true;
      return false;
    },
    async jwt({ token, user, account, profile }: any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user= user.data
        token.id = user.data.id;
      }
      return token;
    },

    async session({ session, token, user }: any) {
      
      const jwt = token as any;
      session.accessToken = jwt.accessToken;
      session.user = jwt.user;  
      return session;
    },
  },
  pages: {
    signIn: "auth/signin",
  },
  secret: "JustASecret"
};

export default NextAuth(authOptions);
