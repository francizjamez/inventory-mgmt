import { firestoreRef } from "./firebase.config";

export async function test() {
  const res = await firestoreRef.collection("mobiles").get();
  const mobiles = res.docs.map((doc) => doc.data());
  console.log(mobiles);
}

export async function add(item, collection) {
  const res = await firestoreRef.collection(collection).add(item);
  return res;
}

export async function getItemCollectionFromDatabase(collection) {
  const res = await firestoreRef.collection(collection).get();
  const itemCollections = res.docs.map((doc) => doc.data());
  return itemCollections;
}
