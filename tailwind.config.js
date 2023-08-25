/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			container: {
				center: true,
			},
			screens: {
				sm: '375px',
				md: '768px',
				lg: '1024px',
				xl: '1366px',
				'2xl': '1920px',
			},
			colors: {
				primaryColor: '#313F38',
				secondaryColor: '#FCD043',
				textColor: '#1B3B36',
				white: '#FFFCF6',
				errorColor: '#B03E3E',
				attentionColor: '#455955',
				successColor: '#6A7A77',
				linkColor: '#909B9A',
				linkHoverColor: '#909B9A',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				serif: ['var(--font-miracle)'],
			},
			fontSize: {
				'10xl': [
					'10.6rem',
					{
						lineHeight: '13rem',
						fontWeight: '700',
					},
				],
				'11xl': [
					'13.75rem',
					{
						lineHeight: '13rem',
						fontWeight: '700',
					},
				],
			},
		},
	},
	plugins: [],
}
