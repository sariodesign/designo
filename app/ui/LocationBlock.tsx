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
	lastItem?: boolean
}

export function Location({...props}:LocationProps) {
	
	
	return (
		<div className={props.lastItem ? `flex flex-col bg-very-light-peach mb-[311px]` : `bg-very-light-peach flex flex-col mb-10`}>
			<picture>
				{props.mapImage.responsive && <source srcSet={props.mapImage!.responsive?.tablet} media="(min-width: 768px)" /> }
				<img {...props.mapImage} />
			</picture>
			<div className="py-20 px-6 text-center">
				<h3 className="capitalize leading-[36px] mb-6 text-[32px] text-peach">{props.place}</h3>
				{props.info.map((item,index, arr) => (
					<div key={index} className={arr.length - 1 === index ? `text-[15px] leading-[25px]`: `text-[15px] leading-[25px] mb-6`}>
						<h3 className="capitalize font-bold">{item.heading}</h3>
						{item.text.map((p,i,arr) => <p key={i} >{p}</p>)}
					</div>
				))}
			</div>
			
		</div>
	)
}