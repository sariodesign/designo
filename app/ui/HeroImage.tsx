'use client'

interface responsiveImage {
	tablet: string,
	desktop: string
}

interface imageItem {
	src: string,
	alt: string,
	width: number
	height: number,
	responsive?: responsiveImage
}

interface HeroProps {
	title: string,
	subtitle: string,
	image?: imageItem
}

export function HeroImage({...props}: HeroProps) {

	return (
		<div className="bg-peach bg-hero-pattern bg-no-repeat flex flex-col overflow-hidden text-center text-white [ sm:bg-[100px_-100px] sm:rounded sm:mb-[120px] ] [ md:bg-[top_right] md:text-left md:flex md:flex-row-reverse md:justify-between md:items-center ]">
			<picture className="md:max-w-[476px]">
				<source srcSet={props.image!.responsive?.desktop} media="(min-width: 1024px)" />
				<source srcSet={props.image!.responsive?.tablet} media="(min-width: 768px)" />
				<img className="mx-auto" {...props.image} />
			</picture>
			<div className="text-center py-20 px-8 sm:py-16 sm:px-[58px] md:max-w-[458px] md:text-left md:px-0 md:pl-[95px]">
				<h1 className="mb-3.5 text-title-base font-medium sm:text-title-sm sm:mb-8 md:w-[540px]">{props.title}</h1>
				<h2 className="text-subtitle sm:w-[445px] sm:mx-auto md:mr-0 md:ml-0">{props.subtitle}</h2>
			</div>
		</div>
	)

}