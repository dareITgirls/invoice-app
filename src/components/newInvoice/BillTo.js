import { useFormikContext} from 'formik';

import { CustomDatePicker } from '../../UI/CustomDatePicker';
import { Dropdown } from '../../UI/Dropdown';
import { Input } from '../../UI/Input';

export const BillTo = () => {

    const { handleBlur } = useFormikContext();

    return (
        <section className="md:mt-2">
            <h2 className="text-primary-200 md:mb-1">Bill To</h2>
            <Input name="clientName" id="client-name" label="Client's Name" type="text" onBlur={handleBlur} />
            <Input name="clientEmail" id="client-email" label="Client's Email" type="text" onBlur={handleBlur} />
            <Input name="clientAddress.street" id="client-street" label="Street Address" type="text" onBlur={handleBlur} />
             <div className="md:flex md:w-full md:space-x-6">
                <div className="flex w-full space-x-6">
                    <Input styles="w-full" name="clientAddress.city" id="client-city" label="City" type="text" onBlur={handleBlur} />
                    <Input styles="w-full" name="clientAddress.postCode" id="client-post-code" label="Post Code" type="text" onBlur={handleBlur} />
                </div>
                <Input styles="md:w-[50%]" name="clientAddress.country" id="client-country" label="Country" type="text" onBlur={handleBlur} />
            </div>
            <div className="pt-3.5 md:flex md:space-x-6">
                <CustomDatePicker />
                <Dropdown />
            </div>
            <Input name="description" id="project-description" label="Project Description" type="text" onBlur={handleBlur} />
        </section>
    )
}