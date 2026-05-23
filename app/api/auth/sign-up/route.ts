import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import argon2 from "argon2";
import { SignUpSchema } from "@/validations/SignUpSchema";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, email, password } = SignUpSchema.parse(body);

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: "Email already in use" }, { status: 400 });
        }
        const hashedPassword = await argon2.hash(password);
        const user = await prisma.user.create({
            data: {
                email,
                name: username,
                password: hashedPassword
            }
        });
        return NextResponse.json({ message: "User created successfully", userId: user.id }, { status: 201 });
    }
    catch (error) {
        console.error("Error during sign-up:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}