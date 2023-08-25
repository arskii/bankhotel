import InputField from '@/components/InputField'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="container mx-auto max-w-screen-2xl py-24">
				<div className=" grid grid-cols-4 xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-48 xl:gap-44 lg:gap-36">
					<div className="flex-col ">
						<h4 className="mb-10 text-textColor font-sans uppercase text-2xl">
							<span className="text-secondaryColor">/</span>About us
						</h4>
						<p className="mb-16 text-textColor font-sans font-light text-light">
							The five-star hotel in a beautiful European city with a modern
							restaurant, conference-hall, and art-bar.
						</p>
						<p className="text-textColor font-sans opacity-40 font-light">
							©2021 All rights reserved. BankHotel
						</p>
					</div>
					<div className="flex-col ">
						<h4 className="mb-10 text-textColor font-sans uppercase text-2xl">
							<span className="text-secondaryColor">/</span>News
						</h4>
						<p className="mb-8 text-textColor font-sans font-light text-light">
							Sign up to our newsletter not to miss exclusive offers and
							information about the upcoming events.
						</p>
						<InputField />
					</div>
					<div className="flex-col">
						<h4 className="mb-10 text-textColor font-sans uppercase text-2xl">
							<span className="text-secondaryColor">/</span>Social
						</h4>
						<div className="flex lg:flex-col gap-12 xl:gap-8 lg:gap-y-4 text-textColor font-sans ">
							<Link className="text-base uppercase" href="#">
								Facebook
							</Link>
							<Link className="text-base uppercase" href="#">
								Instagram
							</Link>
							<Link className="text-base uppercase" href="#">
								Twitter
							</Link>x
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
