import { FC } from 'react'

interface IMainButton {
	text: string
	className?: string
}

const MainButton: FC<IMainButton> = ({ text, className }) => {
	return (
		<div
			className={` ${className}  flex justify-center items-center bg-secondaryColor py-12 px-24`}
		>
			{text}
		</div>
	)
}

export default MainButton
