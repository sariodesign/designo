import Link from 'next/link'
import Image from 'next/image'

interface SocialIcon {
	source: string,
	name: string
}

interface SocialLinkProps {
	social: SocialIcon,
	href: string
}

export function FooterSocial({socials}:{socials:SocialLinkProps[]}) {
	if(!socials.length) return null;

	return (
		<div className="flex justify-center gap-x-4">
			{socials.map((item, index) => (
				<Link key={index} href={item.href}>
					<Image 
						src={item.social.source}
						width="24"
						height="24"
						alt={item.social.name} 
					/>
				</Link>
			))}
		</div>
	)
}