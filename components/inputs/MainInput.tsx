import smallArrowDown from '@/icons/smallArrowDown.svg'
import Image from 'next/image'
import { FC } from 'react'

interface IMainInput {
	className?: string
}
const MainInput: FC<IMainInput> = ({ className }) => {
	return (
		<div
			className={` ${className} flex flex-row items-center bg-primaryColor bg-opacity-60  `}
		>
			<div className=" flex justify-between py-12 px-24 bg-transparent">
				<p className="font-sans text-sm text-white">Check in</p>
				<Image src={smallArrowDown} alt="small arrow down" />
			</div>
			<div className="h-full border-[0.1rem] border-gray-400"></div>
			<div className=" flex justify-between py-12 px-24 bg-transparent">
				<p className="font-sans text-sm text-white">Check out</p>
				<Image src={smallArrowDown} alt="small arrow down" />
			</div>
		</div>
	)
}

export default MainInput
