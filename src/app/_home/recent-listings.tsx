import FeaturedListing from "@/components/Product-Listing/featured";
import { IListing } from "@/interfaces/IListing";

const MostRecentListings = async () => {

    const fetchRecentProducts = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/recent-listings`, {
				method: "GET",
			});

			if (response.ok) {
				const data = await response.json();
                return data.listings;
			}
		} catch (error) {
			console.error(error);
            return [];
		}
	}

    const listings: IListing[] = await fetchRecentProducts();

    return (
        <div className="recent-listings">
            <div className="title">
				<p>Seneste opslag</p>
			</div>


            <div className="listings">
                {listings && listings.map((listing: any, index: number) => (
                    <div className="listing" key={index}>
                        <FeaturedListing id = {listing.id} title = {listing.title} thumbnail="/images/testimage1.webp" price={1999}/>
                    </div>
                ))}
            </div>

           
        </div>
    )
}

export default MostRecentListings;