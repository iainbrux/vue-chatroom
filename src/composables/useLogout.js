import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

function useLogout() {
  return { logout, error };
}

export default useLogout;
