import { Field, useFormikContext } from 'formik';


export const Dropdown = () => {

    const { handleBlur } = useFormikContext();

    return (
        <div className=" text-base/1 flex flex-col py-3">
            <label className="text-neutral-500 pb-1" htmlFor="payment-terms">Payment terms</label>
            <Field
                className="text-dark-400 text-md/1 border rounded p-3 w-full cursor-pointer"
                as="select"
                name="paymentTerms"
                id="payment-terms"
                onBlur={handleBlur}
                >   
                    <option value="30">Next 30 Days</option>
                    <option value="90">Next 3 Months</option>
                    <option value="180">Next 6 Months</option>
            </Field>
        </div>
        ) 
   }
