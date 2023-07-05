import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';

export const Error = () => {
	return (
		<main className='flex flex-col items-center justify-between gap-6 font-bold text-center h-screen'>
			<h1 className='text-lg dark:text-light-100 mt-8 md:text-4xl md:mt-20'>Oups!</h1>

			<p className='text-md md:text-lg dark:text-light-100'>Dynamic error info here</p>

			<NotFoundImg />
		</main>
	);
};
