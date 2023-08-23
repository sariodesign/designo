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
		<div className={props.lastItem ? `flex flex-col ${props.gap} px-6 mb-[350px] md:px-0 md:flex-row md:justify-between md:relative md:z-10` : `flex flex-col ${props.gap} px-6 py-[120px] md:px-0 md:flex-row md:justify-between md:py-[160px] md:relative md:z-10`}>
			{props.contents.map((content) => (
				<InfoBlock key={content.name} {...content} />
			))}
		</div>
	)
}
