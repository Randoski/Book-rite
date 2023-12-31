<template>
  <div class="p-4">
    <!-- Page Heading-->
    <div class="mt-2 w-full">
      <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
        <div>
          <p class="uppercase text-xs text-transparent font-semibold">overview</p>
          <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
            Add a new Client
          </h1>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <section class="wrapping-table mt-10">
      <!-- Form -->
      <form @submit.prevent="submitForm" class="max-w-md mx-auto">
        <!-- Client Name -->
        <div class="mb-4">
          <label
            for="clientName"
            class="block text-xs font-medium text-gray-900 dark:text-gray-200"
          >
            Client Name
          </label>
          <input
            v-model="clientDetails.ClientName"
            type="text"
            name="clientName"
            class="mt-1 p-2 border w-full"
          />
        </div>

        <!-- Email Address -->
        <div class="mb-4">
          <label
            for="clientEmail"
            class="block text-xs font-medium text-gray-900 dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            v-model="clientDetails.ClientEmail"
            type="email"
            name="clientEmail"
            class="mt-1 p-2 border w-full"
          />
        </div>

        <!-- Phone Number -->
        <div class="mb-4">
          <label
            for="clientPhone"
            class="block text-xs font-medium text-gray-900 dark:text-gray-200"
          >
            Phone Number
          </label>
          <input
            v-model="clientDetails.ClientPhone"
            type="text"
            name="clientPhone"
            class="mt-1 p-2 border w-full"
          />
        </div>

        <!-- Address -->
        <div class="mb-4">
          <label
            for="clientAddress"
            class="block text-xs font-medium text-gray-900 dark:text-gray-200"
          >
            Address
          </label>
          <input
            v-model="clientDetails.ClientAddress"
            type="text"
            name="clientAddress"
            class="mt-1 p-2 border w-full"
          />
        </div>

        <!-- Submit Button -->
        <button type="submit" class="bg-primary text-white py-2 px-4 rounded">
          Save Client
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { useClientStore } from "../store/clientStore";

export default {
  data() {
    return {
      clientDetails: {
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAddress: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Import the store and call the addClient action
      const clientStore = useClientStore();
      clientStore.addClient();
    },
  },
};
</script>
