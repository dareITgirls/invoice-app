import { ErrorBoundary } from "react-error-boundary";
import { FormTemplate } from './FormTemplate';
import { logErrorToService } from './utils/consts'

export const EditInvoice = () => {

    return (  
        <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
            <FormTemplate type="edit" />
        </ErrorBoundary>
        
    )
}