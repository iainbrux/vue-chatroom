import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

function useCollection(collection) {
  const error = ref(null);

  async function addDoc(doc) {
    error.value = null; //resets value on each request
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      error.value = "Could not send message";
      console.error(err.message);
    }
  }

  return { error, addDoc };
}

export default useCollection;
