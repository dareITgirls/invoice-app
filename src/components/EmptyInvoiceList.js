import illustrationEmpty from '../assets/illustrationEmpty.svg';

const EmptyInvoiceList = () => {
	return (
		<section>
			<img src={illustrationEmpty} alt='A person holding a megaphone' />
			<h2>There is nothing here</h2>
			<p>
				Create a new invoice by clicking the
				<span> New Invoice </span>
				button and get started
			</p>
		</section>
	);
};

export default EmptyInvoiceList;
