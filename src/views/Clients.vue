<template>
  <div class="p-4">
    <!-- Page Heading-->
    <div class="mt-2 w-full">
      <div class="lg:flex grid-cols-1 lg:space-y-0 space-y-3 gap-5 justify-between">
        <div>
          <p class="uppercase text-xs text-transparent font-semibold">overview</p>
          <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">Clients</h1>
        </div>
        <div class="flex gap-2">
          <button
            class="bg-primary border flex gap-2 text-white hover:bg-primary/80 dark:border-gray-700 rounded py-3 px-5"
          >
            <span class="icon text-2xl"><Icon icon="ic:twotone-plus" /></span>
            <span class="text"> Add a new Client</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="wrapping-table mt-10">
      <div class="overflow-x-auto">
        <!-- Search Bar --->
        <input
          type="text"
          placeholder="Search..."
          class="border rounded py-2 px-3 mb-4 focus:outline-none"
        />

        <!-- Table  -->
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Header 1</th>
              <th scope="col" class="px-6 py-3">Header 2</th>
              <th scope="col" class="px-6 py-3">Header 3</th>
              <th scope="col" class="px-6 py-3">Header 4</th>
              <th scope="col" class="px-6 py-3">Header 5</th>
              <th scope="col" class="px-6 py-3 text-transparent">Action Header</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="(item, index) in yourDataArray"
              :key="index"
            >
              <td class="px-6 py-4">{{ item.property1 }}</td>
              <td class="px-6 py-4">{{ item.property2 }}</td>
              <td class="px-6 py-4">{{ item.property3 }}</td>
              <td class="px-6 py-4">{{ item.property4 }}</td>
              <td class="px-6 py-4">{{ item.property5 }}</td>
              <td class="px-6 py-4">
                <button class="text-blue-500 hover:underline">Action</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ... (existing code) ...
  data() {
    return {
      // Assuming you have data to populate the table
      yourDataArray: [
        {
          property1: "Value1",
          property2: "Value2",
          property3: "Value3",
          property4: "Value4",
          property5: "Value5",
        },
        // Add more data as needed
      ],
      // ... (existing data properties) ...
    };
  },
  // ... (existing code) ...
};
</script>
