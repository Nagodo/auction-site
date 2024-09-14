import "@/style/listingpage.scss"
import Header from "@/components/Header/header"
import ImageGroup from "@/components/ListingSite/imagegroup"
import SellerInfo from "@/components/ListingSite/SellerInfo/seller-info"
import { Suspense } from "react"
import LoadingSellerInfo from "@/components/ListingSite/SellerInfo/loadingSellerInfo"
import prisma from "@/lib/prisma"

interface ListingPageProps {
    params: {
        id: string
    }
}

const ListingPage = async ({params}: ListingPageProps) => {

    const listingId = params.id

    const fetchListing = async (id: string) => {
        "use server"
        const listingId = parseInt(id);

        if (!listingId) return null;
        
        // Fetch listing from database
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            }
        });

        if (!listing) return null;


        return listing;  
    }

    const listing = await fetchListing(listingId)
    console.log(listing)

    if (listing === null) { 
        return <div>Listing not found</div>
    }

    return (
        <div className="listingpage">
			<Header />

			<div className="content">

                <div className="basic-information">
                    <div className="title">
                        <h1>{listing.title}</h1>
                    </div>

                    <div className="seller-info-container">
    
                        <Suspense fallback = {<LoadingSellerInfo/>}>
                            <SellerInfo sellerId={1} />
                        </Suspense>
                    </div>
                </div>



				<div className="image-group-container">
                    <ImageGroup images = {testImages} />
                </div>
				
			</div>
		</div>
    )
}

export default ListingPage


const testImages = [
    "/images/testimage1.webp",
    "/images/testimage1.webp",
    "/images/testimage1.webp",
    "/images/testimage1.webp",
    "/images/testimage1.webp",
]