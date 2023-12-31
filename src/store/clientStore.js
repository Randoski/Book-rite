import { defineStore } from 'pinia';
import { db } from '../main';

// Define and export the store directly
export const useClientStore = defineStore('clientStore', {
  state: () => ({
    clientDetails: {
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      clientAddress: '',
      outstandingBalance: 0,
      totalSales: 0,
    },
    clients: [],
  }),

  actions: {
    async fetchClients() {
      // ...
    },

    async addClient() {
      try {
        const details = { ...this.clientDetails };
        await db.collection('clients').add(details);
        this.clearForm();
      } catch (error) {
        console.error('Error adding client:', error);
      }
    },

    setClientDetails(details) {
      Object.assign(this.clientDetails, details);
    },

    clearForm() {
      this.clientDetails = {
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        clientAddress: '',
        outstandingBalance: 0,
        totalSales: 0,
      };
    },
    // ... other actions
  },

  getters: {
    displayClients: (state) => state.clients,
    // ... other getters
  },
});

