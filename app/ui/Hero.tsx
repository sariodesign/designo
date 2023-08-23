'use client'

import { Btn, BtnVariant } from './Btn'

export interface ctaLink {
	label: string,
	href: string,
	variant: BtnVariant
}

interface imageItem {
	src: string,
	alt: string,
	width: number
	height: number
}

interface HeroProps {
	title: string,
	subtitle: string,
	cta?: ctaLink,
	image?: imageItem,
}

export function Hero({...props}: HeroProps) {
	
	const heroCls = `bg-peach bg-no-repeat text-white text-center mb-[120px] md:mb-[160px] relative z-10 py-[105px] sm:py-[64px] sm:h-[252px] sm:rounded`
	const heroWithImageCls = "bg-peach bg-hero-pattern bg-no-repeat text-center text-white h-[843px] mb-[120px] md:mb-[160px] relative z-10 sm:bg-[100px_-100px] md:bg-[top_right] md:h-[640px] pt-20 px-6 overflow-hidden sm:rounded sm:px-[58px] sm:pt-[60px] md:text-left md:flex md:justify-between md:items-start md:pt-[145px] md:px-[95px]"

	return (
		<div className={props.image ? `${heroWithImageCls}` : `${heroCls}` }>
			<div className={props.image ? `mb-20` : `flex flex-col items-center justify-center`}>
				<h1 className="mb-3.5 text-title-base font-medium sm:text-title-sm md:w-[540px]">{props.title}</h1>
				<h2 className={`text-subtitle sm:w-[445px] sm:mx-auto md:mr-0 md:ml-0 ${props.cta && "mb-6"}`}>{props.subtitle}</h2>
				{props.cta && <Btn {...props.cta} />}
			</div>
			{props.image && <img className="mx-auto" {...props.image} />}
		</div>
	)

}