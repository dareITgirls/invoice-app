import { useFormikContext } from 'formik';
import { Container } from '../../UI/Container';
import { Wrapper } from '../../UI/Wrapper';
import { Input } from '../../UI/Input';

export const BillFrom = () => {
    const { handleBlur } = useFormikContext();

    return (
        <section className="pb-8">
            <h2 className="text-primary-200 text-md/1 pb-[10px]">Bill From</h2>
            <Input variant="full" name="senderAddress.street" id="street-address" label="Street Address" type="text" onBlur={handleBlur} />
            <Container>
                <Wrapper>
                    <Input classes="w-full" variant="address" name="senderAddress.city"  id="city" label="City" type="text" onBlur={handleBlur} />
                    <Input classes="w-full" variant="address" name="senderAddress.postCode"  id="post-code" label="Post Code" type="text" onBlur={handleBlur} />
                </Wrapper>
                <Input classes="md:w-2.3/5" variant="address" name="senderAddress.country" id="country" label="Country" type="text" onBlur={handleBlur} />
            </Container>
        </section>
    )
}