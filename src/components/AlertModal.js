import { Button } from '../UI/Button';
//todo: check where alert is teleported - opacity doesn't work like it should
export const AlertModal = (onClose, onDelete) => {
	return (
		<div className='absolute bg-dark-750 w-screen h-screen top-0 left-0'>
		<div role='dialog' id='alert-modal' className='flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[30rem] shadow-3xl bg-light-100 dark:bg-dark-200 p-4 md:p-12 rounded-lg z-20'>
			<p className="mt-1 text-md/1 lg:text-lg/2 dark:text-light-100 font-bold">Confirm Deletion</p>
			<p className="text-base/2 text-neutral-300 dark:text-neutral-200 font-medium leading-[1.375rem]">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
			<form className='flex gap-2 self-end mt-1'>
				<Button onClick={onClose} styles="bg-neutral-100 dark:bg-dark-100 text-neutral-500 dark:text-neutral-200" title="Cancel" type="button" />
				<Button onClick={onDelete} styles="bg-danger-150 text-light-100">Delete</Button>
			</form>
		</div>
		</div>
	);
};
