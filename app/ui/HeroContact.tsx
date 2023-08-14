import { ContactForm } from "./ContactForm";

interface HeroContactProps {
	title: string,
	subtitle: string,
}

export function HeroContact({...props}:HeroContactProps) {
	return (
		<div className="bg-peach bg-hero-pattern bg-no-repeat flex flex-col overflow-hidden py-[72px] px-6 text-center text-white sm:rounded-[15px] md:flex-row">
			<div className="mb-12 sm:py-16 sm:px-[58px]">
				<h1 className="mb-6 text-title-base font-medium sm:text-title-sm sm:mb-8 md:w-[540px]">{props.title}</h1>
				<h2 className="text-subtitle sm:w-[445px] sm:mx-auto md:mr-0 md:ml-0">{props.subtitle}</h2>
			</div>
			<ContactForm />
		</div>
	)
}