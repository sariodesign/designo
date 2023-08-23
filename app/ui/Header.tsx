'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Navigation } from './Navigation'

import { useState, useEffect } from 'react' 

const navLinks = [
  {
    name: 'Our company',
    href: '/our-company'
  },
  {
    name: 'Locations',
    href: '/locations'
  },
  {
    name: 'Contacts',
    href: '/contacts'
  }
]
 
export function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
  const searchParams = useSearchParams()
 
	const handlerToggleMenu = () => {
		setIsOpen(!isOpen)
	}
	
	// Reset state of navigation on dynamic route change.
  useEffect(() => {
		setIsOpen(false)
  }, [pathname, searchParams])


  return (
    <header className="relative sm:flex sm:items-center sm:justify-between">
			<div className="bg-white flex justify-between items-center px-6 py-8 relative z-10 sm:px-0 sm:py-12 md:py-16">
				<Link href="/">
					<Image 
						src="/logo-dark.png"
						height="27"
						width="202"
						alt="Logo Designo Header"
					/>
				</Link>
				<Image
					onClick={handlerToggleMenu}
					src={isOpen ? '/icon-close.svg' : '/icon-hamburger.svg'}
					alt="menu icon"
					width="24"
					height="24"
					className="sm:hidden"
				/>
			</div>
			<Navigation navLinks={navLinks} isActive={isOpen} />
    </header>
  )
}