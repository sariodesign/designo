
import { Btn } from './Btn'
import { ctaLink } from './Hero'

interface CtaProps {
	title: string,
	subtitle: string,
	ctaBtn: ctaLink
}

export function Cta({...props}: CtaProps) {
	return (
		<section className="px-6">
			<div className="bg-peach flex flex-col items-center py-16 px-6 rounded-[15px] text-center text-white">
				<h3 className="text-[32px] leading-[36px]">{props.title}</h3>
				<p className="text-[15px] leading-[25px]">{props.subtitle}</p>
				{props.ctaBtn && <Btn {...props.ctaBtn}/>}
			</div>
		</section>
	)
}