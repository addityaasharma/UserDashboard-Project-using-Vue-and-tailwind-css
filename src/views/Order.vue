<template>
    <div class="bg-black min-h-screen p-6 text-white">
      <!-- Orders Header -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold">Orders</h1>
        <p class="text-lg font-semibold mt-1">
          {{ orders.length }} Orders
        </p>
      </div>
  
      <!-- Orders Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-black text-white rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-700 uppercase text-sm">
              <th class="py-3 px-4 text-left">Time</th>
              <th class="py-3 px-4 text-left">Broker</th>
              <th class="py-3 px-4 text-left">Strategy</th>
              <th class="py-3 px-4 text-left">Script</th>
              <th class="py-3 px-4 text-left">Quantity</th>
              <th class="py-3 px-4 text-left">Price</th>
              <th class="py-3 px-4 text-left">Status</th>
              <th class="py-3 px-4 text-left">Product Type</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr v-for="(order, index) in orders" :key="index" class="border-b border-gray-300 hover:bg-gray-100">
              <td class="py-3 px-4">09:13:54</td>
              <td class="py-3 px-4">{{ order.broker }}</td>
              <td class="py-3 px-4">{{ order.strategy }}</td>
              <td class="py-3 px-4">{{ order.script }}</td>
              <td class="py-3 px-4">{{ order.quantity }}</td>
              <td class="py-3 px-4">{{ order.price }}</td>
              <td class="py-3 px-4 font-semibold" :class="getStatusClass(order.status)">
                {{ order.status }}
              </td>
              <td class="py-3 px-4">{{ order.productType }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [
          { broker: "Angel (A537412)", strategy: "DOMAIN PRICE ACTION (BANKNIFTY)", script: "NIFTY15FEB24C21000 (NFO)", quantity: 502, price: 0, status: "REJECTED @ SELL", productType: "MIS" },
          { broker: "-", strategy: "DOMAIN TREND (NIFTY)", script: "NIFTY15FEB24P21150 (NFO)", quantity: 500, price: 0, status: "COMPLETE @ SELL", productType: "MIS" },
          { broker: "Iifl (AB046230)", strategy: "DOMAIN TREND (BANKNIFTY)", script: "NIFTY15FEB24P21150 (NFO)", quantity: 500, price: 0, status: "COMPLETE @ BUY", productType: "MIS" },
          { broker: "Iifl (AB046230)", strategy: "DOMAIN RANGE BREAKOUT (NIFTY)", script: "NIFTY15FEB24P20000 (NFO)", quantity: 50, price: 1.2, status: "COMPLETE @ BUY", productType: "MIS" },
          { broker: "Iifl (AB046230)", strategy: "DOMAIN RANGE BREAKOUT (BANKNIFTY)", script: "NIFTY15FEB24C22000 (NFO)", quantity: 50, price: 0, status: "REJECTED @ SELL", productType: "MIS" },
          { broker: "Iifl (AB046230)", strategy: "kuldeepsawrd (BANKNIFTY)", script: "FDGTVDSAA (NFO)", quantity: 1, price: 1, status: "SUCCESS @ BUY", productType: "MARKET" },
          { broker: "Angel (A537412)", strategy: "DOMAIN TREND (NIFTY)", script: "hfdh (fhdfh)", quantity: 2, price: 2, status: "OPEN @ dhfgdhfd", productType: "hrty" },
          { broker: "Iifl (AB046230)", strategy: "DOMAIN PRICE ACTION (BANKNIFTY)", script: "SBILIFE24JUNFUT (NFO)", quantity: 2, price: 2, status: "PENDING @ BUY", productType: "MIS" },
          { broker: "Angel (A537412612)", strategy: "DOMAIN RANGE BREAKOUT (BANKNIFTY)", script: "hfdh (fhdfh)", quantity: 2, price: 2, status: "CLOSE @ dhfgdhfd", productType: "hrty" },
        ],
      };
    },
    methods: {
      getStatusClass(status) {
        if (status.includes("COMPLETE")) return "text-green-500";
        if (status.includes("REJECTED")) return "text-red-500";
        if (status.includes("SUCCESS")) return "text-blue-500";
        if (status.includes("PENDING")) return "text-yellow-500";
        return "text-gray-700";
      },
    },
  };
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>
  