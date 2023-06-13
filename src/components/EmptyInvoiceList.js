import { ReactComponent as IllustrationEmpty } from '../assets/illustration-empty.svg';
export const EmptyInvoiceList = () => {
	return (
		<section>
			<IllustrationEmpty />
			<h2>There is nothing here</h2>
			<p>
				Create a new invoice by clicking the
				<span> New Invoice </span>
				button and get started
			</p>
		</section>
	);
};


