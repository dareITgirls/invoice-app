import { Button } from '../UI/Button';

export const AlertModal = (onClose, onDelete) => {
	return (
		<div role='dialog' id='alert-modal' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[30rem] shadow-3xl bg-light-100 dark:bg-dark-200'>
			<p>Confirm deletion</p>
			<p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
			<form>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={onDelete}>Delete</Button>
			</form>
		</div>
	);
};
