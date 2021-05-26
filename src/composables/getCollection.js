import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

function getCollection(collection) {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log(snap)
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.error(err.message);
      documents.value = null;
      error.value = "Could not retrieve data. Please check console.";
    }
  );

  watchEffect((onInvalidate) => {
    //unsubscribe from previous collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { documents, error };
}

export default getCollection;
