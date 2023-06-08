import { useState, useEffect } from 'react';
import { useFormikContext, ErrorMessage } from 'formik';
import { Item } from './Item'; 
import { Button } from '../../UI/Button';
import { ASSETS_LIBRARY } from '../../utils/consts';


export const ItemList = () => {

    const { values, errors } = useFormikContext();

    const [content, setContent] = useState(<Item index={0} key={ Math.random()} clickHandler={() => renderList()}/>);

    const emptyItem = {
        name: '',
        quantity: '',
        price: '',
        total: 0
    }

    const renderList = () => {
        setContent(values.items.map((item, index) => <Item index={index} key={Math.random()} clickHandler={() => renderList()} />))
    }

    const addNewItemHandler = () => {
        values.items.push(emptyItem)
        renderList()
    }

    const renderMainError = () => {
        if (Object.keys(errors).length > 0) {
            return <p className="text-danger-150 text-base/1">All fields must be added</p>
        }
    }

    const renderItemsError = () => {
        if (errors.items) {
           return  <p className="text-danger-150 text-base/1">An item must be added</p>
       }
    }

    return (
        <section className="pt-12 pb-12">
            <h2 className="text-neutral-300">Item List</h2>
            <ul>
                {content}
            </ul>
            <Button styles="bg-neutral-200 text-neutral-300 w-full flex items-center justify-center my-6" type="button" title="Add New Item" onClick={addNewItemHandler} ><img className="pr-2" src={ASSETS_LIBRARY.icons.plus} /></Button>
            {renderMainError()}
            {renderItemsError()}          
        </section>
    )
}