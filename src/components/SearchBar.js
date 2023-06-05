import SearchTabs from './SearchTabs';

/**
 *
 * @returns {*}
 * @constructor
 */
export default function SearchBar() {
	return (
		<div className='search-bar'>
			<SearchTabs />
			<div className='search'></div>
			<div className='search-example'></div>
		</div>
	)
}
