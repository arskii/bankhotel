import menuCloseIcon from '@/icons/menuCloseIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { NavItem } from './Header'

interface IMobileNav {
	isOpen: boolean
	links: NavItem[]
	toggleMenu: () => void
}

const MobileNav: FC<IMobileNav> = ({ isOpen, links, toggleMenu }) => {
	return (
		<div
			className={`fixed top-0 left-0 right-0 p-5 bottom-0 bg-primaryColor bg-fixed z-10 ${
				isOpen ? 'block' : 'hidden'
			} xl:hidden`}
		>
			<nav className="flex flex-col items-start justify-start md:items-center h-full">
				<Link
					className="absolute left-5 top-7 items-center font-sans  text-white lg:text-xl text-base"
					href="#"
				>
					BankHotel
				</Link>
				<button
					className="absolute top-5 right-5 text-white focus:outline-none"
					onClick={toggleMenu}
				>
					<Image src={menuCloseIcon} alt="Close Menu" />
				</button>
				<ul className="flex mt-24 flex-col gap-6 md:gap-10 text-start md:text-center">
					{links.map(item => (
						<li key={item.name}>
							<Link
								className="font-sans text-2xl text-white uppercase hover:text-linkHoverColor duration-500"
								href={item.link}
								onClick={toggleMenu}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="absolute bottom-44 left-0 right-0 text-center">
				<Link
					className="underline text-white font-sans mb-5"
					href={`tel: +38 032 297 50 20`}
				>
					+38 032 297 50 20
				</Link>
			</div>
			<p className="absolute bottom-24 left-0 right-0 uppercase text-white text-xl font-sans text-center">
				8 Lystopadovoho Chynu,Lviv
			</p>
			<div className="absolute bottom-8 left-0 right-0 uppercase text-center">
				<ul className="flex gap-8 justify-center text-white font-sans">
					<li>
						<Link className="underline hover:text-linkColor" href="#">
							Facebook
						</Link>
					</li>
					<li>
						<Link className="underline hover:text-linkColor" href="#">
							Instagram
						</Link>
					</li>
					<li>
						<Link className="underline hover:text-linkColor" href="#">
							Twitter
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MobileNav
