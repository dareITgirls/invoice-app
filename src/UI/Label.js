const Label = ({ status }) => {
	let className =
		'flex items-center gap-2 text-md/1 before:h-2 before:w-2 before:rounded-full before:block px-3.5 h-10 min-h-fit rounded-md row-start-2 row-end-4 col-start-2 justify-self-end self-end mb-2';

	const firstLetterToUpper = name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	if (status === 'pending') {
		className += ' text-warning-100 before:bg-warning-100 bg-warning-150';
	} else if (status === 'paid') {
		className += ' text-success-100 before:bg-success-100 bg-success-150';
	} else {
		className += ' text-dark-500 before:bg-dark-500 bg-dark-550';
	}

	return <td className={className}>{firstLetterToUpper(status)}</td>;
};

export default Label;
