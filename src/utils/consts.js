import createCache from '@emotion/cache';
export const invoices = "invoices";

export const getItemTotal = (item) => {
    if (item) {
        return (item.quantity * item.price).toFixed(2)
    }
    }

    export const getTotal = (items) => {
        return items.map((item) => item.total).reduce((sum, num) => sum + num, 0);
    }
    
    export const getPaymentDue = (createdAt, paymentTerms) => {
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
