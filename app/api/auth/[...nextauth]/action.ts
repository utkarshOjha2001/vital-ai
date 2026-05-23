import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";
import type { NextAuthOptions } from "next-auth";


export const AuthOptions: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req){
          if(!credentials?.email || !credentials.password){
            throw new Error("Invalid credentials");
          }

          const user = await prisma.user.findUnique({
            where:{
              email: credentials.email
            }
          })
          if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isVaildPassword = await argon2.verify(user.password, credentials.password);
        if (!isVaildPassword) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
          isVerified: user.isVerified
        }

      }
    })
  ],
 callbacks: {
    async jwt({token, user}){
      if(user){
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.isVerified = user.isVerified;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.isVerified = token.isVerified as boolean;
      }

      return session;
    },

 },

 pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};