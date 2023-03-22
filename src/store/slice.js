import { createSlice } from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";
import {invoices} from "../consts/strings";

const initialState = {
    entities: []
}

const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        invoicesLoaded: (state, action) => {
            // const newEntities = {}
            // action.payload.forEach((invoice) => {
            //     newEntities[invoice.id] = invoice
            // })
            // state.entities = newEntities
            state.entities = action.payload
        }
    }
});

export const { invoicesLoaded } = invoicesSlice.actions;

export default invoicesSlice.reducer;

export const fetchInvoices = () => async(dispatch) => {
    console.log("calling fetch")
    const querySnapshot = await getDocs(collection(db, invoices))
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })
    // console.log(data)
    dispatch(invoicesLoaded(data))
}


