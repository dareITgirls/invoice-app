//Future todo: consider what to do with a user avatar - what functionality should it has?
//to fix - doesn't recognise the changement from dark to light 
import { useEffect, useState } from 'react';
import imageAvatar from '../assets/imageAvatar.jpg';
import { MoonIcon } from './icons/MoonIcon.js';
import { SunIcon } from './icons/SunIcon.js';
import { LogoIcon } from './icons/LogoIcon.js';

const Nav = () => {
	/*
	dark/light mode logic
	*/

	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const [darkTheme, setDarkTheme] = useState(
		localStorage.getItem('darkTheme') ? localStorage.getItem('darkTheme') : darkQuery.matches.toString()
	);

	const handleDark = () => {
		if (darkTheme === 'true') {
			setDarkTheme('false');
			localStorage.setItem('darkTheme', false);
		} else {
			setDarkTheme('true');
			localStorage.setItem('darkTheme', true);
		}
	};

	useEffect(() => {
		if (darkTheme === 'true') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkTheme]);

	//to fix - doesn't recognise the changement from dark to light 
	darkQuery.addEventListener('change', (e) => {
		if (!('darkTheme' in localStorage)) {
			if (e.matches) {
				document.documentElement.classList.add('dark');
			}
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	return (
		<header className='flex justify-between items-center bg-dark-200 w-full lg:min-h-full lg:w-fit lg:flex-col lg:rounded-r-2xl'>
			<div className='relative bg-primary-200 w-18 h-18 flex items-center justify-center rounded-r-2xl after:absolute after:h-1/2 after:bg-primary-100 after:w-full after:bottom-0 after:rounded-tl-2xl after:rounded-br-2xl md:w-20 md:h-20 lg:w-26 lg:h-26'>
				<LogoIcon />
			</div>

			<nav className='flex items-center justify-center h-full divide-x divide-dark-600 lg:h-fit lg:flex-col lg:divide-y lg:divide-x-0'>
				<button
					className='px-6 h-full md:px-8 lg:py-8'
					type='button'
					aria-label='Switch color theme'
					onClick={handleDark}>
					<MoonIcon />

					<SunIcon />
				</button>

				<button aria-label='User account' title='User account' className='px-6 h-full md:px-8 lg:py-6'>
					<img className='rounded-full h-8 w-8 lg:h-10 lg:w-10' src={imageAvatar} alt='User' />
				</button>
			</nav>
		</header>
	);
};

export default Nav;
