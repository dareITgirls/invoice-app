import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, deleteDoc, doc, getDocs, setDoc, updateDoc} from "firebase/firestore";

import {db} from "../firebase-config/firebase";
import {invoices} from "../utils/consts";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const querySnapshot = await getDocs(collection(db, invoices));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  }
);

export const addNewInvoice = createAsyncThunk(
  "invoices/addInvoice",
  async (invoiceToAdd) => {
    await setDoc(doc(db, invoices, invoiceToAdd.id), invoiceToAdd);
    return invoiceToAdd;
  }
);

export const editInvoice = createAsyncThunk(
  "invoices/editInvoice",
  async (invoiceToEdit) => {
    await updateDoc(doc(db, invoices, invoiceToEdit.id), invoiceToEdit);
    return invoiceToEdit;
  }
);

export const changeInvoiceStatus = createAsyncThunk(
    "invoices/changeInvoiceStatus",
    async (invoiceToChange) => {
        const status = await invoiceToChange.status === 'paid' ? 'pending' : 'paid';
        invoiceToChange = {...invoiceToChange, status: status}
        await updateDoc(doc(db, invoices, invoiceToChange.id), invoiceToChange);
        return invoiceToChange;
    }
);

export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (invoiceID) => {
    await deleteDoc(doc(db, invoices, invoiceID));
    return invoiceID;
  }
);
