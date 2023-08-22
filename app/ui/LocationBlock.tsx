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

interface LocationInfoProps {
	heading: string,
	text: string[]
}

interface LocationProps {
	mapImage: imageItem,
	place: string,
	info: LocationInfoProps[]
	lastItem?: boolean,
	reverse?: boolean
}

export function Location({...props}:LocationProps) {
	
	let flowClass = props.reverse ? 'flex-row' : 'flex-row-reverse' 
	
	return (
		<div className={props.lastItem ? ` flex flex-col sm:gap-y-8 mb-[311px] md:${flowClass} md:gap-x-8` : `flex flex-col sm:gap-y-8 mb-10 sm:mb-[120px] md:${flowClass} md:gap-x-8`}>
			<picture className="overflow-hidden sm:rounded-[15px]">
				{props.mapImage.responsive?.desktop && <source srcSet={props.mapImage.responsive?.desktop} media="(min-width: 1024px)" /> }
				{props.mapImage.responsive?.tablet && <source srcSet={props.mapImage.responsive?.tablet} media="(min-width: 768px)" /> }
				<img {...props.mapImage} />
			</picture>
			<div className="bg-very-light-peach bg-three-circles py-20 px-6 text-center sm:bg-two-circles sm:rounded-[15px] sm:flex sm:items-end sm:gap-x-[30px] sm:text-left sm:py-[88px] sm:px-[75px] md:min-w-[730px]">
				{props.info.map((item,index, arr) => (
					<div key={index} className={arr.length - 1 === index ? `text-[15px] leading-[25px]`: `text-[15px] leading-[25px] mb-6 sm:mb-0`}>
						{index === 0 ? <h3 className="capitalize leading-[36px] mb-6 text-[32px] text-peach">{props.place}</h3> : ''}
						<h3 className="capitalize font-bold">{item.heading}</h3>
						{item.text.map((p,i,arr) => <p key={i} >{p}</p>)}
					</div>
				))}
			</div>
			
		</div>
	)
}