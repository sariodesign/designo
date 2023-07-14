import Link from 'next/link'

export interface SectionLinkProps {
	bg: string,
	href: string,
	name: string
}

export function SectionLink({...props}: SectionLinkProps) {
	return (
		<div className={`flex flex-col items-center bg-no-repeat bg-cover bg-center px-[38px] py-[90px] rounded text-white uppercase ${props.bg} sm:${props.bg}-tablet`}>
			<h2 className="font-medium text-[28px] sm:text-[40px] sm:mb-6 sm:leading-[48px]">{props.name}</h2>
			<Link className="flex items-center gap-5 font-medium text-[15px] tracking-[5px]" href={props.href}>
				<span>View projects</span>
				<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/>
				</svg>
			</Link>
		</div>
	)
}