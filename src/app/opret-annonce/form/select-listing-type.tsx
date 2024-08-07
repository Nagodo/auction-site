import { ListingType } from "@enums/ListingType";
import React, { ReactNode } from "react";
import { CiShop } from "react-icons/ci";
import { RiAuctionLine } from "react-icons/ri";

interface SelectListingTypeProps {
    handleTypeSelected: (type: ListingType) => void;
}

export default function SelectListingType({handleTypeSelected}: SelectListingTypeProps) {

    function handleClick(type: ListingType) {
        handleTypeSelected(type);
    }

    return (
        <div className="select-listing-type">
            
            <ListingTypeBtn icon={<><CiShop/></>} label="Normalt salg" listingType={ListingType.Sale} onClick={handleClick}/>
            <ListingTypeBtn icon={<><RiAuctionLine/></>} label="Auktion" listingType={ListingType.Auction} onClick={handleClick}/>
        </div>
    )
}

interface ListingTypeBtnProps {
    icon: ReactNode;
    label: string;
    listingType: ListingType;
    onClick: (type: ListingType) => void;
}

function ListingTypeBtn({icon, label, listingType, onClick}: ListingTypeBtnProps) {

    function handleClick() {
        onClick(listingType);
    }

    return (
        <div className="type shadow-2xl bg-zinc-100" onClick={handleClick}>
            <div className="icon text-zinc-300">
                {icon}
            </div>
            <div className="label">
                {label}
            </div>
        </div>
    )
}