import "./style/featured.scss"

interface FeaturedListingProps {
    title: string;
}

const FeaturedListing = ({title}: FeaturedListingProps) => {
    return (
        <div className="featuredListing">
            <img src="./images/logo.png"></img>
            <p>{title}</p>
        </div>
    )
}

export default FeaturedListing;