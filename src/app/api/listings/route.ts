import { TextToKeywords } from "@/helpers/keywordGenerator";
import { IListing } from "@/interfaces/IListing";
import { ListingType } from "@/enums/ListingType";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";


const RESULTS_PER_PAGE = 20;

export async function POST(request: NextRequest, response: NextResponse) {

    try {
        if (!request.body) {
            return NextResponse.json({
                message: "No body"
            });
        }

        const data = await request.json();

    
        let listingsData: IListing[] = []; 
    
        // KEYWORD SEARCH
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

        return NextResponse.json({
            listings: listingsData
        });

    } catch (error) {
       
        return NextResponse.json({
            message: "Error"
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