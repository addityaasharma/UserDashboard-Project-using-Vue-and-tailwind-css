<template>
    <div class="p-6 bg-black min-h-screen">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-black shadow-md rounded-lg">
          <thead>
            <tr class="bg-black text-white uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Strategy</th>
              <th class="py-3 px-6 text-left">Broker</th>
              <th class="py-3 px-6 text-center">Lot Size</th>
              <th class="py-3 px-6 text-center">ReEntry</th>
              <th class="py-3 px-6 text-center">ReEntry Triggered</th>
              <th class="py-3 px-6 text-center">Active</th>
              <th class="py-3 px-6 text-center">Joined At</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-white text-sm font-light">
            <tr v-for="(item, index) in strategies" :key="index" class="border-b border-gray-200 hover:bg-gray-100 hover:text-black">
              <td class="py-3 px-6 text-left flex items-center">
                <span class="ml-2">{{ item.strategy }}</span>
              </td>
              <td class="py-3 px-6 text-left">{{ item.broker }}</td>
              <td class="py-3 px-6 text-center">{{ item.lotSize }}</td>
              <td class="py-3 px-6 text-center">{{ item.reEntry }}</td>
              <td class="py-3 px-6 text-center">{{ item.reEntryTriggered }}</td>
              <td class="py-3 px-6 text-center">
                <label class="flex justify-center cursor-pointer">
                  <input type="checkbox" v-model="item.active" class="toggle-switch" />
                </label>
              </td>
              <td class="py-3 px-6 text-center">{{ item.joinedAt }}</td>
              <td class="py-3 px-6 text-center">
                <button class="text-blue-500 hover:underline mr-2">Edit</button>
                <button class="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
import { MyStrategies } from '@/stores/MyStrategyStore';
import { storeToRefs } from 'pinia';

  const mystrategies = MyStrategies()
  const {strategies} = storeToRefs(mystrategies)
  </script>
  
  <style>
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
