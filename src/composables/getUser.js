import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log("User state changed, current user is: ", _user);
  user.value = _user;
});

function getUser() {
  return {
    user,
  };
}

export default getUser;
