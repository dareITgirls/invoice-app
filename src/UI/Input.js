import { ErrorMessage, Field } from 'formik';

export const Input = (props) => {
    const { label, id, name, onBlur, className } = props;

    return (
        <div className={`pt-4 pb-2.5 ${className}`}>
                <div className="flex justify-between">
                    <label className="text-neutral-500 text-base/2 pb-1" htmlFor={id}>{label}</label>
                    <ErrorMessage className="text-danger-150 text-base/1" name={name} component="span" />
                </div>
            <Field className="field" {...props} onBlurCapture={onBlur} />
        </div>
    )
}