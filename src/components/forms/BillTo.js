import { useFormikContext } from 'formik';

import { Container } from '../../UI/Container';
import { CustomDatePicker } from '../../UI/CustomDatePicker';
import { Dropdown } from '../../UI/Dropdown';
import { Input } from '../../UI/Input';
import { Wrapper } from '../../UI/Wrapper';

export const BillTo = () => {
  const { handleBlur } = useFormikContext();

  return (
    <section className="md:mt-2 ">
      <h2 className="text-primary-200 text-md/1 pb-2">Bill To</h2>
      <Input
        name="clientName"
        variant="full"
        id="client-name"
        label="Client's Name"
        type="text"
        onBlur={handleBlur}
      />
      <Input
        name="clientEmail"
        variant="full"
        id="client-email"
        label="Client's Email"
        type="text"
        onBlur={handleBlur}
      />
      <Input
        name="clientAddress.street"
        variant="full"
        id="client-street"
        label="Street Address"
        type="text"
        onBlur={handleBlur}
      />
      <Container>
        <Wrapper>
          <Input
            classes="w-full"
            variant="address"
            name="clientAddress.city"
            id="client-city"
            label="City"
            type="text"
            onBlur={handleBlur}
          />
          <Input
            classes="w-full"
            variant="address"
            name="clientAddress.postCode"
            id="client-post-code"
            label="Post Code"
            type="text"
            onBlur={handleBlur}
          />
        </Wrapper>
        <Input
          classes="md:w-2.3/5"
          variant="address"
          name="clientAddress.country"
          id="client-country"
          label="Country"
          type="text"
          onBlur={handleBlur}
        />
      </Container>
      <div className="pb-4 md:flex md:space-x-6">
        <CustomDatePicker />
        <Dropdown />
      </div>
      <Input
        name="description"
        variant="full"
        id="project-description"
        label="Project Description"
        type="text"
        onBlur={handleBlur}
      />
    </section>
  );
};
