import { useFormikContext } from 'formik';
import { Input } from '../../UI/Input';
import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg';


export const Item = (props) => {
    const { index, clickHandler, itemName, itemQty, itemPrice, variant } = props;
    const { handleBlur, values, setFieldValue } = useFormikContext();

    const getItemTotal = (item) => {
        return item ? (item.quantity * item.price).toFixed(2) : null;
    }

    const deleteItemHandler = (index) => {
        values.items.splice(index, 1);
        setFieldValue('items', values.items);
        clickHandler();
    }

    let classesItemContainer = variant === 'item' ? "pb-5 md:flex md:w-full md:pb-4" : "pb-5 md:flex md:w-full md:pb-4 md:mt-[-20px]";

    let classesParagraph = variant === 'item' ? "text-neutral-500 text-base/2 pb-1" : 'hidden';

    let classesButton = variant === 'item' ? 'pt-2 px-2 mt-6 md:pr-0 md:pl-6 md:mt-4 lg:mt-5 lg:pl-9' : 'pt-2 px-2 mt-6 md:pr-0 md:pl-6 md:mt-[-4px] lg:mt-[-8px] lg:pl-9'

    return (
        <li className={classesItemContainer}>
            <Input name={itemName} variant={variant} id="item-name" label="Item Name" type="text" onBlur={handleBlur}  classes=" pb-2 md:mr-4 md:pt-1 md:w-3.2/4"/>
            <div className='flex flex-row items-center space-x-4 w-full'>
                <Input name={itemQty} variant={variant} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classes="w-2.6/5 md:w-1/5 lg:w-1/4"/>
                <Input name={itemPrice} variant={variant} id="price" label="Price" type="number" onBlur={handleBlur} classes="w-4.3/5 md:w-2.3/5 lg:w-2.8/5"/>
                <div className=" w-1.1/4 md:w-1/5 lg:w-1/10 pt-4 pb-2.5 md:pt-1">
                    <p className={classesParagraph}>Total: </p>
                    <p className="text-dark-400 text-md/1 p-4 border rounded w-full mr-13.5 dark:bg-dark-100 dark:text-light-200 border-transparent md:mr-0 md:py-4 md:px-0 md:mt-2">{getItemTotal(values.items[index])}</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className={classesButton}>
                    <IconDelete />
                </button>
            </div>
        </li >
    )
}