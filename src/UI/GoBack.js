import { Link } from 'react-router-dom';

import BackArrow from '../assets/icon-arrow-left.svg';

export const GoBack = () => {
	return (
		<Link to={`/`}>
			<div className='flex items-center mb-8 md:mb-8 md:w-4/5 md:m-0 xl:w-1/2 2xl:w-1/3'>
				<img src={BackArrow} alt='back arrow' className='ml-2'></img>

				<span className='text-dark-300 dark:text-light-100 text-md/1 ml-3'>Go back</span>
			</div>
		</Link>
	);
};
