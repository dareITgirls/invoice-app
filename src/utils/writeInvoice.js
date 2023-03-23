export const invoiceSchema = {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 0,
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

//w arg trzeba bedzie przekazac wszystkie pola obiektu (createdAt, paymentDue itd)
export function writeInvoice(id, status, name) {
    let newInvoice = invoiceSchema
    newInvoice.id = id
    newInvoice.status = status
    newInvoice.clientName = name
    return newInvoice
}
