import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from 'react-redux';
import { FormTemplate } from './FormTemplate';
import { ErrorPage } from '../../pages/Error';
import { logErrorToService } from '../../utils/consts';

export const EditInvoice = () => {
    const error = useSelector((state) => state.invoices.error);
    if (error) {
        throw new Error(error.message)
    }

    return (  
        <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
            <FormTemplate type="edit" />
        </ErrorBoundary>
        
    )
}