import { ErrorBoundary } from "react-error-boundary";
import { FormTemplate } from './FormTemplate';
import { ErrorPage } from '../../pages/Error';
import { logErrorToService } from '../../utils/consts';

export const NewInvoice = () => {

    return ( 
        <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
            <FormTemplate type="new" />
        </ErrorBoundary>
       
    )
}