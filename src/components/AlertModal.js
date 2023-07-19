import { Button } from '../UI/Button';

export const AlertModal = (onClose, onDelete) => {
	return (
		<div role='dialog' id='alert-modal' className='absolute top-0'>
			<p>Confirm deletion</p>
			<p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
			<form>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={onDelete}>Delete</Button>
			</form>
		</div>
	);
};
