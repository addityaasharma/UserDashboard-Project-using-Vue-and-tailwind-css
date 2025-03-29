<template>
    <div class="bg-black min-h-screen p-6 text-white">
      <!-- Positions Header -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold">Positions</h1>
        <p class="text-lg font-semibold mt-1">
          Today's Profit: 
          <span :class="totalProfit >= 0 ? 'text-green-500' : 'text-red-500'">
            {{ totalProfit >= 0 ? '+' : '' }}{{ totalProfit.toFixed(2) }}
          </span>
        </p>
      </div>
  
      <!-- Positions Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-black text-white rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-700 uppercase text-sm">
              <th class="py-3 px-4 text-left">Strategy</th>
              <th class="py-3 px-4 text-left">Broker</th>
              <th class="py-3 px-4 text-left">Script</th>
              <th class="py-3 px-4 text-left">Product</th>
              <th class="py-3 px-4 text-left">Side</th>
              <th class="py-3 px-4 text-left">Quantity</th>
              <th class="py-3 px-4 text-left">Buy Price</th>
              <th class="py-3 px-4 text-left">Sell Price</th>
              <th class="py-3 px-4 text-left">Position Status</th>
              <th class="py-3 px-4 text-left">P&L</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr v-for="(position, index) in positions" :key="index" class="border-b border-gray-300 hover:bg-gray-100">
              <td class="py-3 px-4">{{ position.strategy }}</td>
              <td class="py-3 px-4">{{ position.broker }}</td>
              <td class="py-3 px-4">{{ position.script }}</td>
              <td class="py-3 px-4">{{ position.product }}</td>
              <td class="py-3 px-4">{{ position.side }}</td>
              <td class="py-3 px-4">{{ position.quantity }}</td>
              <td class="py-3 px-4">{{ position.buyPrice }}</td>
              <td class="py-3 px-4">{{ position.sellPrice }}</td>
              <td class="py-3 px-4">{{ position.status }}</td>
              <td class="py-3 px-4 font-semibold" :class="position.pnl >= 0 ? 'text-green-500' : 'text-red-500'">
                {{ position.pnl >= 0 ? '+' : '' }}{{ position.pnl }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
import { usePositionsStore } from '@/stores/PositionStore';
import { storeToRefs } from 'pinia';

  const position = usePositionsStore()
  const {positions,totalProfit} = storeToRefs(position)
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>
  
