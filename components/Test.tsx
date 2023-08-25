import Image from 'next/image'

const images = [
	'/images/image1.png',
	'/images/image2.png',
	'/images/image3.png',
	'/images/image4.png',
	'/images/image5.png',
	'/images/image6.png',
]

const Test = () => {
	return (
		<div className="container mx-auto">
			<div className="columns-4 gap-8">
				{images.map(item => (
					<Image
						className="w-full"
						src={item}
						width={250}
						height={250}
						alt=""
					/>
				))}
			</div>
		</div>
	)
}

export default Test
