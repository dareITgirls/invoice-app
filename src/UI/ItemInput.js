import { Field } from 'formik';

export const ItemInput = (props) => {
    const { label, id, name, onBlur, classname } = props;

    return (
        <div className={`py-3 ${classname}`}>
                <div className="flex justify-between pb-1">
                    <label className="text-neutral-500 text-base/1" htmlFor={id}>{label}</label>
                </div>
            <Field className="text-dark-400 text-md/1 p-3 border rounded w-full" {...props} onBlurCapture={onBlur} />
            </div>
    )
}