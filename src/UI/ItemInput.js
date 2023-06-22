import { Field } from 'formik';

export const ItemInput = (props) => {
    const { label, id, onBlur, classes } = props;

    return (
        <div className={`pt-4 pb-2.5 md:pt-1 ${classes}`}>
                <div className="flex justify-between">
                    <label className="text-neutral-500 text-base/2 pb-1 lg:pt-1" htmlFor={id}>{label}</label>
                </div>
            <Field className="field" {...props} onBlurCapture={onBlur} />
        </div>
    )
}