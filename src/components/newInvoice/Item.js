import { useFormikContext } from 'formik';
import { ItemInput } from '../../UI/ItemInput';
import { ASSETS_LIBRARY } from '../../utils/consts';

export const Item = (props) => {

    const { handleBlur, values, setFieldValue } = useFormikContext();

    const { index, clickHandler } = props;

    const getItemTotal = (item) => {
        return item ? (item.quantity * item.price) : null;
    }

    const deleteItemHandler = (index) => {
        values.items.splice(index, 1);
        setFieldValue('items', values.items);
        clickHandler();
    }

    return (
        <li className="md:flex md:space-x-6 md:w-full">
            <ItemInput name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} classname="md:w-full"/>
            <div className='flex items-center space-x-4 md:space-x-6'>
                <ItemInput name={`items[${index}].quantity`} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classname="md:w-16"/>
                <ItemInput name={`items[${index}].price`} id="price" label="Price" type="number" onBlur={handleBlur} classname="md:w-24"/>
                <div>
                      <p className="text-neutral-500 text-base/1 pb-2">Total: </p><p className="text-dark-400 text-md/1 py-3 w-full mr-14">{ getItemTotal(values.items[index]) }</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className='p-3 mt-6'><img className="w-4" src={ASSETS_LIBRARY.icons.delete} /></button>
            </div>
        </li >
    )
}