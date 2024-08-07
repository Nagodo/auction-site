import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { EmailType } from "@enums/EmailType";
import { SendEmail } from "@/helpers/mailer";
import { getServerSession } from "next-auth";
import { generateVerifyToken } from "@/lib/encryption";

// When the user click the verify button on the verify page
export async function POST(request: NextRequest, response: NextResponse) {
 
    try {

        const session = await getServerSession();

        if (!session) {
            return NextResponse.json({
                error: "",
            });
        }

        if (!session.user || !session.user.email) {
            return NextResponse.json({
                error: "",
            });
        }

        const user = await prisma.user.findFirst({
            where: {
                email: session.user.email,
            },
        });

        if (!user) {
            return NextResponse.json({
                error: "User not found",
            });
        }

        const hashedToken = await generateVerifyToken(user.id);

        //TODO: Seperate User table with a new table for verification tokens
        await prisma.user.update({
            where: { id: user.id, email: user.email },
            data: {
                verifyToken: hashedToken,
                verifyTokenExpires: new Date(Date.now() + 3600000), // 1 hour
            },
        });

        await SendEmail(user.email, EmailType.VERIFY, user.id, hashedToken);

        return NextResponse.json({
            message: "Email sent successfully",
            success : true
        });
        
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({
            error: error.message,
        });
    }

}