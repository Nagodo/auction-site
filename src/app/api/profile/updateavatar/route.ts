import { authConfig } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { del, list, ListCommandOptions, put } from '@vercel/blob';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request, response: NextResponse) {

    if (!request.body) {
        return NextResponse.json({
            message: "No body"
        });
    }

    const formData = await request.formData();
    const imageFile = formData.get("image") as File;
    const oldImageUrl = formData.get("oldImage") as string;

    if (!imageFile) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
      }


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
            id: true,
            profileImage: true
        }
    });

    if (!user) {
        return NextResponse.json({
            message: "No valid user"
        });
    } 

    if (oldImageUrl) {
        const response = await del(oldImageUrl);
    }

    const blob = await put("avatars/" + user.id.toString() + "/" + imageFile.name, imageFile, {
        access: 'public',
    });

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            profileImage: blob.url
        }
    });

    return NextResponse.json({
        blobUrl: blob.url
    });
   
}