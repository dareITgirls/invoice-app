import { useFormikContext, Field } from 'formik';
import { Input } from '../../UI/Input';
import { Dropdown } from '../../UI/Dropdown';
import { CustomDatePicker } from '../../UI/CustomDatePicker';

export const BillTo = () => {
    const { handleBlur } = useFormikContext()
    return (
        <section>
            <h2 className="text-primary-200">Bill To</h2>
            <Input name="clientName" id="client-name" label="Client Name" type="text" onBlur={handleBlur} />
            <Input name="clientEmail" id="client-email" label="Client Email" type="text" onBlur={handleBlur} />
            <Input name="clientAddress.street" id="client-street" label="Street" type="text" onBlur={handleBlur} />
            <div className="flex space-x-6">
                <Input name="clientAddress.city" id="client-city" label="City" type="text" onBlur={handleBlur} />
                <Input name="clientAddress.postCode" id="client-post-code" label="Post Code" type="text" onBlur={handleBlur} />
            </div>
            <Input name="clientAddress.country" id="client-country" label="Country" type="text" onBlur={handleBlur} />
            <div className="select-wrapper">
                {/* <Input name="createdAt" id="invoice-date" label="Invoice Date" type="date" onBlur={handleBlur} /> */}
                <CustomDatePicker />
                <Dropdown />
            </div>
            <Input name="description" id="project-description" label="Project Description" type="text" onBlur={handleBlur} />
        </section>
    )
}