import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

export const useErrorDisplay = (name) => {
    const { errors, touched } = useFormikContext();
    const [classesInput, setClassesInput] = useState('field touched && outline-danger-150');
    const [classesLabel, setClassesLabel] = useState('label');
    
    const splitName = (name) => { 
        console.log(name)
        return name.includes('[') ? name = name.replace(/\[|\]/g, '.').split('.') : name.includes('.') ? name.split('.') : name
    }

    const getError = () => {
        if (splitName(name).length > 2 && touched[splitName(name)[0]] && errors[splitName(name)[0]]) {
            if (touched[splitName(name)[0]][splitName(name)[1]] && errors[splitName(name)[0]][splitName(name)[1]]) {
                if (touched[splitName(name)[0]][splitName(name)[1]][splitName(name)[3]] && errors[splitName(name)[0]][splitName(name)[1]][splitName(name)[3]]) {
                    return true
                }
            }
        }
        if (splitName(name).length > 1 && splitName(name) <= 2 && touched[splitName(name)[0]] && errors[splitName(name)[0]]) {
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

    return { classesInput, classesLabel };
}
