import {useSelector} from 'react-redux';

import {Nav} from "../components/Nav";
import { MainContentWrapper} from "../UI/MainContentWrapper";
import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import {NewInvoice} from "../components/newInvoice/NewInvoice";
import React from "react";


export const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}
	return (
		<>
			{!modalStatus &&
				<div className='flex flex-col lg:flex-row relative lg:justify-center'>
					<MainContentWrapper>
						<HeaderHome />
						<InvoiceList />
					</MainContentWrapper>
				</div>}
			{modalStatus && <NewInvoice />}
		</>
	);
}

