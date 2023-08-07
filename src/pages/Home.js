import {useSelector} from 'react-redux';

import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import {MainContentWrapper} from "../UI/MainContentWrapper";
import React from "react";


export const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}
	return (
		<MainContentWrapper>
			<HeaderHome />
			<InvoiceList />
		</MainContentWrapper>
	);
}

