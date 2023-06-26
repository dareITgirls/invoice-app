import { Field } from 'formik';
import { useErrorDisplay } from '../hooks/useErrorDisplay';

export const ItemInput = (props) => {
    const { label, id, onBlur, name, classes } = props;
    const { classesLabel, classesInput } = useErrorDisplay(name);

    return (
        <div className={`pt-4 pb-2.5 md:pt-1 ${classes}`}>
                <div className="flex justify-between">
                <label className={classesLabel} name={name} htmlFor={id}>{label}</label>
                </div>
            <Field className={classesInput} {...props} onBlurCapture={onBlur} />
        </div>
    )
}