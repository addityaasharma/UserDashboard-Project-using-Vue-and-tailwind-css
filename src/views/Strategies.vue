<template>
    <div class="bg-black min-h-screen p-6">
      <!-- Navigation Tabs -->
      <div class="flex space-x-4 bg-black p-3 rounded-lg shadow-md mb-6">
        <button v-for="tab in tabs" :key="tab" class="px-4 py-2 text-sm font-semibold" :class="activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'" @click="activeTab = tab">
          {{ tab }}
        </button>
      </div>
  
      <!-- Strategy Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div v-for="(strategy, index) in strategies" :key="index" class="bg-black rounded-lg shadow-md p-4 border-2 border-white">
          <!-- Header -->
          <div class="bg-blue-700 text-white text-center py-2 rounded-md font-semibold">
            {{ strategy.type }}
          </div>
  
          <!-- Strategy Details -->
          <div class="py-4">
            <h2 class="text-lg font-semibold flex items-center">
              <span class="ml-2 text-white">{{ strategy.name }}</span>
            </h2>
  
            <!-- PNL Chart Placeholder -->
            <div class="h-32 bg-gray-200 flex items-center justify-center text-gray-500 mt-3">
              No Positions
            </div>
  
            <!-- PNL & Risk Indicator -->
            <div class="flex justify-between items-center mt-4">
              <p class="text-lg font-semibold text-white">Total PNL: <span class="text-green-500">0.00</span></p>
              <div class="flex items-center space-x-2">
                <span class="text-xs bg-red-200 text-red-700 px-2 py-1 rounded-full">HIGH</span>
              </div>
            </div>
  
            <!-- Capital Required -->
            <p class="text-gray-600 text-sm mt-2">REQUIRED CAPITAL: ₹15K PER LOT</p>
          </div>
  
          <!-- Actions -->
          <div class="flex justify-between mt-4">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
              Subscribe
            </button>
            <button class="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { useStrategyStore } from '@/stores/strats';
import { storeToRefs } from 'pinia';

 const strategy = useStrategyStore()
 const {activeTab,tabs, strategies} = storeToRefs(strategy)
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
  
