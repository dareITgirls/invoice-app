import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

export const useErrorDisplay = (name) => {
    const { errors, touched } = useFormikContext();
    const [classesInput, setClassesInput] = useState('field touched && outline-danger-150');
    const [classesLabel, setClassesLabel] = useState('label');
    
    const splitName = (name) => { 
        return name.includes('[') ? name = name.replace(/\[|\]/g, '.').split('.') : name.includes('.') ? name.split('.') : [name];
    }

    let splitted = splitName(name);

    const getError = () => {
     
            if (splitted.length > 2 && touched[splitted[0]] && errors[splitted[0]] && touched[splitted[0]][splitted[1]] && errors[splitted[0]][splitted[1]] && touched[splitted[0]][splitted[1]][splitted[3]] && errors[splitted[0]][splitted[1]][splitted[3]]) {
                return true;
            }
            if (splitted.length === 2 && touched[splitted[0]] && errors[splitted[0]] && touched[splitted[0]][splitted[1]] && errors[splitted[0]][splitted[1]]) {
                return true;
            }
            if (touched[splitted] && errors[splitted]) {
                return true
            }
        }  
    
    useEffect(() => {
        getError() ? setClassesLabel('text-base/2 pb-1 text-danger-150') : setClassesLabel('label');
        getError() ? setClassesInput('field outline outline-1 outline-danger-150') : setClassesInput('field touched && outline-danger-150');
    }, [errors, touched])

    return { classesInput, classesLabel };
}
