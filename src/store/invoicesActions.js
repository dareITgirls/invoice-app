import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, deleteDoc, doc, getDocs, setDoc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import {invoices} from "../utils/consts";

//fetching data
export const fetchInvoices = createAsyncThunk('invoices/fetchInvoices', async() => {
    const querySnapshot = await getDocs(collection(db, invoices))
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })
    return data;
});

//adding new invoice
//na razie jest tak, ze po wywoluaniu funkcji np na onclick, przekazujemy jej jako arg funkcje createNewInvoice, ktora
//zwraca obiekt invoice i ma w domysle przyjmowac jako argumenty wartosci z formularza i uzupelniac nimi klucze obiektu
// czyli wartosci z formularza buduja obiekt z nowa invoice w metodzie createNewInvoice, ktory
//potem przekazujemy do funkcji addNewInvoice i wysylamy do bazy
//pewnie da sie to uproscic, ale na razie nie mam pomyslu jak
//nie ma tez jeszcze rozroznienia na opcje zapisz jako draft i zapisz wyslij (czyli odmienne ustawienie statusu),
//ale to chyba bedziemy rozwiazywac przy odpalaniu metody na konkretny button

export const addNewInvoice = createAsyncThunk('invoices/addInvoice', async(invoiceToAdd) => {
    await setDoc(doc(db, invoices, invoiceToAdd.id), invoiceToAdd);
    return invoiceToAdd;
});

//editing invoice - j/w
export const editInvoice = createAsyncThunk('invoices/editInvoice', async(invoiceToEdit) => {
    await updateDoc(doc(db, invoices, invoiceToEdit.id), invoiceToEdit)
    return invoiceToEdit;
});


//deleting invoice
export const deleteInvoice = createAsyncThunk('invoices/deleteInvoice', async(invoiceID) => {
    await deleteDoc(doc(db, invoices, invoiceID))
    return invoiceID;
})