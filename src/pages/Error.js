/* eslint-disable react/prop-types */
import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';
import { Nav } from '../components/Nav';
import { GoBack } from '../UI/GoBack';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { PageContentWrapper } from '../UI/PageContentWrapper';

export const ErrorPage = ({ error }) => {

	return (
		<PageContentWrapper>
			<Nav />
			<MainContentWrapper styles='lg:w-2xl'>
				<GoBack title="Go back"/>

				<div className='flex flex-col items-center justify-between gap-6 font-bold text-center h-screen'>
					<h1 className='text-lg dark:text-light-100 mt-8 md:text-4xl md:mt-20'>Oups!</h1>
					<p className='text-md md:text-lg dark:text-light-100'>{error.message}</p>
					<NotFoundImg />
				</div>
			</MainContentWrapper>
		</PageContentWrapper>
	);
}
