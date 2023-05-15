import * as Yup from "yup";

const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{1,3})+$/;
const postCodeRegex = /\d{2}-\d{3}/;

export const SignupSchema =
     Yup.object().shape({
//     Yup.object()
// .when('status', {
//     is: 'pending',
//     then: Yup.object().shape({
     createdAt: Yup.string()
            .required("can't be empty"),
        description: Yup.string()
            .min(1, "Description is too short")
            .max(12, "Description is too long")
            .required("can't be empty"),
        paymentTerms: Yup.string()
            .required("can't be empty"),
        clientName: Yup.string()
            .min(3, 'Name is too short')
            .max(50, 'Name is too long')
            .required("can't be empty"),
        clientEmail: Yup.string()
            .matches(emailRegex, 'Please, provide valid e-mail address')
            .required("can't be empty"),
        senderAddress: Yup.object().shape({
            street: Yup.string()
                .min(2, "Street is too short")
                .max(24, 'Street is too long')
                .required("can't be empty"),
            city: Yup.string()
                .min(2, "City is too short")
                .max(12, 'City is too long')
                .required("can't be empty"),
            country: Yup.string()
                .min(2, "Country is too short")
                .max(12, 'Country is too long')
                .required("can't be empty"),
            postCode: Yup.string()
                .matches(postCodeRegex, "Please, provide valid post code")
                .required("can't be empty"),
        }),
        clientAddress: Yup.object().shape({
            street: Yup.string()
                .min(2, "Street is too short")
                .max(24, 'Street is too long')
                .required("can't be empty"),
            city: Yup.string()
                .min(2, "City is too short")
                .max(12, 'City is too long')
                .required("can't be empty"),
            country: Yup.string()
                .min(2, "Country is too short")
                .max(12, 'Country is too long')
                .required("can't be empty"),
            postCode: Yup.string()
                .matches(postCodeRegex, "please, provide valid post code")
                .required("can't be empty"),
        }),
        items: Yup.array(Yup.object().shape({
            name: Yup.string()
                .min(2, "Item name is too short")
                .max(24, 'Item name is too long')
                .required("can't be empty"),
            quantity: Yup.number()
                .min(1, "There has to be at least 1 item")
                .max(100, "There is at most 100 items")
                .required("can't be empty"),
            price: Yup.number()
                .min(0.1, "Price is too low")
                .max(999999.99, "Price is too high")
                .required("can't be empty")
        }),
        ),
    })
 //})
    

 