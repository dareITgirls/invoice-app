import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { Item } from '../components/forms/Item';

export const useListItems = () => {
     let res = window.screen.width;
    const { values } = useFormikContext();
    const [content, setContent] = useState();

    const emptyItem = {
        name: '',
        quantity: '0',
        price: '0',
        total: 0.00
    }

        const renderList = () => {
        setContent(values.items.map((_, index) => index === 0 || res < 768 ?
                <Item variant="item" index={0} itemName={`items[${index}].name`} itemQty={`items[${index}].quantity`} itemPrice={`items[${index}].price`} key={`items[${index}].name`} clickHandler={() => renderList()} />
            :
                <Item variant="no-label" index={index} itemName={`items[${index}].name`} itemQty={`items[${index}].quantity`} itemPrice={`items[${index}].price`} key={`items[${index}].name`} clickHandler={() => renderList()} />))
    }

        const handleAddingNewItem = () => {
        (values.items).push(emptyItem);
        renderList();
    }

    useEffect(() => { renderList() }, [])
    
    return { content, handleAddingNewItem }
}