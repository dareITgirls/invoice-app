import { Field } from 'formik';
import { useErrorDisplay } from '../hooks/useErrorDisplay';

export const NoLabelInput = (props) => {
    const { id, onBlur, classes, name } = props;
     const { classesInput } = useErrorDisplay(name);

    return (
        <div className={`pt-4 pb-2.5 md:pt-1 ${classes}`}>
            <Field className={classesInput} {...props} onBlurCapture={onBlur} />
        </div>
    )
}