'use client'

import { SectionLink, SectionLinkProps } from "./SectionLink"

export function Sections({links}:{links: SectionLinkProps[]}) {
	if(!links.length) return null;

	return (
		<div className="flex flex-col px-6 gap-y-6 mb-[120px]">
			{ links.map((item, index) => (
				<SectionLink key={index} {...item} />
			))}
		</div>
	)
}