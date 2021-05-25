<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    async function handleSubmit() {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("User logged in");
      }
    }

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style>
</style>