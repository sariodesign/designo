'use client'

import Image from 'next/image'
import { Btn, BtnProps, BtnVariant } from './Btn'

export interface InfoBlockProps {
	imageSrc: string,
	name: string,
	bgGradient: string,
	text?: string,
	btn?: BtnProps
}

export function InfoBlock({...props}: InfoBlockProps) {
	return (
		<article className="text-center sm:flex sm:text-left sm:gap-x-12 sm:items-center">
			<div className={`w-[202px] h-[202px] rounded-[50%] mb-12 mx-auto ${props.bgGradient} sm:flex-none sm:mb-0`}>
				<Image
					src={props.imageSrc}
					alt={props.name}
					width={202}
					height={202}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div>
				<h3 className="mb-8 uppercase sm:mb-4">{props.name}</h3>
				{props.text && <p>{props.text}</p>}
				{props.btn && <Btn {...props.btn} />}
			</div>
		</article>
	)
}