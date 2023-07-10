import { ErrorMessage, Field } from 'formik';
import { useErrorDisplay } from '../hooks/useErrorDisplay';

export const Input = (props) => {
    const { label, id, name, onBlur, classes, variant } = props;
    const { classesLabel, classesInput } = useErrorDisplay(name);

    let classesError = variant === 'full' ? "text-danger-150 text-base/1" : 'hidden';

    let classesLabelVariant = variant === 'item' ? `md:mb-2 ${classesLabel}` : variant === 'full' ? classesLabel : 'hidden'; 

    let classesInputVariant = variant !== 'no-label' ? classesInput : `md:mt-1 ${classesInput}`;

    let classesContainer = variant === 'full' ? `pt-4 pb-2.5 ${classes}` : `pt-4 pb-2.5 md:pt-1 ${classes}`;

    let classesWrapper = variant !== 'no-label' ? 'flex justify-between' : 'hidden';

    return (
        <div className={ classesContainer }>
            <div className={ classesWrapper }>
                <label className={ classesLabelVariant } name={name} htmlFor={id}>{label}</label>
                <ErrorMessage className={ classesError } name={name} component="span" />
            </div>
            <Field className={ classesInputVariant }{...props} onBlurCapture={onBlur} />
        </div>
    )
}