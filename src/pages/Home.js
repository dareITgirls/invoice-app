import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from 'react-redux';

import { NewInvoice } from "../components/forms/NewInvoice";
import { HomeHeader } from "../components/HomeHeader";
import { InvoiceList } from '../components/InvoiceList';
import { Loader } from "../UI/Loader";
import { MainContentWrapper } from "../UI/MainContentWrapper";
import { logErrorToService } from "../utils/consts";
import { ErrorPage } from "./Error";

export const Home = () => {
    const loadingStatus = useSelector((state) => state.invoices.status);
    const modalStatus = useSelector((state) => state.formModalStatus.status);
    const error = useSelector((state) => state.invoices.error);

    if (error){
        throw new Error(error.message)
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
            <MainContentWrapper>
                <HomeHeader/>
                {loadingStatus === 'loading' ?
                    <Loader/> :
                    <InvoiceList/>}
            </MainContentWrapper>
            {modalStatus && <NewInvoice/>}
        </ErrorBoundary>
    );
}