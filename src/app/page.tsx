import "./style/home.scss";
import Header from "@/components/Header/header";
import FeaturedListings from "./_home/featured-listings";
import MostRecentListings from "./_home/recent-listings";
import { Suspense } from "react";

export default async function Home() {
	

	return (
		<div className="home">
			<Header />

			<div className="content">


				<div className="home-listings">
					{/* <Suspense>
						<FeaturedListings />
					</Suspense> */}

					
					<Suspense>
						<MostRecentListings />
					</Suspense>
					<Suspense>
						<MostRecentListings />
					</Suspense>
				</div>

				
			</div>
			
		</div>
	);
}
