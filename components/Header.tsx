'use client'
import menuIcon from '@/icons/menuIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import MobileNav from './MobileNav'

export interface NavItem {
	name: string
	link: string
}

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
		isMenuOpen
			? (document.body.style.overflow = '')
			: (document.body.style.overflow = 'hidden')
	}

	const links: NavItem[] = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/' },
		{ name: 'Rooms', link: '/' },
		{ name: 'Restaurant', link: '/' },
		{ name: 'Conference Hall', link: '/' },
		{ name: 'Contacts', link: '/' },
	]

	return (
		<header className="bg-primaryColor py-7 xl:py-10">
			<div className="lg:container mx-auto flex flex-wrap justify-between lg:px-8 px-5">
				<Link
					className="items-center font-sans text-white lg:text-xl text-base"
					href="#"
				>
					BankHotel
				</Link>
				<button
					className="xl:hidden top-0 right-0 text-white focus:outline-none"
					onClick={toggleMenu}
				>
					<Image src={menuIcon} alt="menu" />
				</button>

				{/* Mobile Menu */}
				<MobileNav isOpen={isMenuOpen} links={links} toggleMenu={toggleMenu} />
				{/* Desktop Menu */}
				<nav
					className={` ${
						isMenuOpen ? 'block' : 'hidden'
					} xl:flex xl:w-auto xl:items-center `}
				>
					<ul
						className="flex flex-col xl:gap-16 
          xl:flex-row text-sm items-start xl:pb-0 pb-10 "
					>
						{links.map(item => (
							<li className="xl:mt-0 mt-10" key={item.name}>
								<Link
									className="block xl:inline-block xl:font-light font-normal 
                  font-sans uppercase text-2xl xl:text-sm text-white
                  hover:text-linkHoverColor duration-500"
									href={item.link}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div
					className={`${
						isMenuOpen ? 'block' : 'hidden'
					} xl:block items-center font-sans text-white text-base font-light`}
				>
					<Link href={`tel: +38 032 297 50 20`}>+38 032 297 50 20</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
