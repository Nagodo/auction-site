import { TextToKeywords } from "@/helpers/keywordGenerator";
import { IListing } from "@/interfaces/IListing";
import { ListingType } from "@/enums/ListingType";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";


const RESULTS_PER_PAGE = 20;

export async function POST(request: NextRequest, response: NextResponse) {
    let listingsData: IListing[] = []; 

    try {
        if (!request.body) {
            return NextResponse.json({
                message: "No body"
            });
        }

        const data = await request.json();

        //KEYWORD SEARCH
        const keywords = data.keywords;
        const keywordListings = await prisma.listing.findMany({
            where: {
                OR: keywords.map((keyword: string) => {
                    return {
                        keywords: {
                            has: keyword
                        }
                    }
                })
            },
            take: RESULTS_PER_PAGE
        });

        keywordListings.forEach((listing) => {
            listingsData.push({
                id: listing.id,
                title: listing.title,
                price: listing.price,
                description: listing.description,
                image: "https://via.placeholder.com/150",
                type: ConvertType(listing.type)
            });
        });

    } catch (error) {
        return NextResponse.json({
            message: "Error1"
        });
    }

    try {

        //REMAINING LISTINGS
        if (listingsData.length < RESULTS_PER_PAGE) {
            const remainingListings = await prisma.listing.findMany({
                where: {
                    NOT: {
                        OR: listingsData.map((listing) => {
                            return {
                                id: listing.id
                            }
                        })
                    },
                },
                take: RESULTS_PER_PAGE - listingsData.length,
            });

            remainingListings.forEach((listing) => {
                listingsData.push({
                    id: listing.id,
                    title: listing.title,
                    price: listing.price,
                    description: listing.description,
                    image: "https://via.placeholder.com/150",
                    type: ConvertType(listing.type)
                });
            });
        }
        console.log("6");
        return NextResponse.json({
            listings: listingsData
        });

    } catch (error) {

        return NextResponse.json({
            message: "Error2"
        });
    }
}

function ConvertType(type: string): ListingType {
    if (type === "Sale") {
        return ListingType.Sale;
    } else if (type === "Auction") {
        return ListingType.Auction;
    }

    return ListingType.Sale;
}