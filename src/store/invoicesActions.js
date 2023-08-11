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
  async (obj, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    try {
      const querySnapshot = await getDocs(collection(db, invoices));
      if (querySnapshot.empty) {
         return rejectWithValue('bubka')
      }
        const data = [];
        querySnapshot.forEach((doc) => {
        data.push(doc.data());
        });
      return fulfillWithValue(data);
      
    } catch (error) {
      console.error("Error fetching invoices:", error);
         throw rejectWithValue(error.message)
    }
  }
);

export const addNewInvoice = createAsyncThunk(
  "invoices/addInvoice",
  async (invoiceToAdd) => {
    try {
      await setDoc(doc(db, invoices, invoiceToAdd.id), invoiceToAdd);
      return invoiceToAdd;
    } catch (error) {
      console.error("Error adding invoice:", error);
      throw error;
    }
  }
);

export const editInvoice = createAsyncThunk(
  "invoices/editInvoice",
  async (invoiceToEdit) => {
    try {
      await updateDoc(doc(db, invoices, invoiceToEdit.id), invoiceToEdit);
      return invoiceToEdit;
    } catch (error) {
      console.error("Error editing invoice:", error);
      throw error;
    }
  }
);

export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (invoiceID) => {
    try {
      await deleteDoc(doc(db, invoices, invoiceID));
      return invoiceID;
    } catch (error) {
      console.error("Error deleting invoice:", error);
      throw error;
    }
  }
);
