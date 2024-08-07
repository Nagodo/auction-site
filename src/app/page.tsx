"use client"
import "./style/home.scss";
import Header from "@/components/Header/header";
import FeaturedListing from "@/components/Product-Listing/featured";
import { IListing } from "@/interfaces/IListing";
import { useEffect, useState } from "react";

export default function Home() {
	const [featuredListings, setFeaturedListings] = useState<IListing[]>();

	const fetchFeaturedProducts = async () => {
		try {
			const response = await fetch("api/featured-listings", {
				method: "GET",
			});

			if (response.ok) {
				const data = await response.json();
				setFeaturedListings(data.products);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchFeaturedProducts();
	}, []);

	return (
		<div className="home">
			<Header />

			<div className="content">
				<div className="featured-listings">

					{featuredListings && featuredListings.map((product: IListing, index: number) => (
						
						<div className="listing" key={index}>
							<FeaturedListing title = {product.title}/>
						</div>
						
					))}
					
				</div>
			</div>
			
		</div>
	);
}
