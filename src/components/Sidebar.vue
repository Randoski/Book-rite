<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact class="flex">
        <img class="w-8 mt-1" src="@/assets/logo/logo.svg" alt="logo windzo" />
        <h2
          class="text-2xl font-normal ml-3 mt-2 text-gray-800 dark:text-gray-200"
          translate="no"
        >
          BookRite<span class="text-primary">.</span>
        </h2>
      </router-link>
      <div
        class="bg-gray-700 absolute mt-3 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200"
      >
        Dark mode
      </div>
      <button
        class="lg:hidden block dark:text-gray-400 float-right -mt-7"
        @click="$emit('sidebarToggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4 divide-y dark:divide-gray-700">
      <div class="pb-5">
        <p class="font-medium text-gray-400 dark:text-gray-400">Menu</p>
        <div class="wrap-item mt-4 dark:text-gray-500">
          <!-- Dashboard -->
          <div class="item">
            <router-link
              to="/dashboard"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Dashboard </span>
            </router-link>
          </div>

          <!-- Invoices -->
          <div class="item mt-2">
            <router-link
              to="/invoices"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Invoices </span>
            </router-link>
          </div>

          <!-- Clients -->
          <div class="item mt-2">
            <router-link
              to="/clients"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Clients </span>
            </router-link>
          </div>

          <!-- Products and Services -->
          <div class="item mt-2">
            <router-link
              to="/products-and-services"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Products & Services </span>
            </router-link>
          </div>

          <!-- Reports -->
          <div class="item mt-2">
            <router-link
              to="/reports"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Reports </span>
            </router-link>
          </div>

          <!-- Profile -->
          <div class="item mt-2">
            <router-link
              to="/profile"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Profile</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
import MenuAccordion from "./MenuAccordion.vue";
export default {
  components: {
    Icon,
    MenuAccordion,
  },
};
</script>
