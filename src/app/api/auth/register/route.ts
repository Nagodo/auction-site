import { hashPassword } from "@/lib/encryption";
import prisma from "@/lib/prisma";
import { RegisterError } from "@enums/RegisterError";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {

    try {
        const formData = await request.formData();
        
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
            return NextResponse.json({
                error: RegisterError.InvalidData,
            });
        }

        if (!email.includes("@")) {
            return NextResponse.json({
                error: RegisterError.InvalidData,
            });
        }   

        if (password.length < 8) {
            return NextResponse.json({
                error: RegisterError.InvalidData,
            });
        }
        
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return NextResponse.json({
                error: RegisterError.UserAlreadyExists,
            });
        }

        const hashedPassword = await hashPassword(password);

        await prisma.user.create({
            data: {
                email: email,
                name: "Din mor navn",
                password: hashedPassword,
            },
        });

        return NextResponse.json({
            success: true,
        });
        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
        });
    }
}