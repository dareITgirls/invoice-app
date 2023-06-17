import { useFormikContext, Field } from 'formik';
import { ItemInput } from '../../UI/ItemInput';
import { ASSETS_LIBRARY } from '../../utils/consts';

export const Item = (props) => {

    const { handleBlur, values, setFieldValue } = useFormikContext();

    const { index, clickHandler } = props;

    const getItemTotal = (item) => {
        return item ? (item.quantity * item.price).toFixed(2) : null;
    }

    const deleteItemHandler = (index) => {
        values.items.splice(index, 1);
        setFieldValue('items', values.items);
        clickHandler();
    }

    return (
        <li className="pb-5 md:flex md:w-full md:pb-4">
            {/* <ItemInput name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} classes="md:w-full" /> */}
            
              <div className={`pt-4 pb-2.5 md:w-53.5 md:mr-4 md:pt-1`}>
                <div className="flex justify-between pb-1">
                    <label className="text-neutral-500 text-base/2 pb-2 md:pb-1" htmlFor="item-name">Item Name</label>
                </div>
            <Field className="text-dark-400 text-md/1 p-4 border rounded w-full dark:bg-dark-100 dark:text-light-200 dark:border-transparent md:mt-1" name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} />
        </div>
            <div className='flex flex-row items-center space-x-4'>
                <ItemInput name={`items[${index}].quantity`} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classes="w-33 md:w-11"/>
                <ItemInput name={`items[${index}].price`} id="price" label="Price" type="number" onBlur={handleBlur} classes=" w-50 md:w-[100px]"/>
                <div className="pt-4 pb-2.5 md:pt-1">
                    <p className="text-neutral-500 text-base/2 pb-1">Total: </p>
                    <p className="text-dark-400 text-md/1 p-4 border rounded w-full mr-13.5 dark:bg-dark-100 dark:text-light-200 border-transparent md:mr-0 md:py-4 md:px-0 md:mt-2">{getItemTotal(values.items[index])}</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className='pt-2 px-2 mt-6 md:pr-0 md:pl-6 md:mt-6'><img className="w-7 md:w-3" src={ASSETS_LIBRARY.icons.delete} /></button>
            </div>
        </li >
    )
}