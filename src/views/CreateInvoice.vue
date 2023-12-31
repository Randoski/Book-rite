<template>
  <div>
    <!-- Form to Submit Client Details -->
    <form @submit.prevent="submitClient">
      <h2>Add New Client:</h2>
      <label for="clientName">Name:</label>
      <input type="text" v-model="clientName" required />

      <label for="clientEmail">Email:</label>
      <input type="email" v-model="clientEmail" required />

      <label for="clientPhone">Phone:</label>
      <input type="text" v-model="clientPhone" />

      <label for="clientAddress">Address:</label>
      <textarea v-model="clientAddress"></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useClientStore } from "../store/clientStore";

export default {
  data() {
    return {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientAddress: "",
    };
  },
  computed: {
    displayClients() {
      return useClientStore().displayClients;
    },
  },
  methods: {
    submitClient() {
      const store = useClientStore();
      store.setClientName(this.clientName);
      store.setClientEmail(this.clientEmail);
      store.setClientPhone(this.clientPhone);
      store.setClientAddress(this.clientAddress);
      store.submitClientDetails();
    },
  },
};
</script>
