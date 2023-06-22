import { useEffect, useState } from 'react'

import { ErrorMessage, Field, useFormikContext } from 'formik';

export const Input = (props) => {
    const { label, id, name, onBlur, className } = props;
    const { errors, touched } = useFormikContext();
    const [classesInput, setClassesInput] = useState('field touched && outline-danger-150')
    const [classesLabel, setClassesLabel] = useState('label')

    const splitName = (name) => {
        return name.includes('.') ? name.split('.') : name
    }

    const getError = () => {
        if (splitName(name).length > 1 && touched[splitName(name)[0]] && errors[splitName(name)[0]]) {
            if (touched[splitName(name)[0]][splitName(name)[1]] && errors[splitName(name)[0]][splitName(name)[1]]) {
                return true
            }
        }
        if (touched[splitName(name)] && errors[splitName(name)]) {
            return true
        }
    }  
    
    useEffect(() => {
        getError() ? setClassesLabel('text-base/2 pb-1 text-danger-150') : setClassesLabel('label');
        getError() ? setClassesInput('field outline outline-1 outline-danger-150') : setClassesInput('field touched && outline-danger-150');
    }, [errors, touched])


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