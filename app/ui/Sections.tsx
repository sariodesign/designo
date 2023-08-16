'use client'

import { SectionLink, SectionLinkProps } from "./SectionLink"

export function Sections({links, lastItem}:{links: SectionLinkProps[], lastItem?: boolean}) {
	if(!links.length) return null;

	let mbClass = lastItem ? 'mb-[311px]' : 'mb-[120px]'

	return (
		<div className={`px-6 sm:px-0 gap-y-6 section ${mbClass}`}>
			{ links.map((item, index) => (
				<SectionLink key={index} {...item} />			
			))}
		</div>
	)
}