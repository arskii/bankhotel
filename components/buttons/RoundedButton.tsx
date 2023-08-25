import { FC } from 'react'

interface IRoundedButton {
	text: string
	className?: string
}

const RoundedButton: FC<IRoundedButton> = ({ className, text }) => {
	return (
		<button
			style={{
				clipPath:
					'polygon(50% 0, 80% 10%, 99% 34%, 99% 65%, 81% 90%, 50% 100%, 20% 90%, 1% 66%, 0 36%, 19% 10%)',
			}}
			className={` ${className} flex h-28 w-28 justify-center items-center focus:outline-none focus:ring focus:ring-blue-300 bg-secondaryColor focus:ring-opacity-50 cursor-pointer`}
		>
			<p className="text-black text-sm font-sans italic">{text}</p>
		</button>
	)
}

export default RoundedButton
