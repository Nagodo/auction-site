import DefaultListing from "@/components/Product-Listing/default";
import { IListing } from "@/interfaces/IListing";

interface ListingsProps {
    queryKeywords: string[];
}

const Listings = async ({queryKeywords}: ListingsProps) => {
	
    async function fetchListings() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/listings`, {
            method: 'POST',
            body: JSON.stringify({keywords: queryKeywords}),
        });

        if (response.ok) {
            const data = await response.json();
            
            return data.listings;
        }
    }

    let listings: IListing[] = await fetchListings();
    
    if (listings === undefined) {
        listings = [];
    }

	return (
        
        <div className='listings'>
            {listings.map((listing: IListing, index) => {
                return (
                    <div className='listing' key={index}>
                        <DefaultListing title={listing.title} description = {listing.description} />
                    </div>
                )
            })}
            
        </div>
      
	)
}

export default Listings;