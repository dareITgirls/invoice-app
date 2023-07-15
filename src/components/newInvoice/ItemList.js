import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { getError, splitName } from '../../utils/consts';
import { Button } from '../../UI/Button';
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg';
import { Item } from './Item';



export const ItemList = () => {
    let res = window.screen.width;

    const { values, errors, touched } = useFormikContext();
    const [content, setContent] = useState();
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
        renderList(); 
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

    const emptyItem = {
        name: '',
        quantity: '0',
        price: '0',
        total: 0.00
    }

    const renderList = () => {
        setContent(values.items.map((_, index) => index === 0 ?
                <Item variant="item" index={0} itemName={`items[${index}].name`} itemQty={`items[${index}].quantity`} itemPrice={`items[${index}].price`} key={Math.random()} clickHandler={() => renderList()} />
            : res < 768 ?
                <Item variant="item" index={index} itemName={`items[${index}].name`} itemQty={`items[${index}].quantity`} itemPrice={`items[${index}].price`} key={Math.random()} clickHandler={() => renderList()} />
            :
                <Item variant="no-label" index={index} itemName={`items[${index}].name`} itemQty={`items[${index}].quantity`} itemPrice={`items[${index}].price`} key={Math.random()} clickHandler={() => renderList()} />))
    }

    const addNewItemHandler = () => {
        values.items.push(emptyItem);
        renderList();
    }

    return (
        <section className="pt-15 pb-17 md:pt-4 md:pb-0 lg:pt-[26px] lg:mb-[-3px]">
            <h2 className="text-neutral-300 text-md/3 pb-1 md:pb-2 lg:pb-[6px]">Item List</h2>
            <ul>  
                {content}
            </ul>
            <Button styles="bg-neutral-100 dark:bg-dark-100 hover:bg-neutral-200 text-neutral-300 w-full flex items-center justify-center mt-[11px] md:mt-[-10px] mb-6
            md:mb-[80px]  lg:mb-6" type="button" title="Add New Item" onClick={addNewItemHandler} >
                <IconPlus className="scale-75 mb-2"/>
            </Button>
            <p className={classesMainError}>All fields must be added</p>
            <p className={classesItemError}>An item must be added</p>
        </section>
    )
}