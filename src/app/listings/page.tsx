import '@/style/listings.scss'
import Header from '@/components/Header/header'
import React, { Suspense } from 'react'
import Listings from './listings';
import { TextToKeywords } from '@/helpers/keywordGenerator';
import Filter from './filter/filter';

async function ListingsPage({ searchParams }: any) {
	
	let query = searchParams.query;

	if (!query) {
		query = '';
	}

	const searchKeywords = TextToKeywords([query]);
	
	return (
		<div className="listingspage">
			<Header />

			<div className="content">
				<Filter />

				<Suspense fallback={<div>Loading...</div>}>
					<Listings queryKeywords={searchKeywords} />
				</Suspense>
			</div>
		</div>
	)
}

export default ListingsPage;