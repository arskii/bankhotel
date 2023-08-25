import RoundedButton from '@/components/buttons/RoundedButton'
import roundSmallButton from '@/icons/roundSmallButton.svg'
import smallStar from '@/icons/smallStar.svg'
import Image from 'next/image'
import Link from 'next/link'
import MainButton from './buttons/MainButton'
import MainInput from './inputs/MainInput'

const Hero = () => {
	return (
		<section className="bg-primaryColor">
			<div className="lg:container mx-auto flex flex-col lg:px-8 px-5">
				<div className="flex flex-col lg:flex-row justify-between lg:gap-24 xl:gap-44">
					<div className="flex flex-col justify-center items-center lg:items-start">
						<h1 className=" text-7xl lg:text-9xl xl:text-10xl 2xl:text-11xl text-center font-serif text-white">
							Bank<span className=" text-secondaryColor">Hotel</span>
						</h1>
						<p className="uppercase text-xs lg:text-sm xl:text-lg py-6 text-secondaryColor font-sans">
							rooms // restaurant // congress hall // wine bar
						</p>
						<hr className="lg:hidden opacity-30 border-t-2 bg-white w-1/2" />
					</div>
					<div className="flex flex-col lg:flex-row xl:flex-col justify-center lg:justify-between items-center xl:items-stretch lg:items-start lg:gap-16 xl:py-10">
						<Image
							className="hidden lg:block xl:hidden h-11 w-11"
							src={roundSmallButton}
							alt="round button down"
						/>
						<div className="hidden xl:flex justify-between">
							<div className="  flex justify-center items-center py-4 px-8 rounded-full bg-transparent border-[0.1rem] border-gray-500 text-white gap-6 font-sans text-xl font-light">
								<Image src={smallStar} alt="small star" />
								Since 1973
							</div>
							<Image
								className="hidden lg:block h-16 w-16"
								src={roundSmallButton}
								alt="round button down"
							/>
						</div>
						<p className="text-sm lg:text-sm xl:text-base py-6 w-4/5 opacity-75 text-center lg:text-left text-white font-sans font-light">
							The luxurious hotel in the most beautiful European city with an
							exclusive restaurant, conference-hall, and art-bar.
						</p>
					</div>
				</div>
				<div className=" relative overflow-hidden text-center">
					<div className="hidden lg:flex flex-row absolute lg:bottom-0 xl:bottom-auto xl:top-0 right-0">
						<MainInput />
						<MainButton className=" uppercase font-sans" text="Book room" />
					</div>
					<Image
						src="/heroImg.jpeg"
						width={1860}
						height={780}
						alt="hero image"
						className="h-[31rem] xl:h-[44rem] 2xl:h-[50rem] object-cover w-full object-center"
					/>
					<RoundedButton
						className="absolute bottom-5 right-5 lg:hidden"
						text="Book room"
					/>
				</div>
				<div className="flex flex-col lg:flex-row justify-between my-12">
					<div className="hidden lg:flex uppercase font-sans text-base flex-col text-white">
						<Link className=" text-secondaryColor" href="#">
							+38 032 297 50 20
						</Link>
						<address className="not-italic">8 Lystopadovoho Chynu,Lviv</address>
					</div>
					<div className="uppercase text-white text-sm lg:text-base font-sans">
						<p>Art & Congress</p>
						<p className="italic">Hall</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
