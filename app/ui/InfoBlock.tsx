'use client'

import Image from 'next/image'
import Link from 'next/link'

interface InfoBlockCtaProps {
	label: string,
	href: string
}

export interface InfoBlockProps {
	imageSrc: string,
	name: string,
	bgGradient: string,
	text?: string,
	btn?: InfoBlockCtaProps
}

export function InfoBlock({...props}: InfoBlockProps) {
	return (
		<div className="text-center">
			<div className={`w-[202px] h-[202px] rounded-[50%] mb-12 mx-auto ${props.bgGradient} `}>
				<Image
					src={props.imageSrc}
					alt={props.name}
					width={202}
					height={202}
				/>
			</div>
			<h3 className="mb-8 uppercase">{props.name}</h3>
			{props.text && <p>{props.text}</p>}
			{props.btn && <Link href={props.btn.href}>{props.btn.label}</Link>}
		</div>
	)
}