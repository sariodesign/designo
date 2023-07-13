
import { Btn } from './Btn'
import { ctaLink } from './Hero'

interface CtaProps {
	title: string,
	subtitle: string,
	ctaBtn: ctaLink
}

export function Cta({...props}: CtaProps) {
	return (
		<section className="px-6 relative">
			<div className="absolute translate-y-[-189px] w-col-absolute bg-peach flex flex-col items-center py-16 px-6 rounded-[15px] text-center text-white">
				<h3 className="text-[32px] leading-[36px] mb-4">{props.title}</h3>
				<p className="text-[15px] leading-[25px] mb-8">{props.subtitle}</p>
				{props.ctaBtn && <Btn {...props.ctaBtn}/>}
			</div>
		</section>
	)
}