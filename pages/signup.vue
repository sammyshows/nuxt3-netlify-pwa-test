<template>
  <div class="w-full h-full flex justify-center items-center">
    <div style="display: flex; flex-direction: column">
      <h1>Signup to Stockwise</h1>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="text">
      <label for="password">Password</label>
      <input id="password" v-model="password" type="text">
      <button @click="$signUp(email, password)" style="padding: 10px 40px; border-radius: 5px; background: #36e4da; border: none; color: black; font-size: 20px; margin-top: 20px;">SIGNUP</button>
      <br><br><br><br>
      <label for="secretCode">Secret code</label>
      <input id="secretCode" v-model="secretCode" type="text">
      <button @click="$verifyEmail(secretCode)" style="padding: 10px 40px; border-radius: 5px; background: #36e4da; border: none; color: black; font-size: 20px; margin-top: 20px;">VERIFY</button>
      <br><br><br><br>
      <button @click="$login(email, password)" style="padding: 10px 40px; border-radius: 5px; background: #36e4da; border: none; color: black; font-size: 20px; margin-top: 20px;">LOGIN</button>
      <br><br><br><br>
      <button @click="$getCurrentSession()" style="padding: 10px 40px; border-radius: 5px; background: #36e4da; border: none; color: black; font-size: 20px; margin-top: 20px;">GET TOKEN</button>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Signup",

  data() {
    return {
      email: '',
      password: '',
      secretCode: ''
    }
  }
})
</script>