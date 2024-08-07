import { TextToKeywords } from "@/helpers/keywordGenerator";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";



export async function POST(request: NextRequest, response: NextResponse) {

    try {
        const formData = await request.formData();
        
        const title = formData.get("title") as string;

        const price = formData.get("price") as string;
        const parsedPrice = parseInt(price);

        const description = formData.get("description") as string;

        // Generate keywords
        const generatedKeywords = TextToKeywords([title, description]);

        const newListing = await prisma.listing.create({
            data: {
                title: title as string,
                price: parsedPrice as number,
                description: "This is a new listing",
                keywords: generatedKeywords
            }
        });

        return NextResponse.json({
            listingId: newListing.id
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Error"
        });
    }
}