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
  
  <script setup>
import { useOrderStore } from '@/stores/Order';
import { storeToRefs } from 'pinia';

const order = useOrderStore(); // Initialize store

// Extract reactive properties (only `orders` is reactive)
const { orders } = storeToRefs(order); 

// Access `getStatusClass` directly (since it's a function)
const getStatusClass = order.getStatusClass;

  </script>
  
  <style>
  /* Additional styles if needed */
  </style>
  
