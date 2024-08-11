import { FormatPrice } from "@/helpers/priceFormatter";
import "./style/featured.scss"
import Link from 'next/link'

interface FeaturedListingProps {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

const FeaturedListing = ({id, title, thumbnail, price}: FeaturedListingProps) => {
    return (
        <Link href={"/listings/" + id}>
            <div className="featuredListing">
            
                <img src={thumbnail}></img>
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="price">{FormatPrice(price)}</p>
                </div>
                
            </div>
        </Link>
        
    )
}

export default FeaturedListing;