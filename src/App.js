import './App.css';
import {runTransaction, collection, getDocs, doc, setDoc, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from "./config/firebase";
import {invoices} from "./consts/strings";
import {useEffect, useState} from "react";
import {fetchInvoices} from "./store/slice";
import {useSelector} from "react-redux";
import {store} from "./store/store";

function App() {

    const invoicesList = useSelector(state => state.invoices.entities)

    console.log(invoicesList)



    // const querySnapshot = await getDocs(collection(db, invoices))
        // let data = []
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        //     data.push(doc.data())
        // })
        // console.log(querySnapshot)
        // console.log(doc.data())
        // console.log(data)
        // await setDoc(doc(db, invoices, "LA"), {
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        // });



    useEffect(() => {
        store.dispatch(fetchInvoices())
        // readData();
    },[]);



  return (
    <div className="text-white font-bold bg-black h-screen flex flex-auto flex-col items-center justify-center">
      <h1 className="text-6xl m-20">Hello dareITgirl!</h1>
      <p className="text-3xl">Hope you doing great today!</p>
      <p className="text-3xl">Let's do some codin':D:D</p>
        <p></p>
    </div>
  );
}

export default App;
