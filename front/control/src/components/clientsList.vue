<script setup>
import { ref } from "vue";
import axios from "axios";
const clientInfo = ref([]);
console.log(clientInfo.value);
const getClient = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8888/.netlify/functions/app/api/client/get"
    );
    clientInfo.value = res.data;
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
getClient();
</script>

<template>
  <div class="container">
    <div class="title">Mijozlar ro'yxati</div>
    <ol>
      <li v-for="client of clientInfo" :key="client">
        <router-link :to="'client/' + client._id" class="link">
          <div class="name">{{ client.name }} || {{ client.market_name }}</div>
          <div class="address">
            {{ client.address }}
          </div>
        </router-link>
      </li>
    </ol>
  </div>
</template>
<style scoped>
ol {
  padding: 0.2rem;
}
li {
  padding: 10px;
  border-bottom: 1px solid var(--vt-c-divider-dark-1);
}
li:hover {
  background-color: var(--vt-c-divider-dark-2);
}
.link {
  display: flex;
  justify-content: space-between;
}
.name {
  width: 200px;
}
</style>
