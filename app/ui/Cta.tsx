
import { Btn } from './Btn'
import { ctaLink } from './Hero'

interface CtaProps {
	title: string,
	subtitle: string,
	ctaBtn: ctaLink
}

export function Cta({...props}: CtaProps) {
	return (
		<section className="px-6 relative bg-cta-pattern">
			<div className="cta">
				<div>
					<h3 className="text-[32px] leading-[36px] mb-4 md:text-[40px] font-medium md:max-w-[300px]">{props.title}</h3>
					<p className="text-[15px] leading-[25px] mb-8 md:text-[16px] md:mb-0 md:max-w-[456px]">{props.subtitle}</p>
				</div>
				{props.ctaBtn && <Btn {...props.ctaBtn}/>}
			</div>
		</section>
	)
}