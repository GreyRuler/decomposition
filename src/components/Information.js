import InformationItem from './InformationItem';

/**
 * Компонент для дополнительной информации
 * @returns {JSX.Element}
 * @constructor
 */
export default function Information({ title, children, list = [] }) {
	return (
		<div className='information'>
			{children}
			<div className='title'>{title}</div>
			<div className='list'>{list.map((item) => (
				<InformationItem content={item.content} link={item.link}>
					{item.img}
				</InformationItem>
			))}</div>
		</div>
	)
}
