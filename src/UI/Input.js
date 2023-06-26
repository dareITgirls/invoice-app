import { ErrorMessage, Field } from 'formik';
import { useErrorDisplay } from '../hooks/useErrorDisplay';

export const Input = (props) => {
    
    const { label, id, name, onBlur, className } = props;
    const { classesLabel, classesInput } = useErrorDisplay(name);

    return (
        <div className={`pt-4 pb-2.5 ${className}`}>
                <div className="flex justify-between">
                <label className={classesLabel} name={name} htmlFor={id}>{label}</label>
                    <ErrorMessage className="text-danger-150 text-base/1" name={name} component="span" />
                </div>
            <Field className={classesInput}{...props} onBlurCapture={onBlur} />
        </div>
    )
}