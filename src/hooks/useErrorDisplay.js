import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { splitName, getError } from '../utils/consts';

export const useErrorDisplay = (name) => {
    const { errors, touched } = useFormikContext();
    const [classesInput, setClassesInput] = useState('field touched && outline-danger-150');
    const [classesLabel, setClassesLabel] = useState('label');

    let splitted = splitName(name);    
    
    useEffect(() => {
        if (getError(splitted, errors, touched)) {
            setClassesLabel('text-base/2 pb-1 text-danger-150');
            setClassesInput('field outline outline-1 outline-danger-150');
        } else {
            setClassesLabel('label');
            setClassesInput('field touched && outline-danger-150');
        }  
    }, [errors, touched])
    return { classesInput, classesLabel };
}
