/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase-config/firebase";
import { invoices } from "../utils/consts";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async (obj, {rejectWithValue, fulfillWithValue}) => {
    try {
      const querySnapshot = await getDocs(collection(db, invoices));
      if (querySnapshot.empty) {
         throw rejectWithValue('there was a problem with fetching invoices...')
      }
        const data = [];
        querySnapshot.forEach((doc) => {
        data.push(doc.data());
        });
      return fulfillWithValue(data);
      
    } catch (error) {
      console.error("Error fetching invoices: ", error);
      return rejectWithValue(error.payload)
    }
  }
);

export const addNewInvoice = createAsyncThunk(
  "invoices/addInvoice",
  async (invoiceToAdd, {rejectWithValue, fulfillWithValue}) => {
    try {
      await setDoc(doc(db, invoices, invoiceToAdd.id), invoiceToAdd);
      return fulfillWithValue(invoiceToAdd)
    } catch (error) {
      console.error("Error adding invoice:", error);
      rejectWithValue(error)
    }
  }
);

export const editInvoice = createAsyncThunk(
  "invoices/editInvoice",
  async (invoiceToEdit, {rejectWithValue, fulfillWithValue}) => {
    try {
      await updateDoc(doc(db, invoices, invoiceToEdit.id), invoiceToEdit);
      return fulfillWithValue(invoiceToEdit);
    } catch (error) {
      console.error("Error editing invoice: ", error);
      rejectWithValue(error)
    }
  }
);

export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (invoiceID, {rejectWithValue, fulfillWithValue}) => {
    try {
      await deleteDoc(doc(db, invoices, invoiceID));
      return fulfillWithValue(invoiceID);
    } catch (error) {
      console.error("Error deleting invoice:", error);
      rejectWithValue(error)
    }
  }
);
