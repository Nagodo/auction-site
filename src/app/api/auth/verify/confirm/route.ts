import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    
    const requestBody = await request.json();
    const { token } = requestBody;
    
    const user = await prisma.user.findFirst({
        where: {
            verifyToken: token,
            verifyTokenExpires: {
                gte: new Date(),
            },
        },
    });

    if (!user) {
        return NextResponse.json({
            error: "Invalid or expired token",
        });
    }

    user.emailVerified = true;
    user.verifyToken = null;
    user.verifyTokenExpires = null;
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: user,
    });

    return NextResponse.json({
        message: "Email verified successfully",
        success: true,
    });
}