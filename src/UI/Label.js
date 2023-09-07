import {firstLetterToUpper} from "../utils/consts";

export const Label = ({ status }) => {
	let className =
		'flex items-center justify-center gap-2 text-md/1 before:h-2 before:w-2 before:rounded-full before:block px-3.5 h-10 rounded-md';

	if (status === 'pending') {
		className += ' text-warning-100 before:bg-warning-100 bg-warning-150';
	} else if (status === 'paid') {
		className += ' text-success-100 before:bg-success-100 bg-success-150';
	} else {
		className +=
			' text-dark-500 dark:text-neutral-200 before:bg-dark-500 bg-dark-550 dark:before:bg-neutral-200 dark:bg-neutral-250';
	}

	return (
		<div className='w-28 md:mr-6'>
			<p className={className}>{firstLetterToUpper(status)}</p>
		</div>
		)

};
