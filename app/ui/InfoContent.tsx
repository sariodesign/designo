'use client'

import { InfoBlock, InfoBlockProps } from "./InfoBlock";

interface InfoContentProps {
	contents: InfoBlockProps[],
	gap: string,
	lastItem?: boolean
}

export function InfoContent({...props}:InfoContentProps) {
	if (!props.contents) return null;

	return (
		<div className={props.lastItem ? `flex flex-col ${props.gap} px-6 mb-[311px] md:px-0 md:flex-row` : `flex flex-col ${props.gap} px-6 py-[120px] md:px-0 md:flex-row`}>
			{props.contents.map((content) => (
				<InfoBlock key={content.name} {...content} />
			))}
		</div>
	)
}
