import { useFormikContext, Field } from 'formik';
import { NoLabelInput } from "../../UI/NoLabelInput";
import { ASSETS_LIBRARY } from '../../utils/consts';

export const NoLabelItem = (props) => {

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
        <li className="pb-5 md:flex md:w-full md:pb-4 md:mt-[-20px]">
            <div className={`pt-4 pb-2.5 md:w-53.5 md:mr-4 md:pt-1`}> 
            <Field className="field" name={`items[${index}].name`} id="item-name" label="Item Name" type="text" onBlur={handleBlur} />
        </div>
            <div className='flex flex-row items-center space-x-4'>
                <NoLabelInput name={`items[${index}].quantity`} id="Qty" label="Qty." type="number" onBlur={handleBlur}  classes="w-33 md:w-11"/>
                <NoLabelInput name={`items[${index}].price`} id="price" label="Price" type="number" onBlur={handleBlur} classes=" w-50 md:w-[100px]"/>
                <div className="pt-4 pb-2.5 md:pt-1">
                    <p className="text-dark-400 text-md/1 p-4 border rounded w-full mr-13.5 dark:bg-dark-100 dark:text-light-200 border-transparent md:mr-0 md:py-4 md:px-0 md:mt-2">{getItemTotal(values.items[index])}</p>
                </div>              
                <button type="button" onClick={() => deleteItemHandler(index)} className='pt-2 px-2 mt-6 md:pr-0 md:pl-6 md:mt-[-4px] lg:mt-[-8px] lg:pl-9'><img className="w-7 md:w-3 lg:w-[14px]" src={ASSETS_LIBRARY.icons.delete} /></button>
            </div>
        </li >
    )
}