import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request: Request) => {
    const userData = await prisma.user.findMany();
    return NextResponse.json({ message: "Hello, World!", data : userData });
}