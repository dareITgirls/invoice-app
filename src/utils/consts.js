export const invoices = "invoices";

export const ASSETS_LIBRARY = {
    icons: {
        arrowDown: './assets/icon-arrow-down.svg',
        arrowLeft: './assets/icon-arrow-left.svg',
        arrowRight: './assets/icon-arrow-right.svg',
        calendar: './assets/icon-calendar.svg',
        check: './assets/icon-check.svg',
        delete: './assets/icon-delete.svg',
        moon: './assets/icon-moon.svg',
        plus: './assets/icon-plus.svg',
        sun: './assets/icon-sun.svg',
    },
    images: {
        empty: './assets/illustration-empty.svg',
        avatar: './assets/image-avatar.jpg',
        logo: './assets/logo.svg'
    }
}

    export const getItemTotal = (item) => {
        return (item.quantity * item.price).toFixed(2)
    }

    export const getTotal = (items) => {
        return items.map((item) => item.total).reduce((sum, num) => sum + num, 0).toFixed(2);
    }
    
    export const getPaymentDue = (createdAt, paymentTerms) => {
        const paymentDue = new Date();
        const date = new Date(createdAt)
        const dayInFuture = date.getDate() + Number(paymentTerms)
        paymentDue.setDate(dayInFuture)
        return paymentDue.toISOString().split('T')[0]
    }
