import "@/style/listingpage.scss"
import Header from "@/components/Header/header"
import ImageGroup from "@/components/Listing/imagegroup"

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