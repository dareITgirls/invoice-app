//Future todo: consider what to do with a user avatar - what functionality should it has?
import { ReactComponent as IconMoon } from '../assets/icon-moon.svg';
import { ReactComponent as IconSun } from '../assets/icon-sun.svg';
// import imageAvatar from '../assets/imageAvatar.jpg';
import { ReactComponent as IconLogo } from '../assets/logo.svg';
import { useDarkMode } from '../hooks/useDarkMode';
import { useAuth } from '../hooks/useAuth';

export const Nav = () => {
	const [handleTheme, theme] = useDarkMode();

	const { user, handleSignIn, handleSignOut } = useAuth();
	return (
		<header className='flex justify-between items-center bg-dark-200 w-full lg:min-h-screen lg:w-fit lg:flex-col lg:rounded-r-2xl sticky lg:fixed top-0 left-0'>
			<div className='relative bg-primary-200 w-18 h-18 flex items-center justify-center rounded-r-2xl after:absolute after:h-1/2 after:bg-primary-100 after:w-full after:bottom-0 after:rounded-tl-2xl after:rounded-br-2xl md:w-20 md:h-20 lg:w-26 lg:h-26'>
				<IconLogo className='z-10 md:scale-110 lg:scale-140' />
			</div>
			<nav className='flex items-center justify-center h-18 md:h-20 divide-x divide-dark-600 lg:h-fit lg:flex-col lg:divide-y lg:divide-x-0'>
				<button
					className='px-6 h-full md:px-8 lg:py-8'
					type='button'
					aria-label='Switch color theme'
					onClick={handleTheme}>
					{theme === 'dark' ? (
						<IconSun className='hover:fill-neutral-200 transition duration-300' />
					) : (
						<IconMoon className='hover:fill-neutral-200 transition duration-300' />
					)}
				</button>
				<p>{user ? user.displayName : ''}</p>
				<div>
					<button onClick={user ? handleSignOut : handleSignIn}>{user ? 'Sign out' : 'Sign in'}</button>
				</div>
			</nav>
		</header>
	);
};

// <button aria-label='User account' title='User account' className='px-6 h-full md:px-8 lg:py-6'>
{
	/* <img className='rounded-full h-8 w-8 lg:h-10 lg:w-10' src={imageAvatar} alt='User' />
</button> */
}
