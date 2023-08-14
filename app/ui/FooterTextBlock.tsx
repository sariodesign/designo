interface FooterTextProps {
	firstTextRow: string,
	otherTextRows: string[]
}

export function FooterText({...props}: FooterTextProps) {
	return (
		<div className="text-white opacity-50 mb-10 text-[16px] leading-[26px] sm:mb-0 sm:text-left">
			<p>
				<strong>{props.firstTextRow}</strong>
			</p>
			{props.otherTextRows && props.otherTextRows.map((row, index) => (
				<p key={index}>{row}</p>
			))}
		</div>
	)
}
