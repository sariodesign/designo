import Image from 'next/image'
import Link from 'next/link'
import { FooterText } from './FooterTextBlock'
import { FooterSocial } from './FooterSocial'

interface FooterNavLinksProps {
	label: string,
	href: string
}

interface FooterProps {
	navLinks: FooterNavLinksProps[]
}

const socialList = [
	{
		social: {
			source: "/icon-facebook.svg",
			name: "facebook"
		},
		href: "/"
	},
	{
		social: {
			source: "/icon-youtube.svg",
			name: "youtube"
		},
		href: "/"
	},
	{
		social: {
			source: "/icon-twitter.svg",
			name: "twitter"
		},
		href: "/"
	},
	{
		social: {
			source: "/icon-pinterest.svg",
			name: "pinterest"
		},
		href: "/"
	},
	{
		social: {
			source: "/icon-instagram.svg",
			name: "instagram"
		},
		href: "/"
	}
]

const footerNav = [
	{
		label: "our company",
		href: "/our-company"
	},
	{
		label: "locations",
		href: "/locations"
	},
	{
		label: "contact",
		href: "/contact"
	}
]

export function Footer({cta}:{cta:boolean}) {
	return (
		<footer className={cta ? `text-center bg-black px-6 pb-16 pt-[255px] relative z-10 sm:pt-[166px]` : `text-center bg-black px-6 pb-16 relative z-10`}>
			<div className="sm:max-w-[688px] md:max-w-[1110px] sm:mx-auto">
				<div className="sm:flex sm:justify-between sm:pb-10 sm:mb-8 sm:border-b-[1px] sm:border-footer-color">
					<Image
						className="mb-8 mx-auto sm:m-0"
						src="/logo-light.png"
						width="202"
						height="27"
						alt="Logo Designo Footer"
					/>
					{footerNav && <ul className="border-t-[1px] border-footer-color pt-8 flex flex-col gap-y-8 mb-10 sm:flex-row sm:border-0 sm:p-0 sm:m-0 sm:gap-x-[42px]">
						{footerNav.map((item,index) => (
							<Link className="text-white uppercase font-light text-[14px]" key={index} href={item.href}>{item.label}</Link>
						))}
					</ul>}
				</div>
				<div className="sm:flex sm:justify-between sm:items-end">
					<FooterText firstTextRow='Designo Central Office' otherTextRows={['3886 Wellington Street','Toronto, Ontario M9C 3J5']} />
					<FooterText firstTextRow='Contact Us (Central Office)' otherTextRows={['P : +1 253-863-8967','M : contact@designo.co']} />
					<FooterSocial socials={socialList} />
				</div>
			</div>
		</footer>
	)
}