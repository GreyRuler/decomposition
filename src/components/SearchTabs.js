/**
 * Компонент для фильтрации поиска
 * @returns {*}
 * @constructor
 */
export default function SearchTabs({ tabs = [] }) {
	return (
		<div className='search-tabs'>
			{tabs}
		</div>
	)
}
