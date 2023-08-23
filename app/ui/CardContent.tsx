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

interface CardContentProps {
	title: string,
	text: string[],
	image?: imageItem,
	lastItem?: boolean 
}

export function CardContent({...props}:CardContentProps) {
	return (
		<article className={props.lastItem ? `bg-very-light-peach bg-three-circles bg-no-repeat bg-center mb-[311px] sm:overflow-hidden sm:rounded-[15px] md:flex md:flex-row-reverse md:items-center md:mb-[350px]` : `bg-very-light-peach bg-three-circles bg-no-repeat bg-center sm:overflow-hidden sm:rounded-[15px] md:flex md:items-center`}>
			<picture className="md:max-w-[476px]">
				<source srcSet={props.image!.responsive?.desktop} media="(min-width: 1024px)" />
				<source srcSet={props.image!.responsive?.tablet} media="(min-width: 768px)" />
				<img {...props.image} />
			</picture>
			<div className="text-dark-grey text-center py-20 px-6 md:px-[95px] md:py-0 md:text-left md:text-[16px] md:leading-[26px]">
				<h3 className="mb-6 text-[32px] leading-[36px] text-peach">{props.title}</h3>
				{props.text.map((content, index, arr) => { return (<p className={arr.length - 1 === index ? `` : `mb-9 md:mb-8`} key={index}>{content}</p>)})}
			</div>
		</article>
	)
}