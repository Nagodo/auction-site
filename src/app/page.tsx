import "./style/home.scss";
import Header from "@/components/Header/header";
import FeaturedListings from "./_home/featured-listings";

export default function Home() {
	

	return (
		<div className="home">
			<Header />

			<div className="content">
				<FeaturedListings />
			</div>
			
		</div>
	);
}
