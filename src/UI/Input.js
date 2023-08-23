import { ErrorMessage, Field } from 'formik';
import { useErrorDisplay } from '../hooks/useErrorDisplay';

export const Input = (props) => {

    const { label, id, name, onBlur, classes, variant } = props;
    const { classesLabel, classesInput } = useErrorDisplay(name);

    let classesError = variant === 'full' ? "text-danger-150 text-base/2 mt-[-4px] ml-1" : 'hidden';

    let classesLabelVariant = variant === 'item' ? `pb-2 md:mb-2 ${classesLabel}` : variant === 'full' || variant === 'address' ? `pb-2 ${classesLabel}` : variant === 'item-name' ? `pb-4 md:pb-2 md:mb-2 ${classesLabel}` : 'hidden'; 

    let classesInputVariant = variant !== 'no-label' ? classesInput : ` md:mt-1 ${classesInput}`;

    let classesContainer = variant === 'full' || variant === 'address' ? `pt-4 pb-2.5 ${classes}` : `pt-4 pb-2.5 md:pt-2 ${classes}`;

    let classesWrapper = variant === 'full' || variant === 'address' ? 'flex' : variant === 'item' | variant === 'item-name' ? 'flex' :'hidden';

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