import { Field } from 'formik';

export const ItemInput = (props) => {
    const { label, id, name, onBlur, classes } = props;

    return (
        <div className={`pt-4 pb-2.5 ${classes}`}>
                <div className="flex justify-between">
                    <label className="text-neutral-500 text-base/2 pb-1" htmlFor={id}>{label}</label>
                </div>
            <Field className="text-dark-400 text-md/1 p-4 border rounded w-full" {...props} onBlurCapture={onBlur} />
        </div>
    )
}