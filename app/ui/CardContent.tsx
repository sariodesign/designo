
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
	text: string,
	image?: imageItem,
	lastItem?: boolean 
}

export function CardContent({...props}:CardContentProps) {
	return (
		<article className={props.lastItem ? `bg-very-light-peach mb-[311px]` : `bg-very-light-peach`}>
			<picture>
				<source srcSet={props.image!.responsive?.tablet} media="(min-width: 768px)" />
				<img {...props.image} />
			</picture>
			<div className="text-dark-grey text-center py-20 px-6">
				<h3 className="mb-6 text-[32px] leading-[36px] text-peach">{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</article>
	)
}