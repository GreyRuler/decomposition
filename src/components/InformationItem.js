export default function InformationItem({ children, content, link }) {
	return (
		<div className="information-item">
			{children}
			<span className='content'>{content}</span>
			<span className="link">{link}</span>
		</div>
	)
}
