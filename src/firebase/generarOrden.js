import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden =  (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

        // generar el objeto orden
        const orden = {
            buyer: datos,
            items: carrito.map((el) => ({id: el.id, precio: el.price, cantidad: el.cantidad})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        // enviar la orden a firestore

        // batch de atualizacion

        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('productos')
            
            
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(prod => prod.id === doc.id)

           
        })

        if (outOfStock.length === 0) {
            orders.add(orden)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
        } else {
           reject(outOfStock)
        }
    })   
}

