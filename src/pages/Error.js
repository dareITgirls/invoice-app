/* eslint-disable react/prop-types */
import { ReactComponent as NotFoundImg } from '../assets/not-found.svg';
import { GoBack } from '../UI/GoBack';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { authError,
		fetchingError,
		generalError,
		pageNotFound } from "../utils/accessErrorMessages";

export const ErrorPage = ({ error }) => {
	let content
	if (error.message === pageNotFound ||
		error.message === authError ||
		error.message  === fetchingError) {
		content = error.message
	} else {
		content = generalError
	}

	return (
			<MainContentWrapper styles='lg:w-2xl'>
				<GoBack title="Go back"/>
				<div className='flex flex-col items-center gap-6 font-bold text-center h-screen'>
					<h1 className='text-lg md:text-4xl dark:text-light-100 mt-8'>Oups!</h1>
					<p className='text-md md:text-lg dark:text-light-100'>{content}</p>
					<NotFoundImg className="max-w-sm"/>
				</div>
			</MainContentWrapper>
	);
}
