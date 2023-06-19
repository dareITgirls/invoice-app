import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';

export const Error = () => {
	return (
		<main className='flex flex-col items-center justify-center font-bold text-center h-screen'>
			<h1 className='text-lg dark:text-light-100 mt-8 md:text-xl md:mt-20'>Oups. Page not found!</h1>

			<NotFoundImg />
		</main>
	);
};
