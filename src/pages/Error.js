/* eslint-disable react/prop-types */
import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';
import { GoBack } from '../UI/GoBack';
import { MainContentWrapper } from '../UI/MainContentWrapper';

export const ErrorPage = ({ error }) => {
	let content
	if (error.message === 'The page you’re looking for can’t be found' || error.message === 'there was a problem with authentication, try again' || error.message  === 'there was a problem with fetching invoices, try again') {
		content = error.message
	} else {
		content = 'there was a problem with rendering this page, try again'
	}

	return (
			<MainContentWrapper styles='lg:w-2xl'>
				<GoBack title="Go back"/>
				<div className='flex flex-col items-center justify-between gap-6 font-bold text-center h-screen'>
					<h1 className='text-lg dark:text-light-100 mt-8 md:text-4xl md:mt-20'>Oups!</h1>
					<p className='text-md md:text-lg dark:text-light-100'>{content}</p>
					<NotFoundImg />
				</div>
			</MainContentWrapper>
	);
}
