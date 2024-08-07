"use client"

import { FormEvent, useState } from "react";
import { ListingFormData } from "./ListingFormData";
import SelectListingType from "./select-listing-type";
import { ListingType } from "@enums/ListingType";
import NewAuctionForm from "./forms/AuctionForm";
import NewSaleForm from "./forms/SaleForm";
import { useRouter } from "next/navigation";

export default function NewListingForm() {

    const router = useRouter();
    const [listingData, setListingData] = useState<ListingFormData>(new ListingFormData());

    function handleTypeSelected(type: ListingType) {
        setListingData({
            ...listingData,
            listingType: type,
            hasSelectedListingType: true
        });
    }

    const handleFormSubmitted = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
 
        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/newlisting', {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {
            const data = await response.json();
            router.push(`/listings/${data.listingId}`);
        }
    }
    

    function GetForm() {
        
        if (listingData.listingType === ListingType.Sale) { 
            return (
                <NewSaleForm onSubmit={handleFormSubmitted} />
            )
        }


        if (listingData.listingType === ListingType.Auction) { 
            return (
                <NewAuctionForm />
            )
        }

    }
    
    if (!listingData.hasSelectedListingType) {
        return (
            <SelectListingType handleTypeSelected={handleTypeSelected} />
        )
    }

    
    return (
        <div className="new-listing-form">
            <h1>Opret ny annonce</h1>

            <div className="form">
                {GetForm()}
            </div>

            <div>

            </div>

        </div>
    );
}