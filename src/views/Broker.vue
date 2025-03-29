<template>
    <div class="bg-black min-h-screen p-6 text-white">
      <!-- Add New Broker Button -->
      <div class="mb-4">
        <button class="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 hover:text-black">
          Add New Broker
        </button>
      </div>
  
      <!-- Brokers Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-black text-white rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-700 uppercase text-sm">
              <th class="py-3 px-6 text-left">Broker</th>
              <th class="py-3 px-6 text-left">Broker UserId</th>
              <th class="py-3 px-6 text-left">Token Date</th>
              <th class="py-3 px-6 text-center">Active</th>
              <th class="py-3 px-6 text-center">Connect</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr v-for="(broker, index) in brokers" :key="index" class="border-b border-gray-300 hover:bg-gray-100">
              <td class="py-3 px-6 text-left flex items-center">
                <span class="ml-2">{{ broker.name }}</span>
              </td>
              <td class="py-3 px-6 text-left">{{ broker.userId }}</td>
              <td class="py-3 px-6 text-left">{{ broker.tokenDate }}</td>
              <td class="py-3 px-6 text-center">
                <label class="flex justify-center cursor-pointer">
                  <input type="checkbox" v-model="broker.active" class="toggle-switch" />
                </label>
              </td>
              <td class="py-3 px-6 text-center">
                <button class="text-blue-500 hover:underline">🔗 Connect</button>
              </td>
              <td class="py-3 px-6 text-center">
                <button class="text-blue-500 hover:underline mr-2">✏️ Edit</button>
                <button class="text-blue-500 hover:underline mr-2">📜 Orders/Positions</button>
                <button class="text-red-500 hover:underline">🗑 Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  <script setup>

import { useBrokerStore } from '@/stores/BrokerStore';
import { storeToRefs } from 'pinia';

const broker = useBrokerStore()
  const {brokers} = storeToRefs(broker)
  </script>
  
  <style>
  /* Toggle Switch */
  .toggle-switch {
    appearance: none;
    width: 40px;
    height: 20px;
    background: #ddd;
    border-radius: 999px;
    position: relative;
    transition: background 0.3s;
  }
  .toggle-switch:checked {
    background: #2563eb;
  }
  .toggle-switch::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }
  .toggle-switch:checked::before {
    transform: translateX(20px);
  }
  </style>
  
