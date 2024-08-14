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

const ListingPage = ({params}: ListingPageProps) => {
    return (
        <div className="listingpage bg-zinc-50">
			<Header />

			<div className="content">

                <div className="basic-information">
                    <div className="title">
                        <h1>Iphone macbook pro 15 512gb og en sej lort pg Iphone macbook pro 15 512gb og en sej</h1>
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
    "/images/testimage1.jpg",
    "/images/testimage2.jpeg",
    "/images/testimage3.jpg",
    "/images/testimage4.png",
    "/images/testimage5.jpg",
]