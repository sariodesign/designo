'use client'

import Link from 'next/link'

interface LinkItem {
  href: string
  name: string
}

const navigationCls = "absolute left-0 transition-all w-full z-0 sm:opacity-100 sm:static sm:w-auto flex flex-col sm:flex-row gap-y-8 sm:gap-x-[42px] bg-black sm:bg-white px-6 py-12 sm:p-0"
 
export function Navigation({navLinks, isActive }: { navLinks:LinkItem[], isActive:boolean }) {
 
  return (
    <nav className={isActive ? `${navigationCls} max-[767px]:top-full max-[767px]:visible max-[767px]:opacity-100` : `${navigationCls} max-[767px]:top-0 max-[767px]:invisible max-[767px]:opacity-0` }>
      {navLinks.map((link) => {
 
        return (
          <Link
            className="text-white text-2xl uppercase sm:text-black sm:text-sm md:after:content-[''] md:after:w-0 md:after:transition-all md:after:h-px md:after:bg-black md:after:block md:hover:after:w-full"
           	href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}