'use client'

import { SectionLink, SectionLinkProps } from "./SectionLink"

export function Sections({links}:{links: SectionLinkProps[]}) {
	if(!links.length) return null;

	return (
		<div className="px-6 sm:px-0 gap-y-6 mb-[120px] section">
			{ links.map((item, index) => (
				<SectionLink key={index} {...item} />			
			))}
		</div>
	)
}