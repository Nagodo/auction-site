import { ListingType } from "@enums/ListingType";

export class ListingFormData {

    hasSelectedListingType: boolean;
    listingType?: ListingType;

    constructor() {
        this.hasSelectedListingType = false;
    }
    
}