'use client'

import { InfoBlock, InfoBlockProps } from "./InfoBlock";

export function InfoContent({contents}:{contents:InfoBlockProps[]}) {
	if (!contents.length) return null;

	return (
		<div className="flex flex-col gap-y-20 mb-[311px] px-6">
			{contents.map((content) => (
				<InfoBlock key={content.name} {...content} />
			))}
		</div>
	)
}
