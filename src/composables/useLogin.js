import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

async function login(email, password) {
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password)
    if (!response) {
      throw new Error("Could not complete the login");
    }
    error.value = null;
    return response;
  } catch (err) {
    console.error(err.message);
    error.value = 'Invalid user credentials';
  }
}

function useLogin() {
  return { error, login };
}

export default useLogin;
