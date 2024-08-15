import '@/style/listings.scss'
import Header from '@/components/Header/header'
import React from 'react'
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

				<Listings queryKeywords={searchKeywords} />

			</div>
		</div>
	)
}

export default ListingsPage;