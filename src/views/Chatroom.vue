<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";
import { watch } from "vue";

export default {
  components: {
    Navbar,
    ChatWindow,
    NewChatForm,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        // will check if user returns null
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>