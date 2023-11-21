import * as Yup from 'yup';

const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{1,3})+$/;
const postCodeRegex = /[a-zA-Z0-9 ]*$/;

export const SignupSchema = Yup.object().shape({
  createdAt: Yup.string().required("can't be empty"),
  description: Yup.string()
    .min(1, 'Description is too short')
    .max(55, 'Description is too long')
    .required("can't be empty"),
  paymentTerms: Yup.string().required("can't be empty"),
  clientName: Yup.string()
    .min(3, 'Name is too short')
    .max(50, 'Name is too long')
    .required("can't be empty"),
  clientEmail: Yup.string()
    .matches(emailRegex, 'Please, provide valid e-mail address')
    .required("can't be empty"),
  senderAddress: Yup.object().shape({
    street: Yup.string()
      .min(2, 'Street is too short')
      .max(55, 'Street is too long')
      .required("can't be empty"),
    city: Yup.string()
      .min(2, 'City is too short')
      .max(55, 'City is too long')
      .required("can't be empty"),
    country: Yup.string()
      .min(2, 'Country is too short')
      .max(35, 'Country is too long')
      .required("can't be empty"),
    postCode: Yup.string()
      .matches(postCodeRegex, 'Please, provide valid post code')
      .min(2, 'Zipcode too short')
      .max(10, 'Zipcode too long')
      .required("can't be empty"),
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string()
      .min(2, 'Street is too short')
      .max(55, 'Street is too long')
      .required("can't be empty"),
    city: Yup.string()
      .min(2, 'City is too short')
      .max(55, 'City is too long')
      .required("can't be empty"),
    country: Yup.string()
      .min(2, 'Country is too short')
      .max(35, 'Country is too long')
      .required("can't be empty"),
    postCode: Yup.string()
      .matches(postCodeRegex, 'please, provide valid post code')
      .min(2, 'Zipcode too short')
      .max(10, 'Zipcode too long')
      .required("can't be empty"),
  }),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(3).max(25).required(),
      quantity: Yup.number().min(1).max(100).required(),
      price: Yup.number().min(0.1).max(10000).required(),
    }),
  ),
});
