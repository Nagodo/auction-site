import { authConfig } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { list, ListCommandOptions } from '@vercel/blob';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request, response: NextResponse) {

    const session = await getServerSession(authConfig);

    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({
            message: "No valid session"
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        },
        select: {
            profileImage: true,
        }
    });

    if (!user) {
        return NextResponse.json({
            message: "No valid user"
        });
    }

    return NextResponse.json({
        profileImagePath: user.profileImage
    });
}