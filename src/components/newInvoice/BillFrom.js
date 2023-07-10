import { useFormikContext } from 'formik';
import { Container } from '../../UI/Container';
import { Wrapper } from '../../UI/Wrapper';
import { Input } from '../../UI/Input';

export const BillFrom = () => {
    
    const { handleBlur } = useFormikContext();

    return (
        <section className="pb-7 lg:mt-[-2px]">
            <h2 className="text-primary-200 lg:text-md/2">Bill From</h2>
            <Input variant="full" name="senderAddress.street" id="street-address" label="Street Address" type="text" onBlur={handleBlur} />
            <Container>
                <Wrapper>
                    <Input classes="w-full" variant="full" name="senderAddress.city"  id="city" label="City" type="text" onBlur={handleBlur} />
                    <Input classes="w-full" variant="full" name="senderAddress.postCode"  id="post-code" label="Post Code" type="text" onBlur={handleBlur} />
                </Wrapper>
                <Input classes="md:w-2/4" variant="full" name="senderAddress.country" id="country" label="Country" type="text" onBlur={handleBlur} />
            </Container>
        </section>
    )
}