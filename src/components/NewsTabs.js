import CurrencyRate from './CurrencyRate';

/**
 * Компонент для вкладок с новостями
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function NewsTabs({ children }) {
	return (
		<div className='news-tabs'>
			{children}
			<span className='date'></span>
			<CurrencyRate />
		</div>
	)
}
