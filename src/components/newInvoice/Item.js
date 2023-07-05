import { useFormikContext, Field } from 'formik';
import { useErrorDisplay } from '../../hooks/useErrorDisplay';
import { ItemInput } from '../../UI/ItemInput';
import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg';


export const Item = (props) => {
    const { index, clickHandler } = props;
    const { handleBlur, values, setFieldValue } = useFormikContext();
    const { classesInput, classesLabel } = useErrorDisplay(name)

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
            <div className={`pt-4 pb-2 md:mr-4 md:pt-1 md:w-3.2/4`}>
                <div className="flex justify-between pb-2">
                    <label className={classesLabel} htmlFor="item-name">Item Name</label>
                </div>
                <Field className={classesInput} name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} />
            </div>
            <div className='flex flex-row items-center space-x-4 w-full'>
                <ItemInput name={`items[${index}].quantity`} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classes="w-2.6/5 md:w-1/5 lg:w-1/4"/>
                <ItemInput name={`items[${index}].price`} id="price" label="Price" type="number" onBlur={handleBlur} classes="w-4.3/5 md:w-2.3/5 lg:w-2.8/5"/>
                <div className=" w-1.1/4 md:w-1/5 lg:w-1/10 pt-4 pb-2.5 md:pt-1">
                    <p className="text-neutral-500 text-base/2 pb-1">Total: </p>
                    <p className="text-dark-400 text-md/1 p-4 border rounded w-full mr-13.5 dark:bg-dark-100 dark:text-light-200 border-transparent md:mr-0 md:py-4 md:px-0 md:mt-2">{getItemTotal(values.items[index])}</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className='pt-2 px-2 mt-6 md:pr-0 md:pl-6 md:mt-4 lg:mt-5 lg:pl-9'>
                    <IconDelete />
                </button>
            </div>
        </li >
    )
}