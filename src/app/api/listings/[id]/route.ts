
import { IListing } from "@/interfaces/IListing";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {

    try {
        if (!request.body) {
            return NextResponse.json({
                message: "No body"
            });
        }

        const data = await request.json();
        const listingId = parseInt(data.id);

        if (!listingId) {
            return NextResponse.json({
                message: "No id"
            });
        }

        // Fetch listing from database
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            }
        });

        if (!listing) {
            return NextResponse.json({
                message: "No listing"
            });
        }

        return NextResponse.json({
            data: listing
        });
        

    } catch (error) {
        return NextResponse.json({
            message: "Error1"
        });
    }
}