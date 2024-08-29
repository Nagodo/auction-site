import "@/style/listingpage.scss"
import Header from "@/components/Header/header"
import ImageGroup from "@/components/ListingSite/imagegroup"
import SellerInfo from "@/components/ListingSite/SellerInfo/seller-info"
import { Suspense } from "react"
import LoadingSellerInfo from "@/components/ListingSite/SellerInfo/loadingSellerInfo"

interface ListingPageProps {
    params: {
        id: string
    }
}

const ListingPage = async ({params}: ListingPageProps) => {

    const listingId = params.id

    const fetchListing = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/listings/${listingId}`, {
            method: 'POST',
            body: JSON.stringify({id: listingId}),
        });

        if (response.ok) {
            const data = await response.json()
            return data
        }

        return null
        
    }

    const listing = await fetchListing()
    console.log(listing)

    return (
        <div className="listingpage">
			<Header />

			<div className="content">

                <div className="basic-information">
                    <div className="title">
                        <h1>{listing.data.title}</h1>
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