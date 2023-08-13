import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { getError, splitName } from '../utils/consts';


export const useErrors = () => {
    const { values, errors, touched } = useFormikContext();
    const [mainErrors, setMainErrors] = useState([]);
    const [itemErrors, setItemErrors] = useState([]);

    const items = [];
    for (let i = 0; i < values.items.length; i++) {
        items.push(`items[${i}].name`, `items[${i}].quantity`, `items[${i}].price`);
    }

    const names = ['createdAt', 'description', 'clientName', 'clientEmail', 'senderAddress.street', 'senderAddress.city', 'senderAddress.country', 'senderAddress.postCode', 'clientAddress.street', 'clientAddress.city', 'clientAddress.country', 'clientAddress.postCode'];

    const mainResult = [];
    const itemResult = [];

    useEffect(() => {
        for (let i = 0; i < names.length; i++) {
            let splitted = splitName(names[i]);
            mainResult.push(getError(splitted, errors, touched));
        }
        setMainErrors(mainResult);
        for (let i = 0; i < items.length; i++) {
            let splitted = splitName(items[i]);
            itemResult.push(getError(splitted, errors, touched));
        }
        setItemErrors(itemResult)
    }, [errors, touched]);

    let classesMainError = mainErrors.includes(true) || itemErrors.includes(true)  ? "text-danger-150 text-base/1" : 'hidden';
    let classesItemError = itemErrors.includes(true) ? "text-danger-150 text-base/1" : 'hidden';

    return { classesMainError, classesItemError}
}