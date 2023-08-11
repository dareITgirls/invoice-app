export const today = new Date().toISOString().split('T')[0];

export const invoiceSchema = {
    id: "",
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

