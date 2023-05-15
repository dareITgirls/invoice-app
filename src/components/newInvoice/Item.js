import { useFormikContext } from 'formik';
import { Input } from '../../UI/Input';
import { ASSETS_LIBRARY } from '../../utils/consts';

export const Item = (props) => {
    const { handleBlur, values } = useFormikContext();

    const { index, deleteItemHandler } = props;

     const getItemTotal = (item) => {
         return (item.quantity * item.price).toFixed(2);
    }

    return (
        <li>
            <Input name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} />
            <div className='flex items-center space-x-4'>
                <Input name={`items[${index}].quantity`} id="Qty" label="Qty." type="number" onBlur={handleBlur} />
                <Input name={`items[${index}].price`} id="price" label="Price" type="number" onBlur={handleBlur} />
                <div>
                      <p className="text-neutral-500 text-base/1 pb-2">Total: </p><p className="text-dark-400 text-md/1 py-3 w-full mr-14">{ getItemTotal(values.items[index])}</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className='p-3 mt-6'><img className="w-8" src={ASSETS_LIBRARY.icons.delete} /></button>
            </div>
        </li >
    )
}