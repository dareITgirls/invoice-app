import { useFormikContext } from 'formik';
import { useState } from 'react';

import { Button } from '../../UI/Button';
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg';
import { Item } from './Item';
import { NoLabelItem } from './NoLabelItem';


export const ItemList = () => {
    const getClientRes = () => {
        const resolution = window.screen.width;
        return resolution;
    }

    const { values, errors } = useFormikContext();
    const [res, setRes] = useState(getClientRes());
    const [content, setContent] = useState(res < 768 ? 
      <>   <Item index={0} key={Math.random()} clickHandler={() => renderList()} />
            <Item index={1} key={Math.random()} clickHandler={() => renderList()} /></> : 
        <> <Item index={0} key={Math.random()} clickHandler={() => renderList()} />
          <NoLabelItem index={1} key={ Math.random()} clickHandler={() => renderList()}/></>
  );

    const emptyItem = {
        name: '',
        quantity: '0',
        price: '0',
        total: 0.00
    }

    const renderList = () => {
        setContent(values.items.map((_, index) => index === 0 ? <Item index={0} key={Math.random()} clickHandler={() => renderList()} /> : res < 768 ? <Item index={index} key={Math.random()} clickHandler={() => renderList()} /> : <NoLabelItem index={index} key={ Math.random()} clickHandler={() => renderList()}/>))
    }

    const addNewItemHandler = () => {
        values.items.push(emptyItem);
        renderList();
    }

    const renderMainError = () => {
        if (Object.keys(errors).length > 0) {
            return <p className="text-danger-150 text-base/1">All fields must be added</p>
        } else {
            return null
        }
    }

    const renderItemsError = () => {
        if (errors.items) {
           return  <p className="text-danger-150 text-base/1">An item must be added</p>
        } else {
            return null;
        }
    }

    return (
        <section className="pt-15 pb-17 md:pt-4 md:pb-0 lg:pt-6">
            <h2 className="text-neutral-300 text-md/3 pb-1 md:pb-2">Item List</h2>
            <ul>  
                {content}
            </ul>
            <Button styles="bg-neutral-200 text-neutral-300 w-full flex items-center justify-center mt-5 mb-6 md:mt-[-8px] lg:mb-0" type="button" title="Add New Item" onClick={addNewItemHandler} >
                <IconPlus className="scale-75 mb-1"/>
            </Button>
            {renderMainError()}
            {renderItemsError()}          
        </section>
    )
}