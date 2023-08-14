/* eslint-disable react/prop-types */
import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';
import { Nav } from '../components/Nav';
import { GoBack } from '../UI/GoBack';
import { MainContentWrapper } from '../UI/MainContentWrapper';
export const Error = props => {
	return (
		<div className='flex flex-col lg:flex-row lg:justify-center'>
			<Nav />

			<MainContentWrapper styles='lg:w-2xl'>
				<GoBack />

				<div className='flex flex-col items-center justify-between gap-6 font-bold text-center h-screen'>
					<h1 className='text-lg dark:text-light-100 mt-8 md:text-4xl md:mt-20'>Oups!</h1>

					<p className='text-md md:text-lg dark:text-light-100'>{props.title}</p>

					<NotFoundImg />
				</div>
			</MainContentWrapper>
		</div>
	);
};
