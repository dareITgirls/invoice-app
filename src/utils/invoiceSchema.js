   export const getRandomNumber = (min, max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const createInvoiceId = () => {
        return `${alphabet[getRandomNumber(0, alphabet.length - 1)]}${alphabet[getRandomNumber(0, alphabet.length)]}${getRandomNumber(1, 9999)}`  
}
    
export const today = new Date().toISOString().split('T')[0];

export const invoiceSchema = {
    id: createInvoiceId(),
    createdAt: today,
    description: "",
    paymentTerms: "30",
    paymentDue: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    items: [
        {
            name: "",
            quantity: 0,
            price: 0,
            total: 0
        }
    ],
    total: 0
}

