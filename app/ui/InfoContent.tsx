'use client'

import { InfoBlock, InfoBlockProps } from "./InfoBlock";

interface InfoContentProps {
	contents: InfoBlockProps[],
	lastItem?: boolean
}

export function InfoContent({...props}:InfoContentProps) {
	if (!props.contents) return null;

	return (
		<div className={props.lastItem ? `flex flex-col gap-y-20 px-6 sm:gap-y-8 mb-[311px]` : `flex flex-col gap-y-20 px-6 sm:gap-y-8 py-[120px]`}>
			{props.contents.map((content) => (
				<InfoBlock key={content.name} {...content} />
			))}
		</div>
	)
}
