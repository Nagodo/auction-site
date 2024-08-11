import { ConvertListingType } from "@/helpers/listingTypeConverter";
import { IListing } from "@/interfaces/IListing";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    const recentListings = await prisma.listing.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 6
    });

    const listings: IListing[] = [];

    for (const listing of recentListings) {
        listings.push({
            id: listing.id,
            title: listing.title,
            price: listing.price,
            description: listing.description,
            image: "",
            type: ConvertListingType(listing.type)
        });
    }

    return NextResponse.json({
        listings: recentListings
    });

}