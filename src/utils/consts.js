import createCache from '@emotion/cache';
export const invoices = "invoices";

const getItemTotal = (item) => {
    if (item) {
        return (item.quantity * item.price).toFixed(2)
        }
    }

const getTotal = (items) => {
    return items.map((item) => item.total).reduce((sum, num) => (parseFloat(sum) + parseFloat(num)).toFixed(2));
}
    
const getPaymentDue = (createdAt, paymentTerms) => {
    const paymentDue = new Date();
    const date = new Date(createdAt)
    const dayInFuture = date.getDate() + Number(paymentTerms)
    paymentDue.setDate(dayInFuture)
    return paymentDue.toISOString().split('T')[0]
}

export const firstLetterToUpper = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const cache = createCache({
  key: 'css',
  prepend: true,
});

export const getError = (splitted, errors, touched) => {
     
        if (splitted.length > 2 && touched[splitted[0]] && errors[splitted[0]] && touched[splitted[0]][splitted[1]] && errors[splitted[0]][splitted[1]] && touched[splitted[0]][splitted[1]][splitted[3]] && errors[splitted[0]][splitted[1]][splitted[3]]) {
                return true;
            }
        if (splitted.length === 2 && touched[splitted[0]] && errors[splitted[0]] && touched[splitted[0]][splitted[1]] && errors[splitted[0]][splitted[1]]) {
                return true;
            }
        if (touched[splitted] && errors[splitted]) {
                return true
        }
} 
    
export const splitName = (name) => { 
        return name.includes('[') ? name = name.replace(/\[|\]/g, '.').split('.') : name.includes('.') ? name.split('.') : [name];
}
    
 export const changeDateFormat = (givenDate) => {
    const date = new Date(givenDate).toDateString().split(" ");
    const formatedDate = `${date[2]} ${date[1]} ${date[3]}`;

    return formatedDate;
};
  
   const getRandomNumber = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

   export const createInvoiceId = () => {
        return `${alphabet[getRandomNumber(0, alphabet.length - 1)]}${alphabet[getRandomNumber(0, alphabet.length)]}${getRandomNumber(1, 9999)}`  
}

    export const calculateInvoiceValues = (values) => {
        values.id === '' ? values.id = createInvoiceId() : values.id;
        values.paymentDue = getPaymentDue(values.createdAt, values.paymentTerms)
        if (values.items.length > 0) {
        values.items.map((item) => item.total = getItemTotal(item))
        values.total = getTotal(values.items);
        }
    return values;
}

  export const logErrorToService = (error) => {
  console.error("Caught an error:", error);
}

