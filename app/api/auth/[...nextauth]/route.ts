import NextAuth from "next-auth/next";
import { AuthOptions } from "./action";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };