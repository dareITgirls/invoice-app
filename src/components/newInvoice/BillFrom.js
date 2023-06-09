import { useFormikContext } from 'formik';
import { Input } from '../../UI/Input';

export const BillFrom = () => {
    const { handleBlur } = useFormikContext();

    return (
        <section className="pb-7">
            <h2 className="text-primary-200">Bill From</h2>
            <Input name="senderAddress.street" id="street-address" label="Street Address" type="text" onBlur={handleBlur} />
            <div className="md:flex md:space-x-6">
                <div className="flex space-x-6">
                    <Input name="senderAddress.city"  id="city" label="City" type="text" onBlur={handleBlur} />
                    <Input name="senderAddress.postCode"  id="post-code" label="Post Code" type="text" onBlur={handleBlur} />
                </div>
                <Input name="senderAddress.country" id="country" label="Country" type="text" onBlur={handleBlur} />
            </div>
        </section>
    )
}