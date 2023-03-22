import {collection, getDocs, doc, deleteDoc, setDoc, updateDoc} from "firebase/firestore";
import {useEffect} from 'react'
import {invoices} from "../consts/strings";
import {db} from "../config/firebase";

//pobieranie danych:
// - na każde odpalenie strony głównej
// - przy każdej aktualizacji stanu pobieranie na nowo
// export async function readData() {
//     const querySnapshot = await getDocs(collection(db, invoices))
//     let data
//     querySnapshot.forEach((doc) => {
//         // console.log(doc.id, " => ", doc.data());
//         data = doc.data()
//     })
// }


//chcemy też móc pobierać tylko po ID (do edycji) i po statusie (generowanie listy o określonym statusie)
// na razie może to róbmy na poziomie manipulacji stanem


//dodawanie nowej faktury w param przekazujemy nowe ID - wysyłanie onClick zapisz
export async function addInvoice(newInvoice) {
    await setDoc(doc(db, invoices, newInvoice.id), {
       //opis stanu, elementów
    });
}

//edycja istniejącej faktury - wysłanie onClick zapisz
export async function editAndSendInvoice(editedInvoice) {
    await updateDoc(doc(db, invoices, editedInvoice.Id), {
        name: "Warsaw"
    })
}


//usuwanie onClick button Delete

export async function deleteItem(idNumber) {
    await deleteDoc(doc(db, invoices, doc.idNumber))
}





