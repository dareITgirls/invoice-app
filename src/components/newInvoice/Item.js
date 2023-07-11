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

    let classesItemContainer = variant === 'item' ? "pb-6 md:flex md:w-full md:pb-4" : "pb-5 md:flex md:w-full md:pb-4 md:mt-[-20px]";

    let classesButton = variant === 'item' ? 'pt-2 px-2 mt-4 md:pr-0  md:mt-4 lg:mt-5 ' : 'pt-2 px-2 mt-5 md:pr-0  md:mt-[-4px] lg:mt-[-8px] '

    let inputName = index === 0 ? 'item-name' : variant;

    return (
        <li className={classesItemContainer}>
            <Input name={itemName} variant={inputName} id="item-name" label="Item Name" type="text" onBlur={handleBlur}  classes=" pb-2 md:mr-4 md:pt-1 md:w-3.2/4"/>
            <div className='flex flex-row items-center space-x-4 w-full'>
                <Input name={itemQty} variant={variant} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classes="w-[20%] md:w-1/5 lg:w-[30%]"/>
                <Input name={itemPrice} variant={variant} id="price" label="Price" type="number" onBlur={handleBlur} classes="w-[30%] md:w-2.3/5 lg:w-[63%]"/>
                <Input name="itemTotal" variant={variant} id="total" label="Total:" value={ getItemTotal(values.items[index])} classes="w-[27%] lg:w-[38%]"/>
                <button type="button" onClick={() => deleteItemHandler(index)} className={classesButton}>
                    <IconDelete />
                </button>
            </div>
        </li >
    )
}