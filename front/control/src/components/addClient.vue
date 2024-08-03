<script setup>
import { ref } from "vue";
import dialogueMenu from "./dialogueMenu.vue";
import axios from "axios";
const toggleEvent = ref(false);
const name = ref("");
const market_name = ref("");
const phone_number = ref("");
const address = ref("");
const location = ref("");
const image = ref("");

const addClient = () => {
  const clientInfo = {
    name: name.value,
    market_name: market_name.value,
    phone_number: phone_number.value,
    address: address.value,
    location: location.value,
    agent_id: 123456,
    image: image.value,
  };
  try {
    const resp = axios.post(
      "http://localhost:8888/.netlify/functions/app/api/client/register-client",
      clientInfo
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="flex-container" v-if="toggleEvent">
      <dialogueMenu @close="toggleEvent = false">
        <form class="form">
          <div class="title title-center">mijoz qo'shish</div>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Mijoz ismi"
            v-model="name"
          />
          <input
            type="text"
            name="market_name"
            id=""
            placeholder="Do'kon nomi"
            v-model="market_name"
          />
          <input
            type="text"
            name="phone_number"
            id=""
            placeholder="Mobil raqam"
            v-model="phone_number"
          />
          <input
            type="text"
            name="address"
            id=""
            placeholder="Manzil"
            v-model="address"
          />
          <input
            type="text"
            name="location"
            id=""
            placeholder="Locatsiya"
            v-model="location"
          />
          <input
            type="text"
            name="image"
            id=""
            placeholder="rasm"
            v-model="image"
          />
          <button type="button" class="submit" @click="addClient">
            Kiritish
          </button>
        </form>
      </dialogueMenu>
    </div>

    <div class="wrapper">
      <button
        type="button"
        class="toggle-button"
        @click="toggleEvent = !toggleEvent"
      >
        <span
          class="material-symbols-outlined toggleUpDown"
          :class="{ rotate: toggleEvent }"
        >
          {{ toggleEvent ? "close" : "add" }}
        </span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: fixed;
  right: 20px;
  top: 87vh;
}
.toggle-button {
  width: 50px;
  height: 50px;
  border: none;
  background-color: var(--vt-c-black-soft);
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggleUpDown {
  transition: transform 0.3s ease-in-out !important;
}

.toggleUpDown.rotate {
  transform: rotate(180deg);
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}
input {
  height: 30px;
  margin: 0 20px;
}
.submit {
  width: 90%;
  height: 30px;
  margin: 0 auto;
  background-color: rgb(78, 78, 177);
  color: #fff;
  border: none;
  border-radius: 15px;
  transition: 0.2s;
}
.submit:active {
  background-color: rgb(99, 108, 238);
  border: 1px solid rgb(45, 31, 58);
}
</style>
