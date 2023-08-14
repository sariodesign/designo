
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
			<div className="absolute translate-y-[-189px] left-0 top-0 w-full bg-peach flex flex-col items-center py-16 px-6 rounded-[15px] text-center text-white md:flex-row md:justify-between md:w-full md:px-[95px] md:text-left">
				<div className="md:max-w-[456px]">
					<h3 className="text-[32px] leading-[36px] mb-4 md:text-[40px]">{props.title}</h3>
					<p className="text-[15px] leading-[25px] mb-8 md:text-[16px] md:mb-0">{props.subtitle}</p>
				</div>
				{props.ctaBtn && <Btn {...props.ctaBtn}/>}
			</div>
		</section>
	)
}