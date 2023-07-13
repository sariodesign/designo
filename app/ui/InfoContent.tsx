'use client'

import { InfoBlock, InfoBlockProps } from "./InfoBlock";

export function InfoContent({contents}:{contents:InfoBlockProps[]}) {
	if (!contents.length) return null;

	return (
		<div className="mb-[120px] px-6">
			{contents.map((content) => (
				<InfoBlock key={content.name} {...content} />
			))}
		</div>
	)
}
