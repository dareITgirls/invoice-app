/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
			},

			fontSize: {
				'base/1': [
					'0.8125rem', //13px
					{
						lineHeight: '0.9375rem', //15px
						letterSpacing: '-0.25px',
						fontWeight: '500',
					},
				],

				'base/2': [
					'0.8125rem', //13px
					{
						lineHeight: '1.125rem', //18px
						letterSpacing: '-0.1px',
						fontWeight: '500',
					},
				],

				'md/1': [
					'0.9375', //15px
					{
						lineHeight: '0.9375rem', //15px
						letterSpacing: '-0.25px',
						fontWeight: '700',
					},
				],

				'md/2': [
					'0.9375', //15px
					{
						lineHeight: '1.5rem', //24px
						letterSpacing: '-0.25px',
						fontWeight: '700',
					},
				],

				lg: [
					'1.5rem', //24px
					{
						lineHeight: '1.375rem', //22px
						letterSpacing: '-0.75px',
						fontWeight: '700',
					},
				],

				xl: [
					'2.25rem', //36px
					{
						lineHeight: '2.0625rem', //33px
						letterSpacing: '-1px',
						fontWeight: '700',
					},
				],
			},

			colors: {
				'primary-100': '#9277FF',
				'primary-200': '#7C5DFA',
				'secondary-100': 'FF8F00',
				'success-100': '33D69F',
				'danger-100': '#9277FF',
				'danger-200': '#EC5757',
				'neutral-100': '#F8F8FB',
				'neutral-200': '#DFE3FA',
				'neutral-300': '888EB0',
				'neutral-400': '7E88C3',
				'neutral-500': '252945',
				'neutral-600': '1E2139',
				'neutral-700': '141625',
				'neutral-800': '0C0E16',
			},
		},
	},
	plugins: [],
};
